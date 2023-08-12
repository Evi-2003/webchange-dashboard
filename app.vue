<script setup>
  let user = useSupabaseUser() 
</script>



<template>
  <div class="w-full">

    <login v-if="!user"  />
    <dashboard v-else />
  </div>
</template>