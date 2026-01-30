<script lang="ts" setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(value) {
    colorMode.preference = value ? "dark" : "light";
  },
});
</script>

<template>
  <label class="swap swap-rotate mx-4">
    <input v-model="isDark" type="checkbox">

    <Icon class="swap-on" name="tabler:sun-filled" />
    <Icon class="swap-off" name="tabler:moon-filled" />
  </label>
</template>
