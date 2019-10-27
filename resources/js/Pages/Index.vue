<template>
  <layout>
    <div class="w-full bg-white">
      <block title="Skills">
        <div class="flex">
          <icon name="laravel" size="2xl" />
          <icon name="vue" size="2xl" />
          <icon name="tailwind" size="2xl" />
          <icon name="html5" size="2xl" />
          <icon name="css3" size="2xl" />
          <icon name="mysql" size="2xl" />
        </div>
      </block>
      <block title="Work Experiences">
        <div class="xs:flex xs:flex-wrap">
          <card v-for="job in jobs" :key="job.id" class="xs:w-1/2 xs:mr-2 sm:w-1/4"
              :class="job.id % 2 == 0 ? 'xs:flex-none' : 'xs:flex-1'" :img="job.img" :href="job.website"
              :title="job.company" :img-class="job.imgClass">
            <template v-slot:body>
              <p class="text-gray-700 text-base">
                <p><icon name="calendar" size="xs" /> {{ job.date }}</p>
                <p><icon name="travel" size="xs" /> {{ job.position }}</p>
              </p>
            </template>
          </card>
        </div>
      </block>
      <block title="Showcases" face="secondary">
        <div class="xs:flex xs:flex-no-wrap text-gray-700">
          <card v-for="showcase in showcases" :key="showcase.id"
              class="w-full xs:w-1/2 xs:mr-2 sm:w-1/4" :img="showcase.img" :href="showcase.website"
              :title="showcase.title" :img-class="showcase.imgClass">
            <template v-slot:body>
              <p class="text-gray-700 text-base">
                <p><icon name="calendar" size="xs" /> {{ showcase.date }}</p>
                <p><icon name="bolt" size="xs" /> {{ showcase.client }}</p>
              </p>
            </template>
          </card>
        </div>
      </block>
      <contact />
      <footer />
    </div>
  </layout>
</template>

<script>
import { Layout, Block, Icon, Card, Contact, Footer } from '@/Shared'

export default {
  components: {
    Layout,
    Block,
    Icon,
    Card,
    Contact,
    Footer
  },
  data: () => {
    return {
      jobs: [
        {
          id: 4,
          img: '/img/yuca.jpg',
          website: 'https://yuca.co',
          company: 'Yuca Ltd.',
          date: 'Oct 2018 - Present',
          position: 'Full Stack Web Developer',
          imgClass: 'px-16 py-5 xs:py-2 sm:p-8',
        },
        {
          id: 3,
          img: '/img/turboly.png',
          website: 'https://turboly.com',
          company: 'PT Turboly Teknologi Indonesia',
          date: 'Oct 2016 - Sep 2018',
          position: 'Full Stack Web Developer',
          imgClass: 'sm:py-8',
        },
        {
          id: 2,
          img: '/img/link-integrasi.png',
          website: 'https://linkintegrasi.com',
          company: 'PT Lintas Karya Indonesia',
          date: 'Jan 2016 - Sep 2016',
          position: 'Full Stack Web Developer',
          imgClass: 'px-16 py-5 xs:px-8 xs:py-2 sm:p-6 smd:py-3',
        },
        {
          id: 1,
          img: '/img/jerbee.png',
          website: 'https://jerbee.co.id',
          company: 'PT Jerbee Indonesia',
          date: 'May 2015 - Dec 2015',
          position: 'Full Stack Web Developer',
          imgClass: 'px-16 py-5 xs:px-8 xs:py-10 sm:px-2 py-10',
        },
      ],
      showcases: [
        {
          id: 5,
          img: '/img/portfolio/mtp.png',
          website: 'https://mtp.bagaskarawg.id',
          title: 'Point of Sale',
          client: 'Mitra Tani Parahyangan',
          date: 'January 2019',
          imgClass: 'h-32',
        },
        {
          id: 4,
          img: '/img/portfolio/idndentist.png',
          website: 'https://idndentist.com',
          title: 'Dentist Marketplace',
          client: 'IDN Dentist',
          date: 'August 2018',
          imgClass: 'h-32',
        },
        {
          id: 3,
          img: '/img/portfolio/bni-eswat.png',
          title: 'BNI e-SWAT',
          client: 'Bank Negara Indonesia',
          date: 'August 2017',
          imgClass: 'h-32',
        },
        {
          id: 2,
          img: '/img/portfolio/lucky-property.png',
          website: 'https://luckyproperty123.com',
          title: 'Guest House Management',
          client: 'Lucky Property',
          date: 'August 2016',
          imgClass: 'h-32',
        },
        {
          id: 1,
          img: '/img/portfolio/alumni.png',
          website: 'https://alumni.smkn1cianjur.sch.id',
          title: 'Social Network',
          client: 'Alumni SMKN 1 Cianjur',
          date: 'May 2016',
          imgClass: 'h-32',
        }
      ],
    }
  }
}
</script>