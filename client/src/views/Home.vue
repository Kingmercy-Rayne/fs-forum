<template>
  <div class="home">
    <div class="welcome">
      <h1>Welcome to Community</h1>
      <span class="subtitle"
        >A fully Open Source forum made as a follow along to COding Garden's
        tutorial of the same name</span
      >
      <button>Sign Up</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
};
</script>

<style lang="stylus" scoped>
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .welcome {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: solid thin #999;
    width: 50%;
    min-height: 20vh;

    h1 {
      padding: 1em;
      letter-spacing: 0.1rem;
    }

    .subtitle {
      padding: 0.6em;
    }

    button {
      margin: 1em 0;
      padding: 0.8em;
    }
  }
}
</style>
