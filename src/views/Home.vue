<template>
  <div class="ours---home">
    <KintaiMenu></KintaiMenu>
    <InOut :user="user"></InOut>
  </div>
</template>

<script>
// @ is an alias to /src
import KintaiMenu from '@/components/organisms/KintaiMenu.vue'
import InOut from '@/components/organisms/InOut.vue'

export default {
  name: 'home-template',
  data() {
    return {
      user: {
        id: 10001
      }
    }
  },
  components: {
    KintaiMenu,
    InOut
  }
}
</script>
