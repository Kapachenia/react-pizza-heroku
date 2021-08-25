import pizzas from "./pizzas";
import filters from "./filters";
import cart from "./cart";

import {combineReducers} from "redux";

const rootReducer = combineReducers ({
    pizzas,
    filters,
    cart
});

export default rootReducer;