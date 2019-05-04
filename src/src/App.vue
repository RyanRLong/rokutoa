<template>
  <div id="app">
    <html>

    <head>
      <meta charset="UTF-8">
      <title>title</title>
    </head>

    <body>
      <div class="container">
        <Power :endpoints=$options.endpoints />
        <Volume :endpoints=$options.endpoints />
        <Navigation :endpoints=$options.endpoints />
        <Playback :endpoints=$options.endpoints />
        <div v-on:click="send($options.endpoints.queries.activeChannel)" class="grid-element glass test">
          test
        </div>
      </div>
    </body>

    </html>
  </div>
</template>
<script>
import Power from './components/Power'
import Volume from './components/Volume'
import Navigation from './components/Navigation'
import Playback from './components/Playback'
import ENDPOINTS from './assets/data/endpoints.json'
import sassStyles from './assets/scss/rokutoa.module.scss'

export default {
  name: 'app',
  components: {
    'Power': Power,
    'Volume': Volume,
    'Navigation': Navigation,
    'Playback': Playback,
  },
  methods: {
    send: function (url) {
      console.log(url)
      this.$http.post(url)
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
    }
  },
  endpoints: ENDPOINTS
}

</script>
<style>
html,
body {
  margin: 0;
  height: 100%;
}

.container {
  display: grid;
  grid-gap: 10px 15px;
  align-content: center;
  align-items: stretch;
  justify-items: stretch;
  justify-content: stretch;
  height: 80%;
  grid-template-areas:
    '. power-on-button power-off-button'
    'volume-mute volume-down volume-up'
    'nav-back nav-up nav-home'
    'nav-left nav-select nav-right'
    '. nav-down .'
    '. playback-play .'
    'playback-backward  playback-stop playback-forward'
    '. playback-replay .'
    'test . .';
}

.test {
  grid-area: test;
}

.power-on-button {
  grid-area: power-on-button;
}

.power-off-button {
  grid-area: power-off-button;
}
.nav-up {
  grid-area: nav-up;
}

.nav-down {
  grid-area: nav-down;
}

.nav-left {
  grid-area: nav-left;
}

.nav-right {
  grid-area: nav-right;
}

.nav-back {
  grid-area: nav-back;
}

.nav-info {
  grid-area: nav-info;
}

.nav-select {
  grid-area: nav-select;
}

.nav-home {
  grid-area: nav-home;
}

.playback-play {
  grid-area: playback-play;
}

.playback-stop {
  grid-area: playback-stop;
}

.playback-backward {
  grid-area: playback-backward;
}

.playback-forward {
  grid-area: playback-forward;
}

.playback-replay {
  grid-area: playback-replay;
}

.volume-up {
  grid-area: volume-up;
}

.volume-down {
  grid-area: volume-down;
}

.volume-mute {
  grid-area: volume-mute;
}

.grid-element {
  padding: 5px;
  display: flex;
  color: #fff;
  border: 1px solid #fff;
}

.glass {
  /* background styles */
  position: relative;
  padding: 15px 25px;
  background-color: green;
  /*for compatibility with older browsers*/
  background-image: linear-gradient(green, lightgreen);

  /* text styles */
  text-decoration: none;
  color: #fff;
  font-family: sans-serif;
  font-weight: 100;

  border-radius: 3px;
  box-shadow: 0px 1px 4px -2px #333;
  text-shadow: 0px -1px #333;
}

.glass:after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: calc(100% - 4px);
  height: 50%;
  background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.2));
}

.glass:hover {
  background: linear-gradient(#073, #0fa);
}

</style>
