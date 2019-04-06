import React, { Component } from 'react';
import '../App.css';
import Servicio from '../Constants/Servicio';


class MostrarGrilla extends Component {

  constructor(props){
    super(props);
    this.servicio = new Servicio();
  }

  state = {
    close: '',
    date: '',
    yesterday: '',
    closeYesterday: '',
    difference: '',
    percentage: '',
    color: ''
  }

  async componentDidMount() {
    await this.servicio.servicioAlpha(this.onResponse, 'FB');
  }
  
  async updateResult(newResult) {
    await this.servicio.servicioAlpha(this.onResponse, newResult);
  }

   onResponse = ({close, date, yesterday, closeYesterday}) => {
    var dif = parseFloat(close - closeYesterday).toFixed(2);
    var percentageFloat = parseFloat((dif / close)*100).toFixed(2);
    this.percentage = "Percentage: " + percentageFloat + " %";
    this.difference = "Difference: " + dif;
    if (percentageFloat < 0) {
        this.color = 'rgba(255,0,0,0.7)';
    } else {
        this.color = 'rgba(0,255,0,0.7)';
    }

    this.setState({
      close: close,
      date: date,
      yesterday: yesterday,
      closeYesterday : closeYesterday,
      difference: this.difference,
      percentage: this.percentage,
      color: this.color});
  }

  render() {
    return (
        <div className="Result">
            <span>Date: {this.state.date} </span>
            <text>Close: {this.state.close}</text>
            <text>Yesterday: {this.state.yesterday}</text>
            <text>Close yesterday: {this.state.closeYesterday}</text>
            <text style={{paddingTop: 10, color: 'black'}}>{this.state.difference}</text>
            <div style={{color: this.state.color}}>
              <h4>{this.state.percentage}</h4>
            </div>
        </div>
    );
  }
}

export default MostrarGrilla;