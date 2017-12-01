import React from 'react';
import { Transition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 }
};

export default class Fade extends React.Component {

  render() {
    let children = this.props.children;

    return (
      <Transition in={this.props.in} timeout={duration}>
        {state => {
          return <div style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}>
            {children}
          </div>
        }}
      </Transition>
    );
  }

}