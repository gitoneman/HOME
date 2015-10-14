/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');

var Menu = require('./components/menu/menu.react');
var SideMenu = require('./components/sideMenu/sideMenu');
var Dashboard = require('./components/dashboard/dashboard.react');
var System = require('./components/system/system.react');
var Cpt = require('./components/Cpt/Cpt.react');
var Report = require('./components/report/report.react');
var Events = require('./components/events/events.react');
var Event = require('./components/events/components/event.react');
// var Menu = require('./components/menu/menu.react');
// var Menu = require('./components/menu/menu.react');
// var Menu = require('./components/menu/menu.react');
var Router = require('react-router'); // or var Router = ReactRouter; in browsers

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
    <Route name="report" handler={Report}/>
    <Route name="events" handler={Events}>
    	<Route name="event" path=":eventId" handler={Event}/>
    </Route>
    <Route name="dashboard" handler={Dashboard}/>
    <Route name="system" handler={System}/>
    <Route name="component" handler={Cpt}/>
    <Redirect to="dashboard"/>
  </Route>
);

Router.run(routes, function (Handler,state) {
	var params = state.params;
  	React.render(<Handler params={params} />, document.body);
});


