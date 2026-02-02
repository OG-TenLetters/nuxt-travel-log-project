<script setup lang="ts">
import AuthButton from "../auth-button.vue";
</script>

<template>
  <div class="navbar bg-primary text-primary-content">
    <NuxtLink to="/" class="navbar-start btn btn-ghost text-xl">
      Travel Log
    </NuxtLink>
    <div class="navbar-end">
      <AppThemeToggle />
      <AuthButton />
    </div>
  </div>
</template>
