import {FC} from 'react';

import {calculatePosition} from '../../common';

import s from './Skills.module.css';

interface ISkillsComponent {
    skill: string
    index: number
    total: number
    selectedProfession: boolean
}

export const SkillsComponent: FC<ISkillsComponent> = ({
  skill,
  index,
  total,
  selectedProfession,
}) => {

  const {
    left,
    top,
    leftItem,
    topItem,
  } = calculatePosition({ index, total, radius: 300, radiusItem: -30 });

  const opacity = selectedProfession ? '1' : '0.5';

  return (
    <div className={s.skillContainer}
      style={{
        left: `${left}px`,
        top: `${top}px`,
        opacity: opacity,
      }}>
      {skill}
      <div className={s.skillCircle}
        style={{
          left: `${leftItem}px`,
          top: `${topItem}px`,
          opacity: opacity,
        }}/>
    </div>
  );
};
