<template>
  <div class="min-h-0 w-full p-5" :class="containerClass">
    <h2 :id="title.toLowerCase()" class="text-2xl font-semibold mb-3" :class="headingClass">{{ title }}</h2>
    <slot />
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      containerClass: '',
      headingClass: '',
    }
  },
  props: {
    title: String,
    face: String,
  },
  mounted () {
    switch (this.face) {
      case 'secondary':
        this.containerClass = 'bg-red-700 text-white'
        this.headingClass = 'text-white'
        break;
      default:
        this.headingClass = 'text-red-700'
        break;
    }
  }
}
</script>