import {useState} from 'react';

import {data, uniqueSkillArray} from '../../common';

import {SkillsComponent} from '../skills';

import s from './Profession.module.css';
import {ProfessionItem} from './item/ProfessionItem.tsx';

export const ProfessionComponent = () => {

  const [selectedProfession, setSelectedProfession] = useState<number>(-1);

  const handleProfessionClick = (index: number) => {
    setSelectedProfession(index === selectedProfession ? -1 : index);
  };

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
          selectedProfession={index === selectedProfession}
          handleProfessionClick={handleProfessionClick}
        />,
      )}
      {uniqueMainSkillsArray.map((skill, index) =>
        <SkillsComponent
          key={index}
          skill={skill}
          index={index}
          total={uniqueMainSkillsArray.length-1.5}
        />)}
      {uniqueOtherSkillsArray.map((skill, index) =>
        <SkillsComponent
          key={index}
          skill={skill}
          index={index}
          total={uniqueOtherSkillsArray.length+1.5}
        />)}
    </div>
  );
};
