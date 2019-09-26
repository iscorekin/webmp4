import React, { useState } from 'react';
import propTypes from 'prop-types';
import * as UI from './styles';
import TagPlate from '../TagPlate';

const TagsManager = props => {
  const { label, tags, styles, deleteTag, addTag } = props;
  const [input, setInput] = useState('');

  const handleEnterClick = e => {
    if (input && e.keyCode === 13) {
      addTag(input);
      setInput('');
    }
    if (!input && e.keyCode === 8) {
      deleteTag(tags.length - 1);
    }
  };

  return (
    <UI.Container styles={styles}>
      <UI.Label>{label}</UI.Label>
      <UI.Wrapper>
        {tags &&
          tags.map((tag, i) => (
            <TagPlate key={i} onDelete={() => deleteTag(i)}>
              {tag}
            </TagPlate>
          ))}
        <UI.TagInput
          value={input}
          onChange={e =>
            [...e.currentTarget.value].length < 21 &&
            tags.length < 11 &&
            setInput(e.currentTarget.value)
          }
          onKeyDown={handleEnterClick}
        />
      </UI.Wrapper>
    </UI.Container>
  );
};

TagsManager.propTypes = {
  tags: propTypes.arrayOf(propTypes.string),
  label: propTypes.string,
  styles: propTypes.object,
  deleteTag: propTypes.func,
  addTag: propTypes.func,
};

export default TagsManager;
