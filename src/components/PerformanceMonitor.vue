<script setup lang="ts">
import Stats from "stats.js";
import { animatedFrame } from "@aldegad/nuxt-core";

let stats1: Stats;
let stats2: Stats;
let stats3: Stats;
let $animatedFrame: ReturnType<typeof animatedFrame> | null = null;

const container = ref<HTMLDivElement | null>(null);

const createPerformanceMonitor = () => {
  stats1 = new Stats();
  stats1.showPanel(0); // FPS
  stats1.dom.style.position = "relative";
  container.value?.appendChild(stats1.dom);

  stats2 = new Stats();
  stats2.showPanel(1); // MS
  stats2.dom.style.position = "relative";
  container.value?.appendChild(stats2.dom);

  stats3 = new Stats();
  stats3.showPanel(2); // MB
  stats3.dom.style.position = "relative";
  container.value?.appendChild(stats3.dom);

  const animate = () => {
    stats1.begin();
    stats1.end();
    stats2.begin();
    stats2.end();
    stats3.begin();
    stats3.end();
  };

  $animatedFrame = animatedFrame(animate);
};

const destroyStats = () => {
  if (stats1?.dom?.parentNode) {
    stats1.dom.parentNode.removeChild(stats1.dom);
  }
  if (stats2?.dom?.parentNode) {
    stats2.dom.parentNode.removeChild(stats2.dom);
  }
  if (stats3?.dom?.parentNode) {
    stats3.dom.parentNode.removeChild(stats3.dom);
  }
  $animatedFrame?.destroy();
};

onMounted(() => {
  createPerformanceMonitor();
});

onBeforeUnmount(() => {
  destroyStats();
});
</script>

<template>
  <div ref="container" class="fixed top-0 right-0 flex">
    <slot />
  </div>
</template>
