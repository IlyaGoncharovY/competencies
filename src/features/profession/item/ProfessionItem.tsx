import {FC} from 'react';

import {calculatePosition, DataType} from '../../../common';

import s from './ProffesionItem.module.css';

interface IProfessionItem {
    profession: DataType
    index: number
    total: number
    selectedProfession: boolean
    handleProfessionClick: (index: number) => void
}

export const ProfessionItem: FC<IProfessionItem> = ({
  profession,
  index,
  total,
  selectedProfession,
  handleProfessionClick,
}) => {

  const {
    left,
    top,
    leftItem,
    topItem,
  } = calculatePosition({ index, total, radius: 170, radiusItem: -40 });

  return (
    <div className={s.professionItem}
      style={{
        left: `${left}px`,
        top: `${top}px`,
      }}
      onClick={() => handleProfessionClick(index)}
    >
      {profession.name}
      <div className={`${s.circleItem} ${selectedProfession ? s.selected : ''}`}
        style={{
          left: `${leftItem}px`,
          top: `${topItem}px`,
        }}
      />
    </div>
  );
};
