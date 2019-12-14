<template>
  <div class="ours---in-out___wake-up">
    <InWakeUpButton class="m-2"></InWakeUpButton>
    <OutWakeUpButton class="m-2"></OutWakeUpButton>
  </div>
</template>

<script>
  import InWakeUpButton from '@/components/atoms/InWakeUpButton.vue'
  import OutWakeUpButton from '@/components/atoms/OutWakeUpButton.vue'

  export default {
    name: 'wake-up-buttons',
    components: {
      InWakeUpButton,
      OutWakeUpButton
    }
  }
</script>
