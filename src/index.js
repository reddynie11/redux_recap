import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

//reducers
import reducer from './reducers/index';

const App = ()=>{
    return(
        <div>Sample react app</div>
    )
}

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
        <Provider store={createStoreWithMiddleware(reducer)}>
            <App />
        </Provider>, 
    document.getElementById('root'));

