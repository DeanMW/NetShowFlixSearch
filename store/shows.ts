import { defineStore } from 'pinia';
import { Show, Genre, searchedShows } from '@/types/show';

enum ratingDirection {
    ascending = 'ascending',
    descending = 'descending',
}

// set the base API URL
const baseURL = 'https://api.tvmaze.com/';

export const useShowStore = defineStore('shows', {
  state: () => ({
    shows: [] as Show[],
    show: {} as Show,
    searchedShows: [] as searchedShows[],
    isLoading: false as boolean
  }),
  getters: {
    genres (state) {
      // Get all unique genres from the available shows.
      const allGenres = state.shows.map(show => show.genres).flat();
      return Array.from(new Set(allGenres));
    },
    sortedShowsByGenre: state => (genres: Genre) => {
      // Sort the genres from highest to lowest rated.
      return state.shows.filter(show => show.genres.includes(genres));
    },
    sortedShowsByRating: () => (shows: Show[], direction: ratingDirection = ratingDirection.descending) => {
      // Sort the shows from highest to lowest rated.
      if (direction === ratingDirection.descending) {
        return shows.sort((showA, showB) => showA.rating.average > showB.rating.average ? -1 : 1);
      }

      return shows.sort((showA, showB) => showA.rating.average < showB.rating.average ? -1 : 1);
    }
  },
  actions: {
    async fetchShows () {
      // if the shows are already fetched we can be lazy
      // since this isnt production code and it does not update frequently
      if (!this.shows.length) {
      // Get first 250 shows from the API.
      // Easiest way to do it without backend, without this we have to store all of the shows
      // and then filter on every show available in the API by genre
        const response = await fetch(`${baseURL}shows`);

        // TODO: validate this first? Error types?
        const shows = await response.json() as Show[];

        // Sort the shows so they are sorted from most viewed/rated to least viewed/rated (according to API)
        const sortedShows = shows.sort((a, b) => a.weight > b.weight ? -1 : 1);

        this.shows = sortedShows;
      }
    },
    async fetchSelectedShow (id: number) {
      // Get the selected show from the API.
      const response = await fetch(`${baseURL}shows/${id}?embed=cast`);

      const show = await response.json() as Show;

      this.show = show;
    },
    async fetchSearchedShows (searchTerm: string) {
      this.isLoading = true;
      // Get the searched shows from the API.
      const response = await fetch(`${baseURL}search/shows?q=${searchTerm}`);

      const searchedShows = await response.json() as Show[];

      this.searchedShows = searchedShows;
      this.isLoading = false;
    }
  }
});
