import React, {Component} from 'react';
import Tablero from '../components/Tablero';
import '../css/Game.css';
import Icon_Red_Player from '../Images/Icon_Red_Player.png';
import Icon_Yellow_Player from '../Images/Icon_Yellow_Player.png';


class Game extends Component{

    constructor(props){
        super(props);
        this.state ={
            player1 : "Abuela ",
            player2 : "Peleona ",
            winner : " ",
            minutes : 0, // for playtime
            seconds : 0, // for playtime
            downSeconds: 10, // for countdown timer
            turn: "",
            turnColor:0
        };
        this.downCounter= null; //timer for countdown
        this.counter = null; // timer for playtime
        this.startTimer= this.startTimer.bind(this); //Playtime timer
        this.startCountDown=this.startCountDown.bind(this); // Cowntdown timer
        this.changeTurn=this.changeTurn.bind(this);
    }

    startTimer(){ //It changes the state of the timer and updates it on screen (TOTAL PLAYTIME)
        this.counter = setInterval(() => {
            if(this.state.seconds==59){
              this.setState({minutes: this.state.minutes + 1})
              this.setState({seconds: 0})
            }
            else  
            this.setState({ seconds: this.state.seconds + 1 });
          }, 1200);
    }
    startCountDown(){
        this.downCounter=setInterval(()=>{
            if(this.state.downSeconds==0){
                if(this.state.turn==this.state.player1){
                    this.setState({turn:this.state.player2});
                    this.setState({turnColor:2});
                }    
                else{
                    this.setState({turn:this.state.player1});
                    this.setState({turnColor:1}); 
                }   
                this.setState({downSeconds:10})
                console.log(this.state.turn)
                console.log(this.state.turnColor)

            }
            else
                this.setState({downSeconds: this.state.downSeconds-1});
        },1200);
    }
    componentDidMount(){ // It is executed when components are displayed for the first time
        this.setState({turn:this.state.player1});
        this.setState({turnColor:1});
        this.startTimer();
        this.startCountDown();
    }
    changeTurn(){ // changes turn if a player makes a play before time runs out
        if(this.state.turn==this.state.player1){
            this.setState({turn:this.state.player2})
            this.setState({turnColor:2})
        }
        else{
            this.setState({turn:this.state.player1})
            this.setState({turnColor:1})
        }
        this.setState({downSeconds:10})
    }
    render(){
        return(
            <div className= "GameMainContainer">
                <div className="GameTopContainer">
 
                    <div className="GameTopContainerTotalTimer">
                        {"Tiempo de juego "+this.state.minutes + " : " + this.state.seconds}
                    </div>
                </div>
                <div className="GameSecondaryContainer">
                    <div className="GameLeftContainer">
                        <div className="GameLeftFirst">
                            {"Jugador 1: "+this.state.player1}
                        </div>                    
                        <div className="GameLeftSecond">
                            <img src={Icon_Red_Player} className="imgRedPLayer" />
                        </div>
                        <div className="GameLeftThird">
                            {"Jugador 2: "+this.state.player2}
                        </div>                    
                        <div className="GameLeftFourth">
                            <img src={Icon_Yellow_Player} className="imgYellowPlayer" />
                        </div>
                    </div>
                    <div className="GameMidContainer">
                        <div className="GameMidContainerFirst">
                            {" Turno de : "+this.state.turn}
                        </div>
                        <div className="GameTableroContainer">
                            <Tablero className="tablero" 
                            turn={this.state.turnColor}
                            changeTurn={this.changeTurn}/>
                        </div>
                        <div className="GameMidContainerThird">
                            {"00:"+this.state.downSeconds}
                        </div>
                    </div>
                    
                    <div className="GameRightContainer">
                        <div className="GameRigtUnique">
                            <div className="GameRightFirst">
                                <button className="btnReset">Reiniciar Nivel</button>
                            </div>
                            <div className="GameRightSecond">
                                <button className="btnLeaveGame">Salir</button>
                            </div> 
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}
export default Game;
        