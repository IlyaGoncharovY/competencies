import {DataType} from '../data/DataSet.ts';

/**
 * converting the "data" array to calculate the unique values of the "mainSkills" and "otherSkills" arrays
 * @param dataArray
 * @param skillType
 * @return uniqueSkillsSet
 */
export const uniqueSkillArray = (dataArray: DataType[], skillType: 'mainSkills' | 'otherSkills'): string[] => {
  const allSkills: string[] = dataArray.reduce((accumulator: string[], currentValue: DataType) => {
    return accumulator.concat(currentValue[skillType]);
  }, []);

  const uniqueSkillsSet: Set<string> = new Set(allSkills);
  return [...uniqueSkillsSet];
};
