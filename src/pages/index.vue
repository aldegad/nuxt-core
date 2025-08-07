<script setup lang="ts">
import { useCommand } from "@aldegad/nuxt-core";

const enum Command {
  MOVE_UP = "move-up",
  MOVE_RIGHT = "move-right",
  MOVE_DOWN = "move-down",
  MOVE_LEFT = "move-left",
}

const commandMap = {
  [Command.MOVE_UP]: [["ArrowUp"], ["w"]],
  [Command.MOVE_RIGHT]: [["ArrowRight"], ["d"]],
  [Command.MOVE_DOWN]: [["ArrowDown"], ["s"]],
  [Command.MOVE_LEFT]: [["ArrowLeft"], ["a"]],
};

const { command } = useCommand({ map: commandMap });
</script>

<template>
  <div class="flex flex-col">
    <h1>Hello @aldegad/nuxt-core</h1>
    <p>command: {{ command }}</p>
  </div>
</template>
