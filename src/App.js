import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import store from "./redux/store";
import Dashboard from './pages/Dashboard'
import TodoDetail from './pages/TodoDetail'

function App() {
    return (
        <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/detail/:todoId" element={<TodoDetail />} />
            {/* <Route path="/detail/:todoId" component={TodoDetail} /> */}
            </Routes>
        </BrowserRouter>
        </Provider>
    );
}

export default App;
