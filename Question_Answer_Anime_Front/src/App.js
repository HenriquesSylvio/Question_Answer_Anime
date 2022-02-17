import logo from './logo.svg';
import './App.css';
import './bootstrap.css'
import Homepage from "./pages/Homepage";
import { HashRouter, Route, Switch } from "react-router-dom";
import CreateQuestion from "./pages/CreateQuestion";
import NumberQuestion from "./pages/NumberQuestion";
import Question from "./pages/Question";

function App() {
  return (
      <div className="white-square center">
      <HashRouter>
        {/*<div className="container-fluid">*/}
          <Switch>
            <Route exact path='/' component={Homepage}/>
              <Route exact path='/createQuestion' component={CreateQuestion}/>
              <Route exact path='/numberQuestion' component={NumberQuestion}/>
              <Route exact path='/Question/:id' component={Question}/>
          </Switch>
        {/*</div>*/}
      </HashRouter>
      </div>
  );
}

export default App;
