import {useState} from 'react';

import {data, uniqueSkillArray} from '../../common';

import {SkillsComponent} from '../skills';

import s from './Profession.module.css';
import {ProfessionItem} from './item/ProfessionItem.tsx';

export const ProfessionComponent = () => {

  const [selectedProfession, setSelectedProfession] = useState<number | null>(null);

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const handleProfessionClick = (index: number) => {
    if (index === selectedProfession) {
      setSelectedProfession(-1);
      setSelectedSkills([]);
    } else {
      setSelectedProfession(index);
      setSelectedSkills(data[index].mainSkills.concat(data[index].otherSkills));
    }
  };

  const allSkills = uniqueSkillArray(data);

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
      {allSkills.map((skill, index) =>
        <SkillsComponent
          key={index}
          skill={skill}
          index={index}
          total={allSkills.length}
          selectedSkills={selectedSkills}
        />)}
    </div>
  );
};
