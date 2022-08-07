import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const UploadDays = ({ days }) => {
  const [activeDayIndex, setActiveDayIndex] = useState(null);
  const [activeDay, setActiveDay] = useState(activeDayIndex);

  return (
    <div className="upload-tag-ctn">
      {days.map((item, index) => {
        const { id, day } = item;
        return (
          <div
            key={id}
            className={`${
              activeDayIndex === index
                ? 'upload-tag-label upload-day-label upload-tag-label-active'
                : 'upload-tag-label upload-day-label'
            }`}
            onClick={() => setActiveDayIndex(index)}
          >
            {day}
          </div>
        );
      })}
    </div>
  );
};

export default UploadDays;
