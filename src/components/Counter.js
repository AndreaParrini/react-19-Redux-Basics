import {useSelector, useDispatch} from 'react-redux'

import classes from './Counter.module.css';


const Counter = () => {
  const dispatch= useDispatch();
  const counter = useSelector(state=>state.counter); 
  //useSelector imposta in automatico un "abbonamento" a questo componente, cosi da riaggiornarlo sempre con l'ultimo valore dello stato ogni volta che cambia

  const toggleCounterHandler = () => {};

  const handlerIncrement=() => {
    dispatch({type: 'INCREMENT'});
  };
  const handlerDecrement=() => {
    dispatch({type: 'DECREMENT'});
  };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={handlerIncrement}>Increment</button>
        <button onClick={handlerDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;

/* 
PER USARE I CLASS-BASED COMPONENTE SI DEVONO IMPORTARE 
import { Component } from 'react';
import {connect} from 'react-redux'


class Counter extends Component{

  handlerIncrement(){
    this.props.increment();
  }

  handlerDecrement(){
    this.props.decrement();
  }

  toggleCounterHandler(){}

  render(){
    return (
      <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{this.props.counter}</div>
      <div>
        <button onClick={this.handlerIncrement.bind(this)}>Increment</button>
        <button onClick={this.handlerDecrement.bind(this)}>Decrement</button>
      </div>
      <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
    </main>
    )
  }
}

const mapStateToProps = state=> {
  return{
    counter:state.counter
  }
}

const mapDispatchToProps= dispatch=> {
  return {
    increment:  dispatch({type: 'INCREMENT'}),
    decrement: dispatch({type: 'DECREMENT'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter); */
