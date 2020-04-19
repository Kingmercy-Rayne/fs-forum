<template>
  <nav>
    <ul>
      <li><a href="#">Community</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppNav',
};
</script>

<style lang="stylus" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4em;
  min-height: 8vh;

  ul {
    display: flex;

    li {
      border: solid thin var(--border-color-alt);
      padding: 1em;
      border-radius: 1.2rem;
    }
  }
}
</style>
