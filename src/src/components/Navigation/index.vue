<template>
  <section style="display: contents;">
    <div v-on:click="post(endpoints.navigation.left.url)" class="grid-element glass nav-left">
      <fa-icon v-if="endpoints.navigation.left.icon" :icon="endpoints.navigation.left.icon" />
      <span v-else>{{ endpoints.navigation.left.name }}</span>
    </div>
    <div v-on:click="post(endpoints.navigation.right.url)" class="grid-element glass nav-right">
      <fa-icon v-if="endpoints.navigation.right.icon" :icon="endpoints.navigation.right.icon" />
      <span v-else>{{ endpoints.navigation.right.name }}</span>
    </div>
    <div v-on:click="post(endpoints.navigation.up.url)" class="grid-element glass nav-up">
      <fa-icon v-if="endpoints.navigation.up.icon" :icon="endpoints.navigation.up.icon" />
      <span v-else>{{ endpoints.navigation.up.name }}</span>
    </div>
    <div v-on:keyup.enter="post(endpoints.navigation.down.url)" v-on:click="post(endpoints.navigation.down.url)" class="grid-element glass nav-down">
      <fa-icon v-if="endpoints.navigation.down.icon" :icon="endpoints.navigation.down.icon" />
      <span v-else>{{ endpoints.navigation.down.name }}</span>
    </div>
    <div v-on:click="post(endpoints.navigation.select.url)" class="grid-element glass nav-select">
      <fa-icon v-if="endpoints.navigation.select.icon" :icon="endpoints.navigation.select.icon" />
      <span v-else>{{ endpoints.navigation.select.name }}</span>
    </div>
    <div v-on:click="post(endpoints.navigation.back.url)" class="grid-element glass nav-back">
      <fa-icon v-if="endpoints.navigation.back.icon" :icon="endpoints.navigation.back.icon" />
      <span v-else>{{ endpoints.navigation.back.name }}</span>
    </div>
    <div v-on:click="post(endpoints.navigation.home.url)" class="grid-element glass nav-home">
      <fa-icon v-if="endpoints.navigation.home.icon" :icon="endpoints.navigation.home.icon" />
      <span v-else>{{ endpoints.navigation.home.name }}</span>
    </div>
  </section>
</template>
<script>
import Button from '../Mixins/Button'
export default {
  name: 'Navigation',
  mixins: [Button],
  props: {
    endpoints: Object
  },
  created () {
    let that = this

    document.addEventListener('keyup', function (evt) {
      evt.preventDefault()
      evt.stopPropagation()
      const arrowLeft = 37
      const arrowRight = 39
      const arrowUp = 38
      const arrowDown = 40
      const enter = 13
      const back = 8
      const home = 36

      if (evt.keyCode === arrowLeft) {
        that.post(that.endpoints.navigation.left.url)
      }
      if (evt.keyCode === arrowRight) {
        that.post(that.endpoints.navigation.right.url)
      }
      if (evt.keyCode === arrowUp) {
        that.post(that.endpoints.navigation.up.url)
      }
      if (evt.keyCode === arrowDown) {
        that.post(that.endpoints.navigation.down.url)
      }
      if (evt.keyCode === enter) {
        that.post(that.endpoints.navigation.select.url)
      }
      if (evt.keyCode === back) {
        that.post(that.endpoints.navigation.back.url)
      }
      if (evt.keyCode === home) {
        that.post(that.endpoints.navigation.home.url)
      }
    })
  }
}

</script>
