<template>
  <section style="display: contents;">
    <div v-on:click="send(endpoints.navigation.left.url)" class="grid-element glass nav-left">
          <fa-icon v-if="endpoints.navigation.left.icon" :icon="endpoints.navigation.left.icon" />
          <span v-else>{{ endpoints.navigation.left.name }}</span>
        </div>
        <div v-on:click="send(endpoints.navigation.right.url)" class="grid-element glass nav-right">
          <fa-icon v-if="endpoints.navigation.right.icon" :icon="endpoints.navigation.right.icon" />
          <span v-else>{{ endpoints.navigation.right.name }}</span>
        </div>
        <div v-on:click="send(endpoints.navigation.up.url)" class="grid-element glass nav-up">
          <fa-icon v-if="endpoints.navigation.up.icon" :icon="endpoints.navigation.up.icon" />
          <span v-else>{{ endpoints.navigation.up.name }}</span>
        </div>
        <div v-on:click="send(endpoints.navigation.down.url)" class="grid-element glass nav-down">
          <fa-icon v-if="endpoints.navigation.down.icon" :icon="endpoints.navigation.down.icon" />
          <span v-else>{{ endpoints.navigation.down.name }}</span>
        </div>
        <div v-on:click="send(endpoints.navigation.select.url)" class="grid-element glass nav-select">
          <fa-icon v-if="endpoints.navigation.select.icon" :icon="endpoints.navigation.select.icon" />
          <span v-else>{{ endpoints.navigation.select.name }}</span>
        </div>
        <div v-on:click="send(endpoints.navigation.back.url)" class="grid-element glass nav-back">
          <fa-icon v-if="endpoints.navigation.back.icon" :icon="endpoints.navigation.back.icon" />
          <span v-else>{{ endpoints.navigation.back.name }}</span>
        </div>
        <div v-on:click="send(endpoints.navigation.home.url)" class="grid-element glass nav-home">
          <fa-icon v-if="endpoints.navigation.home.icon" :icon="endpoints.navigation.home.icon" />
          <span v-else>{{ endpoints.navigation.home.name }}</span>
        </div>
  </section>
</template>
<script>
export default {
  name: 'Navigation',
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
