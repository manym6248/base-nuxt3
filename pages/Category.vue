<template>
  <div>
    {{store.count}}
  </div>
</template>

<script  setup>
const store = useCounterStore()
store.count++

</script>

<style>

</style>