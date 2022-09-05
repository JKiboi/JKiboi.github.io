import React,{ useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'USER_INPUT':
      return { ...state, userInput: action.payload };
    case 'TOGGLE_COLOR':
      return { ...state, color: !state.color };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0, userInput: '', color: false })

  return (
    <main className="container">
    <div className="App, App-header" style={{ color: state.color ? '#000' : 'coral'}}>
      <input style={{margin: '1rem'}}
        type="text"
        value={state.userInput}
        onChange={(e) => dispatch({ type: 'USER_INPUT', payload: e.target.value })}
      />
      <br /><br />
      <p style={{margin: '1rem'}} >{state.count}</p>
      <section style={{margin: '1rem'}}>
        <button onClick={(()=>dispatch({type:"DECREMENT"}))}>-</button>
        <button onClick={(() => dispatch({ type: 'INCREMENT' }))}>+</button>
        <button onClick={(() => dispatch({ type: 'TOGGLE_COLOR' }))}>Color</button>
      </section>
      <br /><br />
      <p style={{margin: '1rem'}}>{state.userInput}</p>
    </div>
    </main>
  );
}
export default App;