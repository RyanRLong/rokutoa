<template>
  <section style="display: contents;">
    <div v-on:click="send(endpoints.playback.play.url)" class="grid-element glass playback-play">
          <fa-icon v-if="endpoints.playback.play.icon" :icon="endpoints.playback.play.icon" />
          <span v-else>{{ endpoints.playback.play.name }}</span>
        </div>
        <div v-on:click="send(endpoints.playback.backward.url)" class="grid-element glass playback-backward">
          <fa-icon v-if="endpoints.playback.backward.icon" :icon="endpoints.playback.backward.icon" />
          <span v-else>{{ endpoints.playback.backward.name }}</span>
        </div>
        <div v-on:click="send(endpoints.playback.forward.url)" class="grid-element glass playback-forward">
          <fa-icon v-if="endpoints.playback.forward.icon" :icon="endpoints.playback.forward.icon" />
          <span v-else>{{ endpoints.playback.forward.name }}</span>
        </div>
        <div v-on:click="send(endpoints.playback.stop.url)" class="grid-element glass playback-stop">
          <fa-icon v-if="endpoints.playback.stop.icon" :icon="endpoints.playback.stop.icon" />
          <span v-else>{{ endpoints.playback.stop.name }}</span>
        </div>
        <div v-on:click="send(endpoints.playback.replay.url)" class="grid-element glass playback-replay">
          <fa-icon v-if="endpoints.playback.replay.icon" :icon="endpoints.playback.replay.icon" />
          <span v-else>{{ endpoints.playback.replay.name }}</span>
        </div>
  </section>
</template>
<script>
export default {
  name: 'Volume',
  props: {
    endpoints: Object,
  },
  methods: {
    send: function(url) {
      console.log(url)
      this.$http.post(url)
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
    }
  },
}

</script>
