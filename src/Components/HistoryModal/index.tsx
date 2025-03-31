type HistoryModalProps = {
  year: string;
  title: string;
  description: string;
  onClose: () => void;
  stopPropagation: (e: React.MouseEvent) => void;
};
import { FC } from 'react';

const HistoryModal: FC<HistoryModalProps> = ({ year, title, description, onClose, stopPropagation }) => {
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
        <p className="whitespace-pre-line">{description}</p>
      </div>
    </div>
  );
}
export default HistoryModal;

