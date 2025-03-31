import { FC } from 'react';
import styles from './history.module.scss';

type HistoryProps = {
  title: string;
  year: string;
  onClick?: () => void;
};

const History: FC<HistoryProps> = (
  { year, title, onClick }
) => {
  return (
    <div className="flex flex-col items-center mt-2 mr-8 ml-8 mb-40" onClick={onClick}>
      <div className={`${styles["hex"]} hover:scale-105 transition-transform duration-300`}>
        <div>
          <p className="text-sm text-gray-300">{year}</p>
          <h3 className="text-lg font-bold text-white">{title}</h3>
        </div>
      </div>
    </div >
  );
}

export default History;