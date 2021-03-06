import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import About from './components/About';
import Tab from './components/Tab';

class App extends Component {
  state = {
    Global: {},
    Countries: [],
    Country: {},
    simpleText: '',
    dataByCountry: [],
    lineChartData: {
      labels: [],
      datasets: [
        {
          label: 'Acitve',
          fill: false,
          lineTension: 1,
          backgroundColor: 'blue',
          borderColor: 'blue',
          borderWidth: 1,
          data: [],
        },
        {
          label: 'Deaths',
          fill: false,
          lineTension: 1,
          backgroundColor: 'red',
          borderColor: 'red',
          borderWidth: 1,
          data: [],
        },
        {
          label: 'Recovered',
          fill: false,
          lineTension: 1,
          backgroundColor: 'green',
          borderColor: 'green',
          borderWidth: 1,
          data: [],
        },
      ],
    },
    graphData: {
      labels: ['Active', 'Deaths', 'Recovered'],
      datasets: [
        {
          label: 'Total Cases',
          backgroundColor: ['#00A6B4', '#B21F00', '#2FDE00', '#6800B4'],
          hoverBackgroundColor: ['#003350', '#501800', '#175000', '#35014F'],
          data: [100, 10, 15],
        },
      ],
    },
    graphData2: {
      labels: ['Active', 'Deaths', 'Recovered'],
      datasets: [
        {
          label: 'New Cases Today',
          backgroundColor: ['#00A6B4', '#B21F00', '#2FDE00', '#6800B4'],
          hoverBackgroundColor: ['#003350', '#501800', '#175000', '#35014F'],
          data: [100, 10, 15],
        },
      ],
    },
  };

  componentDidMount() {
    const graphData = { ...this.state.graphData };
    const graphData2 = { ...this.state.graphData2 };
    axios.get('https://api.covid19api.com/summary').then((res) => {
      const {
        TotalConfirmed,
        TotalDeaths,
        TotalRecovered,
        NewConfirmed,
        NewDeaths,
        NewRecovered,
      } = res.data.Global;
      graphData.datasets[0].data = [
        TotalConfirmed - TotalDeaths - TotalRecovered,
        TotalDeaths,
        TotalRecovered,
      ];
      graphData2.datasets[0].data = [NewConfirmed, NewDeaths, NewRecovered];
      this.setState({
        Global: res.data.Global,
        Countries: res.data.Countries,
        graphData: graphData,
        graphData2: graphData2,
        simpleText: 'Global',
      });
    });
  }
  fillData = (data) => {
    const lineChartData = { ...this.state.lineChartData };
    const { datasets, labels } = lineChartData;
    data.forEach((element, index) => {
      const { Active, Deaths, Recovered } = element;
      datasets[0].data[index] = Active;
      datasets[1].data[index] = Deaths;
      datasets[2].data[index] = Recovered;
      labels[index] =
        element.Date.slice(8, 10) + '/' + element.Date.slice(5, 7);
    });
    return lineChartData;
  };
  setCountryData = async (res) => {
    const { data } = res;
    const graphData = { ...this.state.graphData };
    const graphData2 = { ...this.state.graphData2 };
    const l = data.length;
    const { Confirmed, Deaths, Recovered, Active, Country } = data[l - 1];
    const newConfirmed = Math.abs(Confirmed - data[l - 2].Confirmed);
    const newDeaths = Math.abs(Deaths - data[l - 2].Deaths);
    const newRecovered = Math.abs(Recovered - data[l - 2].Recovered);
    graphData.labels = [
      'Active: ' + Active,
      'Deaths: ' + Deaths,
      'Recovered: ' + Recovered,
    ];
    graphData2.labels = [
      'Confirmed: ' + newConfirmed,
      'Deaths: ' + newDeaths,
      'Recovered: ' + newRecovered,
    ];
    graphData.datasets[0].data = [Active, Deaths, Recovered];
    graphData2.datasets[0].data = [newConfirmed, newDeaths, newRecovered];
    const lineChartData = this.fillData(data, l);
    // const lineChartData={...this.state.lineChartData}
    const { datasets } = lineChartData;
    datasets[0].data.splice(0, data.length);
    datasets[1].data.splice(0, data.length);
    datasets[2].data.splice(0, data.length);
    const lc = this.fillData(data);
    this.setState({
      dataByCountry: data,
      graphData: graphData,
      graphData2: graphData2,
      simpleText: Country,
      lineChartData: lc,
    });
  };
  setCountry = async (Country) => {
    if (Country === 'India')
      axios
        .get('https://api.covid19api.com/total/country/india')
        .then((res) => this.setCountryData(res));
    else if (Country === 'China')
      axios
        .get('https://api.covid19api.com/total/country/china')
        .then((res) => this.setCountryData(res));
    else if (Country === 'Italy')
      axios
        .get('https://api.covid19api.com/total/country/italy')
        .then((res) => this.setCountryData(res));
    else
      axios
        .get('https://api.covid19api.com/total/country/united-states')
        .then((res) => this.setCountryData(res));
  };
  setGlobal = () => {
    const graphData = { ...this.state.graphData };
    const graphData2 = { ...this.state.graphData2 };
    const {
      TotalConfirmed,
      TotalDeaths,
      TotalRecovered,
      NewConfirmed,
      NewDeaths,
      NewRecovered,
    } = this.state.Global;
    const temp = TotalConfirmed - TotalDeaths - TotalRecovered;
    graphData.labels = [
      'Acitve: ' + temp,
      'Deaths: ' + TotalDeaths,
      'Recovered: ' + TotalRecovered,
    ];
    graphData.datasets[0].data = [temp, TotalDeaths, TotalRecovered];
    graphData2.labels = [
      'Active: ' + NewConfirmed,
      'Deaths: ' + NewDeaths,
      'Recovered: ' + NewRecovered,
    ];
    graphData2.datasets[0].data = [NewConfirmed, NewDeaths, NewRecovered];
    this.setState({
      simpleText: 'Global',
      graphData: graphData,
      graphData2: graphData2,
    });
  };

  render() {
    // console.log(this.state.lineChartData)
    return (
      <Router>
        <div>
          <AppNavbar
            setCountry={this.setCountry}
            setGlobal={this.setGlobal}
            simpleText={this.state.simpleText}
          />
          <Switch>
            <Route exact path='/'>
              <Tab
                Global={this.state.Global}
                Country={this.state.Country}
                graphData={this.state.graphData}
                graphData2={this.state.graphData2}
                lineChartData={this.state.lineChartData}
              />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
