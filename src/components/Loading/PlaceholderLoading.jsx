import React from 'react';
import ContentLoader from 'react-content-loader';

const PlaceholderLoading = (props) => (
  <ContentLoader
    speed={2}
    viewBox="0 0 340 60"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect rx="11" ry="11" width="340" height="60" />
  </ContentLoader>
);

export default PlaceholderLoading;
