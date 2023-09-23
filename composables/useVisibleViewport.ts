export const useVisibleViewport = () => {
  const isElementVisible = (el: HTMLElement | null, partiallyVisible = false): boolean => {
    if (!el) return false;
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return partiallyVisible
      ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
      ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
      : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
  }
  return {
    isElementVisible
  }
}