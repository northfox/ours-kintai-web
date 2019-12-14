<template>
  <div class="ours---home">
    <Menu></Menu>
    <InOut></InOut>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/organisms/Menu.vue'
import InOut from '@/components/organisms/InOut.vue'

export default {
  name: 'home',
  components: {
    Menu,
    InOut
  }
}
</script>
