import React, { PureComponent } from 'react';

class VideoPreview extends PureComponent {
  render() {
    return this.props.imgType === 'video' ? (
      <video controls autoPlay loop>
        <source src={this.props.image} type="video/mp4" />
        {this.props.title} preview.
      </video>
    ) : (
      <img src={this.props.image} alt={`${this.props.title} preview`} />
    );
  }
}

VideoPreview.defaultProps = { imgType: '', image: '', title: '' };

VideoPreview.propTypes = {};

export default VideoPreview;
