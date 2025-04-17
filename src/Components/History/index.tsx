import { FC } from 'react';
import styles from './history.module.scss';

type HistoryProps = {
  title: string;
  year: string;
  company: string;
  place: string;
  onClick?: () => void;
};

const History: FC<HistoryProps> = (
  { year, title, company, place, onClick }
) => {
  return (
    <div className="flex flex-col items-center mt-2 mr-14 ml-14 mb-36" onClick={onClick}>
      <div className={`${styles["hex"]} hover:scale-105 transition-transform duration-300`}>
        <div className="flex flex-col">
          <p className="text-sm text-gray-300">{year}</p>
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <h4 className="text-lg font-bold text-white">{company}</h4>
          <h4 className="text-lg font-bold text-white">{place}</h4>
        </div>
      </div>
    </div >
  );
}

export default History;