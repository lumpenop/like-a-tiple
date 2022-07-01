export const increasingNumbers = (
  start: number,
  end: number,
  duration: number,
  set: React.Dispatch<React.SetStateAction<number>>,
) => {
  let startTimestamp: number = 0
  const step = (timestamp: number) => {
    if (!startTimestamp) startTimestamp = timestamp
    const progress = Math.min((timestamp - startTimestamp) / duration, 1)
    const result = Math.floor(progress * (end - start) + start)
    set(result)
    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }
  requestAnimationFrame(step)
}
