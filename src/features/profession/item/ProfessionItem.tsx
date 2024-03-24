import {FC} from 'react';

import {calculatePosition, DataType} from '../../../common';

import s from './ProffesionItem.module.css';

interface IProfessionItem {
    profession: DataType
    index: number
    total: number
}

export const ProfessionItem: FC<IProfessionItem> = ({
  profession,
  index,
  total,
}) => {

  const { left, top, leftItem, topItem } = calculatePosition({ index, total, radius: 170, radiusItem: -40 });

  return (
    <div className={s.professionItem}
      style={{
        left: `${left}px`,
        top: `${top}px`,
      }}>
      {profession.name}
      <div className={s.circleItem} style={{
        left: `${leftItem}px`,
        top: `${topItem}px`,
      }}/>
    </div>
  );
};
