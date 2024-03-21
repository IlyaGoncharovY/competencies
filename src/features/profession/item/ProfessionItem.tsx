import {FC} from 'react';

import {DataType} from '../../../common';

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

  const angle = (index / total) * Math.PI * 2;
  const radius = 200;

  const left = 250 + Math.cos(angle) * radius;
  const top = 250 + Math.sin(angle) * radius;

  return (
    <div
      className={s.professionItem}
      style={{ left: `${left}px`, top: `${top}px` }}
    >
      {profession.name}
    </div>
  );
};
