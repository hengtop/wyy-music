export const scrollTo = (element, to, duration) => {
  if (duration <= 0) return;
  //最小间隔时间ms
  const everyTime = 10;
  const difference = to - element.scrollTop; //滚动的距离
  const perTick = (difference / duration) * everyTime; //单位间隔时间移动的距离
  setTimeout(() => {
    element.scrollTop += perTick;
    if (element.scrollTop === to) {
      return;
    } else {
      scrollTo(element, to, duration - everyTime);
    }
  }, everyTime);
};
