import React from 'react';
import { connect } from 'react-redux';
import {Todo, fetchTodos} from '../actions';
import {StoreState} from '../reducers';

interface AppProps {
    todos: Todo[],
    fetchTodos(): any
}


interface AppState {
    counter: number
}

const mapStateToProps = ({todos}: StoreState): {todos: Todo[]} => {
    return {
        todos
    }
}


export class _App extends React.Component<AppProps, AppState> {
    onButtonClick = () => {
        this.props.fetchTodos();
    }

    render() {
        return (
            <div>
                <button onClick={this.onButtonClick}>Fetch</button>
            </div>
        );
    }
}

export const App = connect(
    mapStateToProps,
    {fetchTodos}
)(_App);