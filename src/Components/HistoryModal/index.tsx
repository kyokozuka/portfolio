type HistoryModalProps = {
  year: string;
  title: string;
  company: string;
  place: string;
  description: string[];
  onClose: () => void;
  stopPropagation: (e: React.MouseEvent) => void;
};
import { FC } from 'react';

const HistoryModal: FC<HistoryModalProps> = ({ year, title, company, place, description, onClose, stopPropagation }) => {
  return (
    <div
      className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50"
      onClick={() => onClose()}
    >
      <div
        className="bg-white text-gray-900 p-6 rounded-lg shadow-lg max-w-4xl relative"
        onClick={(e) => stopPropagation(e)}
      >
        <h3 className="text-xl font-bold mb-2">{title} ({year})</h3>
        <h4 className="text-lg font-bold mb-2">{company} - {place}</h4>
        {description && description.length > 0 && (
          <ul className="list-disc list-inside mb-4">
            {description.map((desc, index) => (
              desc && desc.length > 0 && (
                <li key={index} className="text-m text-gray-700 mt-2">{desc}</li>
              )
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
export default HistoryModal;

