<template>
  <section style="display: contents;">
    <div v-on:click="send(endpoints.volume.up.url)" class="grid-element glass volume-up">
      <fa-icon v-if="endpoints.volume.up.icon" :icon="endpoints.volume.up.icon" />
      <span v-else>{{ endpoints.volume.up.name }}</span>
    </div>
    <div v-on:click="send(endpoints.volume.down.url)" class="grid-element glass volume-down">
      <fa-icon v-if="endpoints.volume.down.icon" :icon="endpoints.volume.down.icon" />
      <span v-else>{{ endpoints.volume.down.name }}</span>
    </div>
    <div v-on:click="send(endpoints.volume.mute.url)" class="grid-element glass volume-mute">
      <fa-icon v-if="endpoints.volume.mute.icon" :icon="endpoints.volume.mute.icon" />
      <span v-else>{{ endpoints.volume.mute.name }}</span>
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
