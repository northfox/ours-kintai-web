<template>
  <KintaiListMenuItem :user="user"></KintaiListMenuItem>
</template>

<script>
import KintaiListMenuItem from '@/components/atoms/KintaiListMenuItem.vue'

export default {
  name: 'kintai-list-menu',
  components: {
    KintaiListMenuItem
  }
}
</script>
