<template>
  <button class="btn btn-lg btn-primary" @click="save">起床</button>
</template>

<script>
import { SAVE_IN_WAKE_UP } from '@/store/actions.type'

export default {
  name: 'in-wake-up-button',
  methods: {
    save() {
      let now = this.$dayjs().format('YYYY-MM-DDTHH:mm:ss')
      this.$store.dispatch(SAVE_IN_WAKE_UP, {
        resource: '',
        slug: '',
        time: now
      })
    }
  }
}
</script>
