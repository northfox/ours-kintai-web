<template>
  <button class="btn btn-lg btn-primary" @click="save">起床</button>
</template>

<script>
import { SAVE_IN_TIME_WAKE_UP } from '@/store/actions.type'

export default {
  name: 'in-wake-up-button',
  methods: {
    save() {
      let userId = 10001
      let now = this.$dayjs().format(this.$constants.DATE_FORMAT)
      this.$store.dispatch(SAVE_IN_TIME_WAKE_UP, {
        resource: `/users/${userId}/times`,
        slug: null,
        data: {
          user_id: userId,
          in_time: now,
          category: 'wake-up'
        }
      })
    }
  }
}
</script>
