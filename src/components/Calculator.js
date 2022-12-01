/* eslint-disable */
import React from "react";
import calculate from "../logic/calculate";
import classes from "./Calculator.module.css";

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { total: "", next: "", operation: "" };
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
    return (
      <div className={classes.container}>
        <div className={classes.item1} onClick={this.getNameHandler}>
          {`${this.state.total || ""} ${this.state.operation || ""} ${
            this.state.next || ""
          }`}
        </div>
        <div onClick={this.getNameHandler}>AC</div>
        <div onClick={this.getNameHandler}>+/-</div>
        <div onClick={this.getNameHandler}>%</div>
        <div className={classes.special} onClick={this.getNameHandler}>
          +
        </div>
        <div onClick={this.getNameHandler}>7</div>
        <div onClick={this.getNameHandler}>8</div>
        <div onClick={this.getNameHandler}>9</div>
        <div className={classes.special} onClick={this.getNameHandler}>
          x
        </div>
        <div onClick={this.getNameHandler}>4</div>
        <div onClick={this.getNameHandler}>5</div>
        <div onClick={this.getNameHandler}>6</div>
        <div className={classes.special} onClick={this.getNameHandler}>
          -
        </div>
        <div onClick={this.getNameHandler}>1</div>
        <div onClick={this.getNameHandler}>2</div>
        <div onClick={this.getNameHandler}>3</div>
        <div className={classes.special} onClick={this.getNameHandler}>
          ÷
        </div>
        <div className={classes.item0} onClick={this.getNameHandler}>
          0
        </div>
        <div onClick={this.getNameHandler}>.</div>
        <div className={classes.special} onClick={this.getNameHandler}>
          =
        </div>
      </div>
    );
  }
}

export default Calculator;
