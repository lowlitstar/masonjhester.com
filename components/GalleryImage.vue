<template>
  <section>
    <div :class="`img ${id}`">
      <img :src="src" :alt="alt" />
    </div>
  </section>
</template>

<script>
export default {
  props: ['id', 'src', 'alt']
}
</script>
