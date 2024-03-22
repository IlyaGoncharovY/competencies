import {FC} from 'react';

import {DataType} from '../../../common';

import s from './ProffesionItem.module.css';

interface IProfessionItem2 {
  profession: DataType
  index: number
  total: number
}

export const ProfessionItem:FC<IProfessionItem2> = ({
  profession,
  index,
  total,
}) => {

  const angle = (index / total) * Math.PI * 2;
  const radius = 170;
  const radiusItem = -40;

  const left = 720 + Math.cos(angle) * radius;
  const top = 345 + Math.sin(angle) * radius;

  const leftItem = 13 + Math.cos(angle) * radiusItem;
  const topItem = 1 + Math.sin(angle) * radiusItem;

  return (
    <div className={s.professionItem}
      style={{
        position: 'absolute',
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
