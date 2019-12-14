<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="navbar-nav">
        <router-link class="navbar-brand" to="/">Kintai</router-link>
      </div>
    </nav>
    <router-view class="p-3" />
  </div>
</template>

<style>
#app {
  background-color: #fafafa;
}
</style>
