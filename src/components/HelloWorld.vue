<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section class="hello-card">
    <p class="hello-label">Vue 3 + Vite</p>
    <h1>{{ msg }}</h1>
  </section>
</template>

<style scoped>
.hello-card {
  padding: 2.5rem 3rem;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.12);
  text-align: center;
}

.hello-label {
  margin: 0 0 0.75rem;
  color: #2563eb;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  color: #111827;
  font-size: clamp(2rem, 5vw, 3rem);
}
</style>