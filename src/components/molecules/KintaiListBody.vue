<template>
  <tr>
    <KintaiListBodyItem :item="time.id"></KintaiListBodyItem>
    <KintaiListBodyItem :item="time.category"></KintaiListBodyItem>
    <KintaiListBodyItem :item="time.in_time"></KintaiListBodyItem>
    <KintaiListBodyItem :item="time.out_time"></KintaiListBodyItem>
    <KintaiListBodyItem :item="time.memo"></KintaiListBodyItem>
  </tr>
</template>

<script>
import KintaiListBodyItem from '../atoms/KintaiListBodyItem'
export default {
  name: 'kintai-list-body',
  components: {
    KintaiListBodyItem
  },
  props: {
    time: Object
  }
}
</script>
