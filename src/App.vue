<template>
  <RouterView :key="route.fullPath" />
</template>

<script>
import { defineComponent } from "vue";
import { RouterView, useRoute } from "vue-router";
export default defineComponent({
  components: {
    RouterView,
  },
  setup() {
    const route = useRoute();
    return {
      route,
    };
  },
});
</script>
