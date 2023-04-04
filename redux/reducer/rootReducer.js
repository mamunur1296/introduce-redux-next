const { combineReducers } = require("redux");
const { default: productReducer } = require("./productReducer");
const { filterReducer } = require("./filterReducer");

const rootReducer = combineReducers({
  product: productReducer,
  filter: filterReducer,
});
export default rootReducer;
