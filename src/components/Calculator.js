import React from 'react';
import calculate from '../logic/calculate';
import classes from './Calculator.module.css';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { total: '', next: '', operation: '' };
    this.getNameHandler = this.getNameHandler.bind(this);
  }

  getNameHandler(e) {
    const buttonName = e.target.innerHTML;
    const result = calculate(this.state, buttonName);
    this.setState({
      ...result,
    });
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className={classes.container}>
        <button
          type="button"
          className={classes.item1}
          onClick={this.getNameHandler}
        >
          {`${total || ''} ${operation || ''} ${next || ''}`}
        </button>
        <button type="button" onClick={this.getNameHandler}>
          AC
        </button>
        <button type="button" onClick={this.getNameHandler}>
          +/-
        </button>
        <button type="button" onClick={this.getNameHandler}>
          %
        </button>
        <button
          type="button"
          className={classes.special}
          onClick={this.getNameHandler}
        >
          +
        </button>
        <button type="button" onClick={this.getNameHandler}>
          7
        </button>
        <button type="button" onClick={this.getNameHandler}>
          8
        </button>
        <button type="button" onClick={this.getNameHandler}>
          9
        </button>
        <button
          type="button"
          className={classes.special}
          onClick={this.getNameHandler}
        >
          x
        </button>
        <button type="button" onClick={this.getNameHandler}>
          4
        </button>
        <button type="button" onClick={this.getNameHandler}>
          5
        </button>
        <button type="button" onClick={this.getNameHandler}>
          6
        </button>
        <button
          type="button"
          className={classes.special}
          onClick={this.getNameHandler}
        >
          -
        </button>
        <button type="button" onClick={this.getNameHandler}>
          1
        </button>
        <button type="button" onClick={this.getNameHandler}>
          2
        </button>
        <button type="button" onClick={this.getNameHandler}>
          3
        </button>
        <button
          type="button"
          className={classes.special}
          onClick={this.getNameHandler}
        >
          ÷
        </button>
        <button
          type="button"
          className={classes.item0}
          onClick={this.getNameHandler}
        >
          0
        </button>
        <button type="button" onClick={this.getNameHandler}>
          .
        </button>
        <button
          type="button"
          className={classes.special}
          onClick={this.getNameHandler}
        >
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
