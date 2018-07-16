import React, { Component } from 'react';

const floatRanges = {
  X: [-15, 15],
  Y: [-15, 15],
  Z: [-3, 3],
  R: [-15, 15]
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getNextFloatTime = () => 3000 + getRandomInt(0, 500);
const getNextRotTime = () => 3000 + getRandomInt(0, 1000);

class Floater extends Component {
  constructor(props) {
    super(props);

    this.state = {
      floatX: 0,
      floatY: 0,
      floatZ: 0,
      rotation: 0
    };
  }

  componentDidMount() {
    this.setNextFloat();
    this.setNextRotation();
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }

    if (this.rotTimer) {
      clearTimeout(this.rotTimer);
    }
  }

  setNextFloat = () => {
    this.setState({
      floatX: getRandomInt(...floatRanges['X']),
      floatY: getRandomInt(...floatRanges['Y'])
    });

    this.timer = setTimeout(this.setNextFloat, getNextFloatTime());
  }

  setNextRotation = () => {
    this.setState({
      floatZ: getRandomInt(...floatRanges['Z']),
      rotation: getRandomInt(...floatRanges['R'])
    });

    this.rotTimer = setTimeout(this.setNextRotation, getNextRotTime());
  }

  render() {
    const { src, top, left } = this.props;
    const { floatX, floatY, floatZ, rotation } = this.state;

    const style = {
      top,
      left,
      transform: `translate(${floatX}px, ${floatY}px) rotate(${rotation}deg) scale(${0.5 + (floatZ / 100)})`
    };

    return (
      <img className="Floater" src={src} style={style} />
    );
  }
}

export default Floater;