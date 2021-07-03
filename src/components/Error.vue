<template>
  <div>
    <p>404 Not Found</p>
    <p>id {{ id }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  components: {
  },
};
</script>
