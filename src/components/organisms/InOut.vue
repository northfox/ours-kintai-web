<template>
  <section class="ours---in-out">
    <WakeUpButtons :user="user"></WakeUpButtons>
  </section>
</template>

<script>
import WakeUpButtons from '@/components/molecules/WakeUpButtons.vue'

export default {
  name: 'in-out',
  props: {
    user: Object
  },
  components: {
    WakeUpButtons
  }
}
</script>
