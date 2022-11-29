import React from 'react';
import classes from './Calculator.module.css';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.item1}>0</div>
        <div>AC</div>
        <div>+/-</div>
        <div>%</div>
        <div className={classes.special}>+</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div className={classes.special}>X</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div className={classes.special}>-</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div className={classes.special}>+</div>
        <div className={classes.item0}>0</div>
        <div>.</div>
        <div className={classes.special}>=</div>
      </div>
    );
  }
}

export default Calculator;
