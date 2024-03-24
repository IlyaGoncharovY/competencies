import {FC} from 'react';

import {calculatePosition} from '../../common';

import s from './Skills.module.css';

interface ISkillsComponent {
    skill: string
    index: number
    total: number
}

export const SkillsComponent: FC<ISkillsComponent> = ({
  skill,
  index,
  total,
}) => {

  const {
    left,
    top,
    leftItem,
    topItem,
  } = calculatePosition({ index, total, radius: 300, radiusItem: -30 });

  return (
    <div className={s.skillContainer}
      style={{
        left: `${left}px`,
        top: `${top}px`,
      }}>
      {skill}
      <div className={s.skillCircle}
        style={{
          left: `${leftItem}px`,
          top: `${topItem}px`,
        }}/>
    </div>
  );
};
