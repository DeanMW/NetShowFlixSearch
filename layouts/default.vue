<template>
  <div class="page">
    <header class="header">
      <div class="container">
        <div class="header__title-container" :onclick="() => navigateTo('/')">
          <h1 class="header__title">
            NetShowFlixSearch
          </h1>
        </div>
        <div class="header__search">
          <input id="showName" v-model.trim="showName" type="text" class="header__search-input" @keyup.enter="searchShows">
          <button class="header__search-btn" :onclick="searchShows">
            Search
          </button>
        </div>
      </div>
    </header>
    <div class="body">
      <slot />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'NetShowFlixSearch'
});

const showName = ref('');

const searchShows = async () => {
  if (showName.value) {
    await navigateTo(`/search/${showName.value}`);
  }
};
</script>

<style lang="scss">
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  position: sticky;
  top:0px;
  padding-bottom: 30px;

  // Set z-index so sticky header is not transparent
  z-index: 1;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 100%;
    padding: 10px;
    margin: 0 auto;
    background-color: black;
  }

  &__title-container {
    cursor: pointer;
    padding: 10px;
  }

  &__title {
    color: white;
  }

  &__search-btn {
    background-color: white;
    color: black;
    border: none;
    padding: 8px;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }

  &__search-input {
    padding: 8px;
    border: none;
    border-radius: 5px 0 0 5px;
    background: white;
  }

  @media screen and (max-width: 768px) {
    &__search {
      padding-top: 40px;
    }
  }
}

.body {
  padding: 0 50px;
}
</style>
