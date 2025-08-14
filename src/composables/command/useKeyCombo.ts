import { hangulQwertyMap } from "@aldegad/nuxt-core/utils";

export const useKeyCombo = () => {
  const keyCombo = ref<string[]>([]);

  const normalizeKey = (e: KeyboardEvent): string => {
    // 특수 키 처리
    if (e.key.toLowerCase() === "control") return "Control";
    if (e.key.toLowerCase() === "meta") return "Meta";
    if (e.key.toLowerCase() === "alt") return "Alt";
    if (e.key.toLowerCase() === "shift") return "Shift";
    if (e.key.toLowerCase() === "backspace") return "Backspace";
    if (e.key.toLowerCase() === "escape") return "Escape";
    if (e.key.toLowerCase() === "tab") return "Tab";
    if (e.key.toLowerCase() === "arrowup") return "ArrowUp";
    if (e.key.toLowerCase() === "arrowright") return "ArrowRight";
    if (e.key.toLowerCase() === "arrowdown") return "ArrowDown";
    if (e.key.toLowerCase() === "arrowleft") return "ArrowLeft";
    if (e.key === " ") return "Space";

    const lowerKey = e.key.toLowerCase();
    return hangulQwertyMap[lowerKey] || lowerKey;
  };

  const addKeyCombo = (e: KeyboardEvent) => {
    const key = normalizeKey(e);
    const uniqueKeys = Array.from(new Set([...keyCombo.value, key]));
    keyCombo.value = uniqueKeys;
  };

  const removeKeyCombo = (e: KeyboardEvent) => {
    const key = normalizeKey(e);
    keyCombo.value = keyCombo.value.filter((_key) => _key !== key);
    // console.log("removeKeyCombo:key/remainKeys", key, toRaw(keyCombo.value));
  };

  const clearKeyCombo = () => {
    keyCombo.value = [];
  };

  return {
    currentKeyCombo: keyCombo,
    addKeyCombo,
    removeKeyCombo,
    clearKeyCombo,
  };
};
