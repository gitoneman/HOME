var React = require('react');

var config = {
	line:{
		title : {
	        text: "指标曲线",
			x :	 "50",
			textStyle:{
            	fontSize: 14,
            	color:"#3487bf"
            }

	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	   //  toolbox: {
	   //      show : true,
	   //      y: 'bottom',
	   //      // x:"right",
	   //      feature : {
	   //          mark : {show: false},
				// dataZoom : {show: true},
	   //          dataView : {show: true, readOnly: true},
	   //          magicType : {show: true, type: ['line', 'bar']},
	   //          restore : {show: true},
	   //          saveAsImage : {show: true}
	   //      }
	   //  },
	    calculable : true,
	    dataZoom : {
	        show : true,
	        realtime : true,
	        y: 50,
	        height: 20,
	        start : 0,
	        end : 100
	    },
		grid : {
			y : 70,
			x : 100,
			x2 : 50
		},
		
	    legend: {
			y:"bottom",
	        data:[
				
			]
	    },

	    xAxis : [
	        {
	            type : 'category',
	            splitLine : {show : false},
	            data :  ["1","2"] ,         
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            position: 'left',
	            splitArea : {show : false},
				axisLabel : {
	                formatter: '{value} '
	            },
				precision:3,
				scale:true,
				min:398.871772963389,
				max:413.02967501229404
	        }
	    ],

		color:  [ 
            '#1badf2', '#da70d6', '#32cd32', '#6495ed', 
            '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0', 
            '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700', 
            '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0' 
        ],
        series : [
	        {
	            name:"绍兴银行",
				symbol:'none',
				smooth:true,
	            type:"line",
	            markLine : {
				   symbolSize:2,
				   itemStyle : {
	                        normal : {
	                            color:'#f00',
	                            label : {
	                                show:true
	                            }
	                        }
	                },
					
	                data : [
	                    //{type : 'average', name: '平均值'},
	                ]
					
	            },
		        data:[
		        	"100","200"			
				]
	        },
	    ]
	},
	bar: {
		grid:{
			y2:100,
			borderWidth:0
		},
		title : {
	        text: '',
	        subtext: ''
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:[]
	    },
	    // toolbox: {
	    //     show : true,
	    //     feature : {
	    //         mark : {show: true},
	    //         dataView : {show: true, readOnly: false},
	    //         magicType : {show: true, type: ['line', 'bar']},
	    //         restore : {show: true},
	    //         saveAsImage : {show: true}
	    //     }
	    // },
	    color:["#69eaa5","#54C2F5"],
	    // calculable : true,
	    xAxis : [
	        {
	            type : 'category',
	            data : ['进出口押款','贴现','垫款','逾期贷款','中长期抵押质押贷款','中长期保证贷款','中长期信用贷款','短期抵押质押贷款','短期信用贷款','个人消费贷款'],
	            axisLabel:{
	            	rotate:45,
	            	textStyle:{
		            	color:"#000",
		            	fontWeight:"bold"
		            }
	            },
	            splitLine:{
	            	show:false
	            },
	            axisTick:{
	            	onGap:true
	            },
	            
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            splitLine:{
	            	show: true
	            },
	            axisLine:{
	            	show:false
	            }
	        }
	    ],
	    series : [
	        {
	            name:'',
	            type:'bar',
	            data:[75.0, 50.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0]
	        }
	        
	    ]
	}	     
}

module.exports = config;