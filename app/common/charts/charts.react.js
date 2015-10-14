var React = require('react');
var chartConfig = require('./charts.config');
var _ = require('underscore');

function makeConfig(defaultConfig,data){
	var config = defaultConfig;

	config.legend.data = [];
	config.xAxis[0].data = data.category;
	_.each(data.series,function(item,i){
		config.series[i].name = item.name;
		config.series[i].data = item.data;
		config.legend.data.push(item.name);
	})
	return config;
}
var charts = React.createClass({

	componentDidMount: function() {
		var dom = this.refs.chart.getDOMNode();
		var type = this.props.bsType;
		var clickHandle = this.props.onClick;
		var data = this.props.data;

		var chart = echarts.init(dom);
		chart.setOption(makeConfig(chartConfig[type],data));

		chart.on("click",function(e){
			clickHandle && clickHandle(e);
		})
	},
	render: function() {

		return (
			<div className="chart-container" ref="chart"/>
		);
	}

});

module.exports = charts;