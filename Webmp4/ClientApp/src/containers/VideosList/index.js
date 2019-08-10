/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VideosList from '../../components/VideosList';
import * as videosModule from '../../store/modules/videos/videosList';

const VideosListContainer = props => {
  const { list } = props;
  const { getList } = props;

  useEffect(() => {
    if (list.length === 0)
      getList();
  }, [])

  return (<VideosList {...props} />);
};

const mapStateToProps = (state) => {
  const { videosList } = state.videos;

  return videosList;
}

const actions = {
  getList: videosModule.getVideosList,
};

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators(actions, dispatch)
)(VideosListContainer);