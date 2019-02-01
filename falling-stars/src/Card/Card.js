import React, { PureComponent } from 'react';
//import { connect } from 'react-redux';

class Card extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
  };

  render() {
    return (
      <div className="Card card-slot flip">
        <div className="card" onClick={this.handleClick}>
          <div className="card-front" />
          <div className={`card-slot ${this.props.suite}`}>
            <div className="kado-text">{this.props.number}</div>
            <div className="kado-br-text">{this.props.number}</div>
          </div>
        </div>
      </div>
    );
  }
}

Card.defaultProps = {};

Card.propTypes = {};

export default Card;
/*
function mapStateToProps(state) {
  return {  };
}

//export default connect(mapStateToProps)(Card)
*/
