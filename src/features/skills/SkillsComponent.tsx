import {FC} from 'react';

import {calculatePosition} from '../../common';

import s from './Skills.module.css';

interface ISkillsComponent {
    skill: string
    index: number
    total: number
    selectedSkills: string[]
}

export const SkillsComponent: FC<ISkillsComponent> = ({
  skill,
  index,
  total,
  selectedSkills,
}) => {

  const {
    left,
    top,
    leftItem,
    topItem,
  } = calculatePosition({ index, total, radius: 300, radiusItem: -30 });

  const opacity = selectedSkills.includes(skill) ? '1' : '0.5';

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
