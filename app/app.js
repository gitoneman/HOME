/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');

var Menu = require('./components/menu.react');
var SideMenu = require('./components/sideMenu');
var Dashboard = require('./components/dashboard.react');
var Movies = require('./components/movies.react');
var Stocks = require('./components/stocks.react');
var Weather = require('./components/weather.react');
var Router = require('react-router'); 

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Redirect = Router.Redirect;

var menu = require('./menu.config');
  

var App = React.createClass({
  render: function () {
    return (
      <div className="g-doc">
       	<Menu />
        <div className="g-sd">
            <SideMenu data={menu}/>
        </div>
        <div className="g-mn">
            <RouteHandler {...this.props}/>
        </div>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="movies" handler={Movies}/>
    <Route name="stocks" handler={Stocks}/>
    <Route name="weather" handler={Weather}/>
    <Redirect to="movies"/>
  </Route>
);

Router.run(routes, function (Handler,state) {
	var params = state.params;
  	React.render(<Handler params={params} />, document.body);
});


