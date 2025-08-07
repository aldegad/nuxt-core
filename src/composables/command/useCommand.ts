import { onBeforeUnmount, onMounted, reactive, ref, watch } from "vue";
import type { CommandProps, CommandState } from "@aldegad/nuxt-core/schemas";
import { preventShortcut } from "./preventShortcut";
import { useKeyCombo } from "./useKeyCombo";

export const useCommand = (props: CommandProps): { command: CommandState } => {
  let removeShortcutEvents: () => void;
  const { currentKeyCombo, addKeyCombo, removeKeyCombo } = useKeyCombo();
  const state = ref<string[]>([]);

  const command = reactive({
    keys: currentKeyCombo,
    state,
  });

  const handleKeyDown = (e: KeyboardEvent) => {
    if (preventShortcut(e)) return;
    e.preventDefault();
    if (e.repeat) return;
    addKeyCombo(e);
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    e.preventDefault();
    removeKeyCombo(e);
  };

  const createShortcutEvents = () => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    const removeShortcutEvents = () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };

    return removeShortcutEvents;
  };

  // 여러 커맨드가 동시에 발동될 수 있도록, 현재 눌린 키 조합에 해당하는 모든 커맨드를 배열로 반환
  watch(currentKeyCombo, (keys) => {
    const actives: string[] = [];
    for (const [command, comboArrArr] of Object.entries(props.map)) {
      for (const comboArr of comboArrArr) {
        if (comboArr.every((k) => keys.includes(k))) {
          actives.push(command);
          break;
        }
      }
    }
    state.value = actives;
  });

  onMounted(() => {
    removeShortcutEvents = createShortcutEvents();
  });

  onBeforeUnmount(() => {
    removeShortcutEvents();
  });

  return {
    command,
  };
};
