import {data} from '../../common';

import {ProfessionItem} from './item/ProfessionItem.tsx';

import s from './Profession.module.css';

export const ProfessionComponent = () => {
  return (
    <div className={s.professionContainer}>
      {data.map((profession, index) =>
        <ProfessionItem
          key={index}
          profession={profession}
          index={index}
          total={data.length}
        />,
      )}
    </div>
  );
};
