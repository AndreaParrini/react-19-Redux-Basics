import {useSelector, useDispatch} from 'react-redux'

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch= useDispatch();
  const counter = useSelector(state=>state.counter); 
  //useSelector imposta in automatico un "abbonamento" a questo componente, cosi da riaggiornarlo sempre con l'ultimo valore dello stato igni volta che cambia

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
