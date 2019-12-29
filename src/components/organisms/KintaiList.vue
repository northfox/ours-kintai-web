<template>
  <table>
    <KintaiListHeader></KintaiListHeader>
    <KintaiListBody v-for="time in times" :time="time" :key="time.id"></KintaiListBody>
  </table>
</template>

<script>
import KintaiListHeader from '../molecules/KintaiListHeader'
import KintaiListBody from '../molecules/KintaiListBody'

export default {
  name: 'kintai-list',
  components: {
    KintaiListHeader,
    KintaiListBody
  },
  props: {
    times: Array
  }
}
</script>
