import React, { useState } from 'react';
import calculate from '../../logic/calculate';
import classes from './Calculator.module.css';

const Calculator = () => {
  const [result, setResult] = useState({ total: '', next: '', operation: '' });
  const getNameHandler = (e) => {
    const buttonName = e.target.innerHTML;
    const res = calculate(result, buttonName);
    setResult({
      ...res,
    });
  };

  const { total, next, operation } = result;

  return (
    <div className={classes.container}>
      <button type="button" className={classes.item1} onClick={getNameHandler}>
        {`${total || ''} ${operation || ''} ${next || ''}`}
      </button>
      <button type="button" onClick={getNameHandler}>
        AC
      </button>
      <button type="button" onClick={getNameHandler}>
        +/-
      </button>
      <button type="button" onClick={getNameHandler}>
        %
      </button>
      <button
        type="button"
        className={classes.special}
        onClick={getNameHandler}
      >
        +
      </button>
      <button type="button" onClick={getNameHandler}>
        7
      </button>
      <button type="button" onClick={getNameHandler}>
        8
      </button>
      <button type="button" onClick={getNameHandler}>
        9
      </button>
      <button
        type="button"
        className={classes.special}
        onClick={getNameHandler}
      >
        x
      </button>
      <button type="button" onClick={getNameHandler}>
        4
      </button>
      <button type="button" onClick={getNameHandler}>
        5
      </button>
      <button type="button" onClick={getNameHandler}>
        6
      </button>
      <button
        type="button"
        className={classes.special}
        onClick={getNameHandler}
      >
        -
      </button>
      <button type="button" onClick={getNameHandler}>
        1
      </button>
      <button type="button" onClick={getNameHandler}>
        2
      </button>
      <button type="button" onClick={getNameHandler}>
        3
      </button>
      <button
        type="button"
        className={classes.special}
        onClick={getNameHandler}
      >
        ÷
      </button>
      <button type="button" className={classes.item0} onClick={getNameHandler}>
        0
      </button>
      <button type="button" onClick={getNameHandler}>
        .
      </button>
      <button
        type="button"
        className={classes.special}
        onClick={getNameHandler}
      >
        =
      </button>
    </div>
  );
};
export default Calculator;
