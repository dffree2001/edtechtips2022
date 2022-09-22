<template>
  <div class="container">
    <header>
      <h1>EdTechTips</h1>
      <h2>~helping people teach~</h2>
    </header>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/starting">Getting Started</router-link>
    </nav>
    <router-view />
    <footer>
      <p>Need something here.</p>
    </footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h2 {
  font-weight: 100;
  font-size: medium;
  font-style: italic;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #1f5285;
    }
  }
}
footer {
  background: black;
  margin-top: 5rem;
  p {
    font-size: .9rem;
    color: white;
  }
}
</style>
