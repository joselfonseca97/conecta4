import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actualTime: 0,
      minutos: 0,
      segundos: 0
    };
    this.counter = null;
    this.initTimer = this.initTimer.bind(this);
  }

  initTimer() {
      this.counter = setInterval(() => {
        if(this.state.segundos==60){
          this.setState({minutos: this.state.minutos + 1})
          this.setState({segundos: 0})
        }
        else  
        this.setState({ segundos: this.state.segundos + 1 });
      }, 1200);
  }

    componentDidMount(){ // se ejecuta cuando se "monta" el componente en pantalla por primera vez
        this.initTimer();
    }


  render() {
    return (
        <div className="timer">
            <div className="time">
                <h2 className= "lbltiempo">Tiempo</h2>
                <h2>{this.state.minutos + " : " + this.state.segundos}</h2>
            </div>
        </div>
    );
  }
}

export default Timer;