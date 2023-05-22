import './Counter.css';
import { useSelector, useDispatch,connect } from 'react-redux';
// import {Component} from 'react';


const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state=>state.showCounter);

  const incrementHandler = () => {
    dispatch({type: 'increment'});
  }
  const increaseHandler = () => {
    dispatch({type: 'increase', value:10});
  }
  const decrementHandler = () => {
    dispatch({type: 'decrement'});
  }
  const toggleCounterHandler = () => {
    dispatch({type:'toggle'})
  };

  const decreaseHandler = () => {
    dispatch({type: 'decrease', value:10});
  }

  return (
    <main className='counter'>
      <h1>Redux Counter</h1>
      {showCounter && <div className='value'>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={decreaseHandler}>decrease by 10</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

//  class Counter extends Component{

//   incrementHandler(){
//     this.props.increment();
//   }

//   decrementHandler(){
//     this.props.decrement();
//   }

//   render(){
//     return (
//       <main className='counter'>
//         <h1>Redux Counter</h1>
//         <div className='value'>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
        
//       </main>
//     );
//   }

// }

// const mapStateToProps = state => {
//   return{
//     counter: state.counter,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return{
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'})
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Counter);
 
