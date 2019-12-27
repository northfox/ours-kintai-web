<template>
  <div class="ours---in-out___wake-up">
    <InWakeUpButton class="m-2"></InWakeUpButton>
    <OutWakeUpButton class="m-2"></OutWakeUpButton>
    <br>
    <TimeBar class="p-1" :time="inTime"></TimeBar>
    <TimeBar class="p-1" :time="outTime"></TimeBar>
  </div>
</template>

<script>
import InWakeUpButton from '@/components/atoms/InWakeUpButton.vue'
import OutWakeUpButton from '@/components/atoms/OutWakeUpButton.vue'
import TimeBar from '@/components/atoms/TimeBar.vue'

export default {
  name: 'wake-up-buttons',
  data() {
    return {
      inTime: '',
      outTime: ''
    }
  },
  props: {
    user: Object
  },
  created() {
    this.inTime = this.$dayjs()
    this.outTime = this.$dayjs()
  },
  components: {
    InWakeUpButton,
    OutWakeUpButton,
    TimeBar
  }
}
</script>
