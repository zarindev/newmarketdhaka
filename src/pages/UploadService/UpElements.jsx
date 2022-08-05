import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { days, tags } from './upSerData';

export const UpSerTags = () => {
  return (
    <div className="upload-tag-ctn">
      {tags.map((tag) => {
        return (
          <div key={uuidv4()} className="upload-tag-label">
            {tag}
          </div>
        );
      })}
    </div>
  );
};

export const UpSerDays = () => {
  return (
    <div className="upload-tag-ctn">
      {days.map((day) => {
        return (
          <div key={uuidv4()} className="upload-tag-label upload-day-label">
            {day}
          </div>
        );
      })}
    </div>
  );
};
