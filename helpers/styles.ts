export const radomColors = (data: (string | number)[]) => {
  const colors: string[] = [];
  data.forEach(() => {
    const color = `hsla(${~~(360 * Math.random())}, 70%,  72%, 0.8)`
    colors.push(color);
  });
  return colors;
};

