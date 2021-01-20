import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => (
    createStore(
        reducer,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    )
)

const store = configureStore()


export default store