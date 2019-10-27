<template>
  <block title="Contact">
    <div  class="xs:flex">
      <div class="w-full xs:w-1/2 pr-5">
        <mgl-map
            :accessToken="accessToken"
            :mapStyle="mapStyle"
            @load="onMapLoad">
          <mgl-marker :coordinates="coordinates" color="blue" ref="marker">
            <mgl-popup anchor="top">
              <p>Perumahan Muslim Tasnim Leles No. 39</p>
              <p>Sukamanah, Karangtengah, Cianjur</p>
              <p>Jawa Barat, Indonesia, 43281</p>
            </mgl-popup>
          </mgl-marker>
        </mgl-map>
      </div>
      <form @submit.prevent="submit" class="w-full xs:w-1/2">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full sm:w-1/2 px-3 mb-6 sm:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-full-name">
              Full Name
            </label>
            <input v-model="form.fullname" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-full-name" type="text" placeholder="Jane Doe">
          </div>
          <div class="w-full sm:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
              Email
            </label>
            <input v-model="form.email" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="jane.doe@bagaskarawg.id">
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-message">
              Message
            </label>
            <textarea v-model="form.message" rows="5" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-message" placeholder="Your message here ..."></textarea>
          </div>
        </div>
        <button type="submit" class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
          Send
        </button>
      </form>
    </div>
  </block>
</template>

<script>
import Vue from 'vue'
import Block from './Block'
import Mapbox from 'mapbox-gl'
import VueSweetalert2 from 'vue-sweetalert2'
import { MglMap, MglMarker, MglPopup } from 'vue-mapbox'

Vue.use(VueSweetalert2, {
  timer: 2000,
  toast: true,
  type: 'success',
  position: 'top-end',
  showConfirmButton: false,
})

export default {
  components: {
    Block,
    MglMap,
    MglMarker,
    MglPopup
  },
  data() {
    return {
      form: {
        fullname: '',
        email: '',
        message: '',
      },
      accessToken: 'pk.eyJ1IjoiYmFnYXNrYXJhNyIsImEiOiJjazI4OXQ0YmoxdjQ4M25tcTloNGhoeGRiIn0.UrvYIG92SEBaHXyePB7cVg',
      mapStyle: 'mapbox://styles/mapbox/light-v9',
      coordinates: [107.159623, -6.829165],
    };
  },
  methods: {
    async onMapLoad(event) {
      const asyncActions = event.component.actions

      const newParams = await asyncActions.flyTo({
        center: this.coordinates,
        zoom: 11,
        speed: 1
      })

      this.$refs.marker.togglePopup()
    },
    submit () {
      this.$inertia.post(this.route('contacts.store'), this.form)
        .then(() => {
          Vue.swal('Your message has been received!')
          this.form = {
            fullname: '',
            email: '',
            message: '',
          }
        })
    }
  },
  created() {
    this.mapbox = Mapbox;
  }
}
</script>