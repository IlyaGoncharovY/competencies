import {useCallback, useState} from 'react';

import {data} from '../../../common';

/**
 * hook for render Profession and Skill data
 * @return selectedProfession
 * @return handleProfessionClick
 * @return selectedSkills
 * @return handleSkillClick
 */
export const useProfessionAndSkillData = () => {

  const [selectedProfession, setSelectedProfession] = useState<number | null>(null);

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const handleProfessionClick = useCallback((index: number) => {
    if (index !== selectedProfession) {
      setSelectedProfession(index);
      setSelectedSkills(data[index].mainSkills.concat(data[index].otherSkills));
    } else {
      setSelectedProfession(null);
      setSelectedSkills([]);
    }
  }, [selectedProfession]);

  const handleSkillClick = useCallback((skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills([]);
    } else {
      setSelectedSkills([skill]);
    }
  }, [selectedSkills]);

  return {
    selectedProfession,
    handleProfessionClick,
    selectedSkills,
    handleSkillClick,
  };
};
