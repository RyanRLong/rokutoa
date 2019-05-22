<template>
  <section style="display: contents;">
    <div v-on:click="post(endpoints.playback.play.url)" class="grid-element glass playback-play">
          <fa-icon v-if="endpoints.playback.play.icon" :icon="endpoints.playback.play.icon" />
          <span v-else>{{ endpoints.playback.play.name }}</span>
        </div>
        <div v-on:click="post(endpoints.playback.backward.url)" class="grid-element glass playback-backward">
          <fa-icon v-if="endpoints.playback.backward.icon" :icon="endpoints.playback.backward.icon" />
          <span v-else>{{ endpoints.playback.backward.name }}</span>
        </div>
        <div v-on:click="post(endpoints.playback.forward.url)" class="grid-element glass playback-forward">
          <fa-icon v-if="endpoints.playback.forward.icon" :icon="endpoints.playback.forward.icon" />
          <span v-else>{{ endpoints.playback.forward.name }}</span>
        </div>
        <div v-on:click="post(endpoints.playback.stop.url)" class="grid-element glass playback-stop">
          <fa-icon v-if="endpoints.playback.stop.icon" :icon="endpoints.playback.stop.icon" />
          <span v-else>{{ endpoints.playback.stop.name }}</span>
        </div>
        <div v-on:click="post(endpoints.playback.replay.url)" class="grid-element glass playback-replay">
          <fa-icon v-if="endpoints.playback.replay.icon" :icon="endpoints.playback.replay.icon" />
          <span v-else>{{ endpoints.playback.replay.name }}</span>
        </div>
  </section>
</template>
<script>
import Button from '../Mixins/Button'
export default {
  name: 'Volume',
  mixins: [Button],
  props: {
    endpoints: Object
  }
}

</script>
