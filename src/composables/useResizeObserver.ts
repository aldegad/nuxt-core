import type { Ref } from "vue";

type UseResizeObserverProps = {
  ref: Ref<HTMLElement | SVGSVGElement | null>;
  immediate?: boolean;
};
export const useResizeObserver = ({ ref, immediate = false }: UseResizeObserverProps) => {
  let watchCallback: (() => void) | null = null;
  const watchResize = (callback: () => void) => {
    watchCallback = callback;
  };
  const resizeObserver = new ResizeObserver(() => {
    watchCallback?.();
  });

  watch(ref, (newRef, _, onCleanup) => {
    if (newRef) {
      resizeObserver.observe(newRef);
      if (immediate) watchCallback?.();
      onCleanup(() => {
        resizeObserver.disconnect();
      });
    }
  });

  return {
    watchResize,
  };
};
