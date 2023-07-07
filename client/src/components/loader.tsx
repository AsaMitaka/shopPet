import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    speed={3}
    width={250}
    height={400}
    viewBox="0 0 250 400"
    backgroundColor="#f3f2f2"
    foregroundColor="#dbdbdb"
    {...props}>
    <rect x="28" y="16" rx="0" ry="0" width="198" height="182" />
    <circle cx="187" cy="196" r="27" />
    <rect x="28" y="226" rx="0" ry="0" width="199" height="43" />
  </ContentLoader>
);

export default MyLoader;
