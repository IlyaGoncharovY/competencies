import {DataType} from '../data/DataSet.ts';

/**
 * converting the "data" array to calculate the unique values of the "mainSkills" and "otherSkills" arrays
 * @param dataArray
 * @return uniqueSkillsSet
 */
export const uniqueSkillArray = (dataArray: DataType[]): string[] => {
  const allSkills: string[] = dataArray.reduce((accumulator: string[], currentValue: DataType) => {
    return accumulator.concat(currentValue.mainSkills, currentValue.otherSkills);
  }, []);

  // Filter out duplicates
  const uniqueSkillsSet: Set<string> = new Set(allSkills);
  return [...uniqueSkillsSet];
};
