import {FC, memo} from 'react';

import {calculatePosition, DataType} from '../../../common';

import s from './ProffesionItem.module.css';

interface IProfessionItem {
    profession: DataType
    index: number
    total: number
    selectedProfession: boolean
    handleProfessionClick: (index: number) => void
    selectedSkills: string[]
}

export const ProfessionItem: FC<IProfessionItem> = memo(({
  profession,
  index,
  total,
  selectedProfession,
  handleProfessionClick,
  selectedSkills,
}) => {

  const {
    left,
    top,
    leftItem,
    topItem,
  } = calculatePosition({ index, total, radius: 160, radiusItem: -30 });

  const isSelectedBySkills = selectedSkills.some(skill =>
    profession.mainSkills.includes(skill) || profession.otherSkills.includes(skill),
  );

  const isSelected = selectedSkills.length === 1
    ? isSelectedBySkills
    : selectedProfession;

  const handleClick = () => {
    handleProfessionClick(index);
  };

  return (
    <div
      className={s.professionItem}
      style={{
        left: `${left}px`,
        top: `${top}px`,
      }}
      onClick={handleClick}
    >
      {profession.name}
      <div
        className={`${s.circleItem} ${isSelected ? s.selected: ''}`}
        style={{
          left: `${leftItem}px`,
          top: `${topItem}px`,
        }}
      />
    </div>
  );
});
