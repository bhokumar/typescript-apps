import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {App} from './components/App';
import {reducers} from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));


/*
class App extends Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props);
        this.state = {counter: 0};
    }

    onIncrement = () => {
        this.setState( (state) =>{
            return {counter: state.counter + 1}
        });
    }

    onDecrement = () => {
        this.setState( (state) =>{
            return {counter: state.counter - 1}
        });
    }

  render() {
  return (<div>
      <button onClick={this.onIncrement}>INCREMENT</button>
      <button onClick={this.onDecrement}>DECREMENT</button>
      {this.state.counter}
  </div>);
  }
}
*/

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
 document.querySelector("#root"));
