import { defineStore } from 'pinia';
import { Show, Genre } from '@/types/show';

enum ratingDirection {
    ascending = 'ascending',
    descending = 'descending',
}

export const useShowStore = defineStore('shows', {
  state: () => ({ shows: [] as Show[] }),
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
  actions: {}
});
