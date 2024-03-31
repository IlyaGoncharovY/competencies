import {data, uniqueSkillArray} from '../../common';

import {SkillsComponent} from '../skills';

import s from './Profession.module.css';
import {ProfessionItem} from './item/ProfessionItem.tsx';
import {useProfessionAndSkillData} from './hook';

export const ProfessionComponent = () => {

  const {
    selectedProfession,
    handleProfessionClick,
    selectedSkills,
    handleSkillClick,
  } = useProfessionAndSkillData();

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
          selectedSkills={selectedSkills}
        />,
      )}
      {allSkills.map((skill, index) =>
        <SkillsComponent
          key={index}
          skill={skill}
          index={index}
          total={allSkills.length}
          selectedSkills={selectedSkills}
          handleSkillClick={handleSkillClick}
        />)}
    </div>
  );
};
