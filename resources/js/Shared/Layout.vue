<template>
  <main>
    <navbar />
    <jumbotron />
    <div class="p-t-2">
      <slot />
    </div>
    <footer-bar />
  </main>
</template>

<script>
import Navbar from './Navbar'
import FooterBar from './Footer'
import Jumbotron from './Jumbotron'

export default {
  components: {
    Navbar,
    FooterBar,
    Jumbotron,
  },
  props: {
    title: String,
  },
  watch: {
    title: {
      immediate: true,
      handler(title) {
        document.title = title ? `${title} - ${this.$page.app.name}` : this.$page.app.name
      }
    }
  }
}
</script>