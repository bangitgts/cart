/* eslint-disable array-callback-return */
import { Component } from "react";
import { Route, Switch} from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import routes from "./routes";
/* eslint-disable jsx-a11y/anchor-is-valid */
class App extends Component {
  showContent(routes){
    var result = null;
    if(routes.length>0) {
      result = routes.map((route,index) => {
        return(<Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
      />)
     })
    }
    return <Switch>
      {result}
    </Switch>
  }
  render() {
    return (
      <Router>
        <div>
        <Menu />
        <div className="container">
          <div className="row">
          
            {this.showContent(routes)}
          </div>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
