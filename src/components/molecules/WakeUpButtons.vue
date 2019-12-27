<template>
  <div class="ours---in-out___wake-up">
    <InWakeUpButton class="m-2"></InWakeUpButton>
    <OutWakeUpButton class="m-2"></OutWakeUpButton>
    <br />
    <TimeBar class="p-1" :time="inTime"></TimeBar>
    <TimeBar class="p-1" :time="outTime"></TimeBar>
    <p>{{ times }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { FIND_IN_TIME_WAKE_UP } from '@/store/actions.type'
import InWakeUpButton from '@/components/atoms/InWakeUpButton.vue'
import OutWakeUpButton from '@/components/atoms/OutWakeUpButton.vue'
import TimeBar from '@/components/atoms/TimeBar.vue'

export default {
  name: 'wake-up-buttons',
  components: {
    InWakeUpButton,
    OutWakeUpButton,
    TimeBar
  },
  data() {
    return {
      inTime: '',
      outTime: ''
    }
  },
  props: {
    user: Object
  },
  computed: {
    ...mapGetters(['times'])
  },
  created() {
    this.times = this.$store.dispatch(FIND_IN_TIME_WAKE_UP, {
      resource: `/users/${this.user.id}/times`
    })
    this.inTime = this.$dayjs().format(this.$constants.TIME_FORMAT)
    this.outTime = this.$dayjs().format(this.$constants.TIME_FORMAT)
  }
}
</script>
