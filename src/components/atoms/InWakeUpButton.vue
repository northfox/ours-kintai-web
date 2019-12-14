<template>
  <button class="btn btn-lg btn-primary" @click="save">起床</button>
</template>

<script>
export default {
  name: 'in-wake-up-button',
  methods: {
    save() {
      let now = this.$dayjs().format('YYYY-MM-DDTHH:mm:ss')
      console.log(now)
    }
  }
}
</script>
