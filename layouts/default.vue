<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>
<script setup >
import AppHeader from '~/components/Header/AppHeader .vue';
import AppFooter from '~/components/Footer/AppFooter.vue';

</script>