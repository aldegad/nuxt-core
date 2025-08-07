export type AnimatedFrameCallbackProps = {
  totalTime: number;
  deltaTime: number;
};

export const animatedFrame = (callback: (props: AnimatedFrameCallbackProps) => void) => {
  let animatedId: number | null = null;
  let lastTimestamp = 0;

  const callbackFn = (timestamp: number) => {
    const deltaTime = lastTimestamp ? timestamp - lastTimestamp : 0;
    lastTimestamp = timestamp;
    callback({ totalTime: timestamp, deltaTime });
    animatedId = requestAnimationFrame(callbackFn);
  };
  animatedId = requestAnimationFrame(callbackFn);

  const destroy = () => {
    if (animatedId) cancelAnimationFrame(animatedId);
  };

  return { destroy };
};
