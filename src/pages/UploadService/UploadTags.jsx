import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const UploadTags = ({ tags, inputRef }) => {
  const [activeTagIndex, setActiveTagIndex] = useState(null);

  return (
    <div className="upload-tag-ctn">
      {tags.map((item, index) => {
        const { tag, id } = item;

        const handleToggle = (index) => {
          setActiveTagIndex(index);
          if (inputRef) {
            inputRef.current.value = tag;
          }
        };

        return (
          <div
            key={id}
            className={`${
              activeTagIndex === index
                ? 'upload-tag-label upload-tag-label-active'
                : 'upload-tag-label'
            }`}
            onClick={() => handleToggle(index)}
          >
            {tag}
          </div>
        );
      })}
    </div>
  );
};

export default UploadTags;
