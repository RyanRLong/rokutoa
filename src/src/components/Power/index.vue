<template>
  <section style="display: contents;">
    <div v-on:click="send(endpoints.power.on.url)" class="grid-element glass power-on-button">
      <fa-icon v-if="endpoints.power.on.icon" :icon="endpoints.power.on.icon" />
      <span v-else>{{ endpoints.power.on.name }}</span>
    </div>
    <div v-on:click="send(endpoints.power.off.url)" class="grid-element glass power-off-button">
      <fa-icon v-if="endpoints.power.off.icon" :icon="endpoints.power.off.icon" />
      <span v-else>{{ endpoints.power.off.name }}</span>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Power',
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
