import React, { useState } from 'react';
import { remove } from 'lodash';
import * as UI from './styles';
import DragnDrop from './components/DragnDrop';
import TextInput from '../../ui/TextInput';
import Switch from '../../ui/Switch';
import colors from '../../constants/colors';
import TagsManager from '../../ui/TagsManager';

const Upload = props => {
  const [videoFile, setVideoFile] = useState(undefined);
  const [name, setName] = useState(undefined);
  const [description, setDescription] = useState(undefined);
  const [tags, setTags] = useState([]);
  const [nsfw, setNsfw] = useState(false);

  return (
    <UI.Wrapper>
      <UI.Content>
        {videoFile ? (
          <UI.Player src={window.URL.createObjectURL(videoFile)} />
        ) : (
          <DragnDrop handleVideoDropped={setVideoFile} />
        )}
      </UI.Content>
      <UI.FormWrapper>
        <TextInput
          styles={UI.MarginStyles}
          onChange={setName}
          value={name}
          label="название"
          isValid={!!name}
        />
        <TextInput
          styles={UI.MarginStyles}
          onChange={setDescription}
          value={description}
          label="описание"
          lines={5}
        />
        <TagsManager 
          label="теги"
          styles={UI.MarginStyles}
          tags={tags}
          deleteTag={(index) => {
            setTags(remove(tags, (x, i) => i !== index));
          }}
          addTag={(tag) => {setTags([...tags, tag])}}
        />
        <UI.SwitchContainer>
          видео содержит что-то неприличное?
          <Switch
            options={['', '']}
            onChange={setNsfw}
            value={nsfw}
            colors={[undefined, colors.burntSienna]}
          />
        </UI.SwitchContainer>
      </UI.FormWrapper>
    </UI.Wrapper>
  );  
};

export default Upload;
