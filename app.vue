<script setup>
  const user = useSupabaseUser()  
</script>



<template>
  <div class="w-full">
    <dashboard v-if="user" />
    <login v-else />
  </div>
</template>