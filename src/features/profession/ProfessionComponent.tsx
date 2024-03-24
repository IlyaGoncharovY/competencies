import {data, uniqueSkillArray} from '../../common';

import {SkillsComponent} from '../skills';

import s from './Profession.module.css';
import {ProfessionItem} from './item/ProfessionItem.tsx';

export const ProfessionComponent = () => {

  const uniqueMainSkillsArray = uniqueSkillArray(data, 'mainSkills');
  const uniqueOtherSkillsArray = uniqueSkillArray(data, 'otherSkills');

  return (
    <div className={s.professionContainer}>
      <div className={s.professionCircle}/>
      <div className={s.circle}/>
      {data.map((profession, index) =>
        <ProfessionItem
          key={index}
          profession={profession}
          index={index}
          total={data.length}
        />,
      )}
      {uniqueMainSkillsArray.map((skill, index) =>
        <SkillsComponent
          key={index}
          skill={skill}
          index={index}
          total={uniqueMainSkillsArray.length}
        />)}
      {uniqueOtherSkillsArray.map((skill, index) =>
        <SkillsComponent
          key={index}
          skill={skill}
          index={index}
          total={uniqueOtherSkillsArray.length}
        />)}
    </div>
  );
};
