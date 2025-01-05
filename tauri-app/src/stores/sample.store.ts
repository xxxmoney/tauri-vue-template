import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useMenuStore = defineStore('menus', () => {
  const foo = ref(true);
  const bar = computed(() => !!foo.value);

  async function getFoo() {
    // Api call
    await new Promise((resolve) => setTimeout(resolve, 500));

    const result = { foo: false };
    foo.value = result.foo;
  }

  return {
    foo,
    bar,

    getFoo
  };
});
