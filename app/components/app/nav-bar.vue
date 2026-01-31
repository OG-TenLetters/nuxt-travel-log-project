<template>
  <div class="navbar bg-primary text-primary-content">
    <NuxtLink to="/" class="navbar-start btn btn-ghost text-xl">
      Travel Log
    </NuxtLink>
    <div class="navbar-end">
      <AppThemeToggle />
      <a class="btn btn-accent">
        Sign In With Github
        <!-- es lint test for try-parse -->
        <Icon name="tabler:brand-github" size="24" />
      </a>
    </div>
  </div>
</template>
