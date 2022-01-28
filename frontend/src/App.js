import Word from "./components/Word";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import wordReducer from "./reducers/wordReducer";

const store = createStore(wordReducer, applyMiddleware(thunkMiddleware));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/:word" element={<Word />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
