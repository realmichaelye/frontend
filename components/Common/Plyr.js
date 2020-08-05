import React from 'react';
import PropTypes from 'prop-types';
import Plyr from 'plyr';
import styles from '../../styles/modules/Plyr.module.scss';

class PlyrComponent extends React.Component {
  componentDidMount() {
    this.player = new Plyr('.js-plyr', this.props.options)
    this.player.source = {
      type: 'video',
      sources: [
        {
          src: this.props.videoId,
          provider: 'youtube'
        },
      ],
    };
  }

  componentDidUpdate(){
    this.player.source = {
      type: 'video',
      sources: [
        {
          src: this.props.videoId,
          provider: 'youtube'
        },
      ],
    };
  }

  componentWillUnmount() {
    this.player.destroy()
  }

  render() {
    return (
      <video className={`js-plyr ${styles.plyr}`}></video>
    )
  }
}

PlyrComponent.defaultProps = {
  options: {
    controls: [
      'rewind',
      'play',
      'fast-forward',
      'progress',
      'current-time',
      'duration',
      'mute',
      'volume',
      'settings',
      'fullscreen',
    ],
    i18n: {
      restart: 'Restart',
      rewind: 'Rewind {seektime}s',
      play: 'Play',
      pause: 'Pause',
      fastForward: 'Forward {seektime}s',
      seek: 'Seek',
      seekLabel: '{currentTime} of {duration}',
      played: 'Played',
      buffered: 'Buffered',
      currentTime: 'Current time',
      duration: 'Duration',
      volume: 'Volume',
      mute: 'Mute',
      unmute: 'Unmute',
      enableCaptions: 'Enable captions',
      disableCaptions: 'Disable captions',
      download: 'Download',
      enterFullscreen: 'Enter fullscreen',
      exitFullscreen: 'Exit fullscreen',
      frameTitle: 'Player for {title}',
      captions: 'Captions',
      settings: 'Settings',
      menuBack: 'Go back to previous menu',
      speed: 'Speed',
      normal: 'Normal',
      quality: 'Quality',
      loop: 'Loop',
    },
  },
  videoId: 'default'
  // sources: {
  //   type: 'video',
  //   sources: [
  //     {
  //       src: 'default',
  //       provider: 'youtube'
  //     },
  //   ],
  // },
}

PlyrComponent.propTypes = {
  options: PropTypes.object,
  // sources: PropTypes.object,
  // source: PropTypes.func,
  videoId: PropTypes.string,
  // destroy: PropTypes.func,
}

export default PlyrComponent
