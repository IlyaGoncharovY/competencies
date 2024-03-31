import {FC, memo} from 'react';

import {calculatePosition} from '../../common';

import s from './Skills.module.css';

interface ISkillsComponent {
    skill: string
    index: number
    total: number
    selectedSkills: string[]
    handleSkillClick: (skill: string) => void
}

export const SkillsComponent: FC<ISkillsComponent> = memo(({
  skill,
  index,
  total,
  selectedSkills,
  handleSkillClick,
}) => {

  const {
    left,
    top,
    leftItem,
    topItem,
  } = calculatePosition({ index, total, radius: 300, radiusItem: -30 });

  const opacity = selectedSkills.includes(skill) ? '1' : '0.8';

  const handleClick = () => {
    handleSkillClick(skill);
  };

  return (
    <div className={s.skillContainer}
      style={{
        left: `${left}px`,
        top: `${top}px`,
        opacity: opacity,
      }}
      onClick={handleClick}
    >
      {skill}
      <div className={s.skillCircle}
        style={{
          left: `${leftItem}px`,
          top: `${topItem}px`,
          opacity: opacity,
        }}/>
    </div>
  );
});
