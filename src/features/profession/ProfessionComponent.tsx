import {data} from '../../common';

import s from './Profession.module.css';
import {ProfessionItem} from './item/ProfessionItem.tsx';

export const ProfessionComponent = () => {
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
    </div>
  );
};
