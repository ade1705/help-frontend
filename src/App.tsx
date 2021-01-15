import React, {Component} from 'react';
import { Switch, Route, withRouter, RouteComponentProps, Link } from 'react-router-dom';
import Home from "./pages/home/home";
import Contact from "./pages/contact/contact";
import Header from "./components/header";

const App: React.FC = () => {
  return (
	  <div className="bg-gray-100">
		  <Header/>
		  <div>
			  <div className="w-full">
				  <Switch>
					  <Route path={'/'} exact component={Home}/>
					  <Route path={'/contact'} exact component={Contact}/>
				  </Switch>
			  </div>
		  </div>
	  </div>
  );
}

export default App;
