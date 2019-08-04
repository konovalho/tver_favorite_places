export const getScrollElement = (element) => {
  if (element) {
    const top = element.scrollTop;
    const left = element.scrollLeft;
    return {
      top,
      left,
    };
  }
  const top = window.pageYOffset || document.documentElement.scrollTop;
  const left = window.pageXOffset || document.documentElement.scrollLeft;

  return {
    top,
    left,
  };
};

export const getCurrentDelta = (deltaX, deltaY) => {
  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    return deltaX;
  }

  return deltaY;
};

export const getLastScrollCoord = (newScroll, maxScroll) => {
  const distantsToBottom = maxScroll - newScroll;

  if (newScroll <= 0) {
    return 0;
  }

  if (distantsToBottom <= 5) {
    return maxScroll;
  }

  return newScroll;
};
