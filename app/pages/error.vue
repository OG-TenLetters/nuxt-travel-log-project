<script lang="ts" setup>
const route = useRoute();
const error = route.query.error || "An unknown error occured.";
</script>

<template>
  <div class="card bg-base-300 container mt-4 min-h-72 text-center mx-auto flex flex-col justify-center gap-4">
    <div role="alert" class="alert alert-error min-w-1/2 mx-auto">
      <span>Oh no! {{ error }}</span>
    </div>
    <NuxtLink to="/" class="btn btn-primary w-40 mx-auto">
      Home
      <Icon name="tabler:arrow-back" size="32" />
    </NuxtLink>
  </div>
</template>
