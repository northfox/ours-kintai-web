<template>
  <tr>
    <KintaiListHeaderItem :item="header.ID"></KintaiListHeaderItem>
    <KintaiListHeaderItem :item="header.CATEGORY"></KintaiListHeaderItem>
    <KintaiListHeaderItem :item="header.IN_TIME"></KintaiListHeaderItem>
    <KintaiListHeaderItem :item="header.OUT_TIME"></KintaiListHeaderItem>
    <KintaiListHeaderItem :item="header.MEMO"></KintaiListHeaderItem>
  </tr>
</template>

<script>
import KintaiListHeaderItem from '@/components/atoms/KintaiListHeaderItem.vue'

export default {
  name: 'kintai-list-header',
  components: {
    KintaiListHeaderItem
  },
  data() {
    return {
      header: this.$constants.KINTAI_HEADER
    }
  }
}
</script>
