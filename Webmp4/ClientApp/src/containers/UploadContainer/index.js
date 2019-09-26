import React from 'react';
import Upload from '../../components/Upload';

const UploadContainer = props => {

  const context = {...props};
  return (<Upload {...context} />)
}

export default UploadContainer;