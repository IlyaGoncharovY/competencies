interface IPositionCalculator {
    index: number;
    total: number;
    radius: number;
    radiusItem: number;
}

/**
 * calculate position elements of circle
 * @param index
 * @param total
 * @param radius
 * @param radiusItem
 * @return left
 * @return top
 * @return leftItem
 * @return topItem
 */
export const calculatePosition = ({ index, total, radius, radiusItem }: IPositionCalculator) => {
  const angle = (index / total) * Math.PI * 2;

  const left = 235 + Math.cos(angle) * radius;
  const top = 255 + Math.sin(angle) * radius;

  const leftItem = 22 + Math.cos(angle) * radiusItem;
  const topItem = 1 + Math.sin(angle) * radiusItem;

  return { left, top, leftItem, topItem };
};
