import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { tagsData } from './tagsData';

const UploadTags = () => {
  return (
    <div className="upload-tag-ctn">
      {tagsData.map((tag) => {
        return (
          <div key={uuidv4()} className="upload-tag-label">
            {tag}
          </div>
        );
      })}
    </div>
  );
};

export default UploadTags;
