<script setup>
  const user = useSupabaseUser()  
  
</script>



<template>
  <div class="w-full">

    <login v-if="!user"  />
    <dashboard v-else />
  </div>
</template>