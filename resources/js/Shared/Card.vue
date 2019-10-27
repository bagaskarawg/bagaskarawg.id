<template>
  <div class="w-full rounded overflow-hidden shadow mb-2 bg-white">
    <a v-if="href" :href="href" target="_blank">
      <img class="w-full" :class="imgClass" :src="img" :alt="title">
    </a>
    <img v-else class="w-full" :class="imgClass" :src="img" :alt="title">
    <div class="px-6 py-4" :class="bodyClass">
      <div class="font-bold text-xl mb-2">{{ title }}</div>
      <slot name="body" />
    </div>
    <div class="px-6 py-4" :class="footerClass">
      <slot name="footer" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    img: String,
    href: String,
    title: String,
    imgClass: String,
    bodyClass: String,
    footerClass: String,
  }
}
</script>