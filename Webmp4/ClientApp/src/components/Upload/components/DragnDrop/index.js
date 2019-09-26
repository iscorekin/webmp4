/* eslint-disable react/prop-types */
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import * as UI from './styles';

const DragnDrop = props => {
  const { handleVideoDropped } = props;
  const [error, setError] = useState(undefined);

  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles.length > 1) {
      setError('можно только один файл');
      return;
    }

    if (!/(webm|mp4)$/ig.test(acceptedFiles[0].type.split('/')[1])) {
      setError('можно только webm или mp4 файл');
      return;
    }

    handleVideoDropped(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <UI.Container>
      <UI.Wrapper {...getRootProps()} isDragging={isDragActive}>
        <input {...getInputProps()} />
        <UI.Text isDragging={isDragActive}>
          {isDragActive ? 'да-да, прямо сюда' : 'бросай свой файл сюда'}
        </UI.Text>
      </UI.Wrapper>
      <UI.Error>{error}</UI.Error>
    </UI.Container>
  );
};

export default DragnDrop;
