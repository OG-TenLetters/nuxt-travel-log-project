<script setup lang="ts">
const authStore = useAuthStore();
</script>

<template>
  <div class="hero bg-base-300 container mx-auto mt-4">
    <div class="hero-content text-center min-h-96">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">
          Travel Log
        </h1>
        <p class="py-6">
          Keep track of your travels and adventures with this simple travel log application
        </p>
        <ClientOnly>
          <AuthButton v-if="!authStore.user" />
          <NuxtLink v-else to="/dashboard" class="btn btn-primary">
            Start Logging
          </NuxtLink>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>
