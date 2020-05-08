(this.webpackJsonpcovid_tracker=this.webpackJsonpcovid_tracker||[]).push([[0],{106:function(e,t,a){e.exports=a(244)},244:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(41),l=a.n(o),i=a(29),s=a(13),c=a(14),u=a(16),d=a(15),h=a(27),p=a.n(h),m=a(104),b=a(22),v=(a(127),a(245)),g=a(246),f=a(247),C=a(248),y=a(249),D=a(250),E=a(251),k=a(258),O=a(257),T=a(259),j=a(252),w=a(253),x=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isOpen:!1},e.toggle=function(){return e.setState({isOpen:!e.state.isOpen})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(v.a,{color:"warning",light:!0,expand:"md"},r.a.createElement(g.a,{href:"#/"},"COVID19-Tracker"),r.a.createElement(f.a,{onClick:this.toggle}),r.a.createElement(C.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(y.a,{className:"mr-auto",navbar:!0},r.a.createElement(D.a,null,r.a.createElement(E.a,{href:"#/about"},"About")),r.a.createElement(k.a,{nav:!0,inNavbar:!0},r.a.createElement(O.a,{nav:!0,caret:!0},"Countries"),r.a.createElement(T.a,{right:!0},r.a.createElement(j.a,{onClick:function(){e.props.setCountry("India")}},"India"),r.a.createElement(j.a,{onClick:function(){e.props.setCountry("Italy")}},"Italy"),r.a.createElement(j.a,{onClick:function(){e.props.setCountry("Pakistan")}},"Pakistan"),r.a.createElement(j.a,{onClick:function(){e.props.setCountry("United States of America")}},"United States"),r.a.createElement(j.a,{divider:!0}),r.a.createElement(j.a,{onClick:function(){e.props.setGlobal()}},"Global")))),r.a.createElement(w.a,null,this.props.simpleText))))}}]),a}(n.Component);var I={margin:"10px",padding:"10px"},G=function(){return r.a.createElement("div",{style:I},r.a.createElement("h4",null,"Greetings From Developer...."),r.a.createElement("h5",null,"This app provides the daily status of COVID19 cases around the world"),r.a.createElement("h5",null,"It gives you detail summary of cases in some Countries in the list"),r.a.createElement("br",null),r.a.createElement("h6",null,"Contact-"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/nikhil-ranjan-niks"},"Linkedin Profile")),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/nikstrick"},"Github Profile")))},R=a(43),A=a(255),S=a(256),N=a(5),B=a.n(N),F=a(33),P=a(254),V=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(P.a,null,r.a.createElement(F.a,{data:this.props.graphData,options:{title:{display:!0,text:"Total Cases",fontSize:20},legend:{display:!0,position:"right"}}}),r.a.createElement(F.a,{data:this.props.graphData2,options:{title:{display:!0,text:"New Cases Today",fontSize:20},legend:{display:!0,position:"right"}}}))}}]),a}(n.Component),M=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return console.log(this.props.lineChartData.datasets[0].data),r.a.createElement("div",null,r.a.createElement(F.b,{data:this.props.lineChartData,options:{title:{display:!0,text:"Each Day Status",fontSize:20},legend:{display:!0,position:"bottom"}}}))}}]),a}(n.Component),W=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).toggle=function(e){n.setState({activeTab:e})},n.state={activeTab:1,setActiveTab:1},n.toggle=n.toggle.bind(Object(R.a)(n)),n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(y.a,{style:{color:"red"},tabs:!0},r.a.createElement(D.a,null,r.a.createElement(E.a,{className:B()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},"Aggregate Comparision")),r.a.createElement(D.a,null,r.a.createElement(E.a,{className:B()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},"Individual Day Chart"))),r.a.createElement(A.a,{activeTab:this.state.activeTab},r.a.createElement(S.a,{tabId:"1"},r.a.createElement(V,{Global:this.props.Global,Country:this.props.Country,graphData:this.props.graphData,graphData2:this.props.graphData2})),r.a.createElement(S.a,{tabId:"2"},r.a.createElement(M,{lineChartData:this.props.lineChartData}))),r.a.createElement("div",{style:{paddingTop:"60px"}},r.a.createElement("p",{style:{fontWeight:"bold",marginLeft:"20px",marginRight:"20px",backgroundColor:"#ccc"}},"Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus. Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment."),r.a.createElement("p",{style:{marginLeft:"20px"}},"HOW IT SPREADS- The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or exhales. These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces. You can be infected by breathing in the virus if you are within close proximity of someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth.")))}}]),a}(n.Component),z=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={Global:{},Countries:[],Country:{},simpleText:"",dataByCountry:[],lineChartData:{labels:[],datasets:[{label:"Acitve",fill:!1,lineTension:1,backgroundColor:"blue",borderColor:"blue",borderWidth:1,data:[]},{label:"Deaths",fill:!1,lineTension:1,backgroundColor:"red",borderColor:"red",borderWidth:1,data:[]},{label:"Recovered",fill:!1,lineTension:1,backgroundColor:"green",borderColor:"green",borderWidth:1,data:[]}]},graphData:{labels:["Confirmed","Deaths","Recovered"],datasets:[{label:"Total Cases",backgroundColor:["#00A6B4","#B21F00","#2FDE00","#6800B4"],hoverBackgroundColor:["#003350","#501800","#175000","#35014F"],data:[100,10,15]}]},graphData2:{labels:["Confirmed","Deaths","Recovered"],datasets:[{label:"New Cases Today",backgroundColor:["#00A6B4","#B21F00","#2FDE00","#6800B4"],hoverBackgroundColor:["#003350","#501800","#175000","#35014F"],data:[100,10,15]}]}},e.fillData=function(t){var a=Object(i.a)({},e.state.lineChartData),n=a.datasets,r=a.labels;return t.forEach((function(e,t){var a=e.Active,o=e.Deaths,l=e.Recovered;n[0].data[t]=a,n[1].data[t]=o,n[2].data[t]=l,r[t]=e.Date.slice(8,10)+"/"+e.Date.slice(5,7)})),a},e.setCountryData=function(t){var a=t.data,n=Object(i.a)({},e.state.graphData),r=Object(i.a)({},e.state.graphData2),o=a.length,l=a[o-1],s=l.Confirmed,c=l.Deaths,u=l.Recovered,d=l.Active,h=l.Country,p=Math.abs(s-a[o-2].Confirmed),m=Math.abs(c-a[o-2].Deaths),b=Math.abs(u-a[o-2].Recovered);n.labels=["Active: "+d,"Deaths: "+c,"Recovered: "+u],r.labels=["Confirmed: "+p,"Deaths: "+m,"Recovered: "+b],n.datasets[0].data=[d,c,u],r.datasets[0].data=[p,m,b];var v=e.fillData(a,o).datasets;v[0].data.splice(0,a.length),v[1].data.splice(0,a.length),v[2].data.splice(0,a.length);var g=e.fillData(a);e.setState({dataByCountry:a,graphData:n,graphData2:r,simpleText:h,lineChartData:g})},e.setCountry=function(t){"India"===t?p.a.get("https://api.covid19api.com/total/country/india").then((function(t){return e.setCountryData(t)})):"Pakistan"===t?p.a.get("https://api.covid19api.com/total/country/pakistan").then((function(t){return e.setCountryData(t)})):"Italy"===t?p.a.get("https://api.covid19api.com/total/country/italy").then((function(t){return e.setCountryData(t)})):p.a.get("https://api.covid19api.com/total/country/united-states").then((function(t){return e.setCountryData(t)}))},e.setGlobal=function(){var t=Object(i.a)({},e.state.graphData),a=Object(i.a)({},e.state.graphData2),n=e.state.Global;t.labels=["Confirmed: "+n.TotalConfirmed,"Deaths: "+n.TotalDeaths,"Recovered: "+n.TotalRecovered],t.datasets[0].data=[n.TotalConfirmed,n.TotalDeaths,n.TotalRecovered],a.labels=["Confirmed: "+n.NewConfirmed,"Deaths: "+n.NewDeaths,"Recovered: "+n.NewRecovered],a.datasets[0].data=[n.NewConfirmed,n.NewDeaths,n.NewRecovered],e.setState({simpleText:"Global",graphData:t,graphData2:a})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://api.covid19api.com/summary").then((function(t){return e.setState({Global:t.data.Global,Countries:t.data.Countries})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(m.a,null,r.a.createElement("div",null,r.a.createElement(x,{setCountry:this.setCountry,setGlobal:this.setGlobal,simpleText:this.state.simpleText}),r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(W,{Global:e.state.Global,Country:e.state.Country,graphData:e.state.graphData,graphData2:e.state.graphData2,lineChartData:e.state.lineChartData})}}),r.a.createElement(b.a,{path:"/about"},r.a.createElement(G,null)))))}}]),a}(n.Component);l.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null)),document.getElementById("root"))}},[[106,1,2]]]);
//# sourceMappingURL=main.5d85d0b7.chunk.js.map