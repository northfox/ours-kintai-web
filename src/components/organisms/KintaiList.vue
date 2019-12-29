<template>
  <table class="table table-striped table-hover table-sm">
    <thead class="thead-dark">
      <KintaiListHeader></KintaiListHeader>
    </thead>
    <tbody>
      <KintaiListBody v-for="time in times" :time="time" :key="time.id"></KintaiListBody>
    </tbody>
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
