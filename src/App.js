import React from 'react';

import Fade from './Fade';

export default class App extends React.Component {

  state = {
    show: false
  }

  handleToggle() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.handleToggle.bind(this)}>toogle</button>
        </div>
        <Fade in={this.state.show}>
          Fade effect
        </Fade>
      </div>
    );
  }

}