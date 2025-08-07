export type CommandProps = {
  map: Record<string, string[][]>; // 각 커맨드별로 여러 키조합(OR), 각 키조합은 여러 키(AND)
};

export type CommandState = {
  keys: string[];
  state: string[];
};
