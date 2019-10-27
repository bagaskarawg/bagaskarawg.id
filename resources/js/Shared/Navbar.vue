<template>
  <header id="navbar" class="fixed bg-red-700 w-full z-20">
    <div class="w-full sm:p-5 sm:h-16 sm:flex sm:justify-between sm:items-center">
      <div class="w-full sm:w-auto flex items-center justify-between px-4 py-3 sm:p-0">
        <inertia-link :href="route('home')" class="text-white">
          <strong>Bagaskara Wisnu Gunawan</strong>
        </inertia-link>
        <div class="sm:hidden">
          <button @click="isOpen = !isOpen" type="button" class="block text-white focus:outline-none">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
              <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
            </svg>
          </button>
        </div>
      </div>
      <nav :class="isOpen ? 'block' : 'hidden'" class="w-full sm:w-auto bg-red-700 sm:bg-transparent font-semibold text-white px-2 pt-2 pb-4 sm:flex sm:p-0">
        <a :href="route('blog.index')" class="block px-2 py-1 hover:underline">Blog</a>
        <a href="#skills" class="block px-2 py-1 hover:underline sm:mt-0 sm:ml-2">Skills</a>
        <a href="#work experiences" class="block px-2 py-1 hover:underline sm:mt-0 sm:ml-2">Work Experiences</a>
        <a href="#showcases" class="block px-2 py-1 hover:underline sm:mt-0 sm:ml-2">Showcases</a>
        <a href="#contact" class="block px-2 py-1 hover:underline sm:mt-0 sm:ml-2">Contact</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    handleScroll (e) {
      let className = 'shadow-lg'
      let navbar = document.getElementById('navbar')

      window.scrollY >= 1 ? navbar.classList.add(className) : navbar.classList.remove(className)
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>