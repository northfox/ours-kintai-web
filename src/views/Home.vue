<template>
  <div class="ours---home">
    <KintaiMenu></KintaiMenu>
    <InOut></InOut>
  </div>
</template>

<script>
// @ is an alias to /src
import KintaiMenu from '@/components/organisms/KintaiMenu.vue'
import InOut from '@/components/organisms/InOut.vue'

export default {
  name: 'home',
  components: {
    KintaiMenu,
    InOut
  }
}
</script>
