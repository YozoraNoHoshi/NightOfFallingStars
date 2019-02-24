import React, { PureComponent } from 'react';
import { Document, Page } from 'react-pdf';
class Resume extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { scale: 1 };
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.setDebounce);
  }

  setDebounce = () => {
    clearTimeout(this.debounce);
    this.debounce = setTimeout(this.updateWindowDimensions, 100);
  };

  componentWillUnmount() {
    clearTimeout(this.debounce);
    window.removeEventListener('resize', this.setDebounce);
  }

  updateWindowDimensions = () => {
    if (window.innerWidth < 410) this.scale = 0.5;
    else if (window.innerWidth < 630 && window.innerWidth >= 410)
      this.scale = 0.66;
    else this.scale = 1;
    this.setState(prevSt => {
      if (prevSt.scale !== this.scale) return { scale: this.scale };
      else return prevSt;
    });
  };
  render() {
    return (
      <div className="resume-container">
        <Document file={this.props.resume}>
          <Page pageNumber={1} scale={this.state.scale} />
        </Document>
        <a
          href={this.props.resume}
          className="no-underline resume"
          download
          style={{ marginBottom: '5%' }}
        >
          DOWNLOAD AS PDF
        </a>
      </div>
    );
  }
}

Resume.defaultProps = {};

Resume.propTypes = {};

export default Resume;
