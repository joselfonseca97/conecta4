import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import '../css/Menu.css';


const cookies = new Cookies();
let tamSelected = ""; // the variable saves the selected size
let gameMode = ""; // variable that keeps the gamemode (solo, online, vs pc)
class Menu extends Component {

    signOff=()=>{
        cookies.remove('name', {path: "/"});
        cookies.remove('username', {path: "/"});
        window.location.href='./';
    }

    //Security
    componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="./";
        }
    }
    onChangeRadio(event){  // changes variable everytime radio buttons are updated
        gameMode=event.target.value;
        console.log(gameMode);
    }

    startGame=() => { // **INCOMPLETE**
        
        var size = 7;

        switch (tamSelected) { // define selected matriz size
            case "tam4":
                size=4;
                break;
            case "tam5":
                size=5;
                break;
            case "tam6":
                size=6;
                break;
            case "tam7":
                size=7;
                break;
            case "tam8":
                size=8;
                break;
            case "tam9":
                size=9;
                break;
            case "tam10":
                size=10;
                break;
            default:
                size=7;
                break;
        }
        cookies.set('size',size,{path: "/"});
        switch (gameMode) {
            case "Online":
                window.location.href="/online"
                break;
            case "PC":
                window.location.href="/game"
                break;
            case "1vs1":
                alert("1 vs 1")
                break;
            default:
                alert("Debe seleccionar el modo de juego")
                break;
        }
    }


    render() {
        return (
            <div className= "MenuMainContainer">
                <div className="MenuUpperContainer">
                    Conecta Cuatro
                </div>
                <div className="MenuSubTittle">
                    {"Bienvenido(a) "+ cookies.get('username')+"!!"}
                </div>
                <div className="MenuSecondaryContainer">
                    <div className="MenuThirdContainer">
                        <div className="MenuLbl2">
                            Seleccione el modo de juego
                        </div>
                        <div className="MenuRadioButtons" onChange={this.onChangeRadio}>
                            <div className="radio"><input type="radio" value="PC" name="game"/> Jugador vs Computadora</div>
                            <div className="radio"><input type="radio" value="1vs1" name="game"/> Jugador vs Jugador</div>
                            <div className="radio"><input type="radio" value="Online" name="game"/> Online</div>
                        </div>
                        <div className= "MenuComboBox">
                        {/*Create the combobox of sizes*/}
                        <select className="optionMain"
                            onChange={(e) => {
                                tamSelected = e.target.value;
                            }}
                        >
                            <option className="option" value="menu">Seleccione el tamaño del tablero...</option>
{/*                             <option className="option" value="tam4">4x4</option>
                            <option className="option" value="tam5">5x5</option>
                            <option className="option" value="tam6">6x6</option> */}
                            <option className="option" value="tam7">7x7</option>
                            <option className="option" value="tam8">8x8</option>
                            <option className="option" value="tam9">9x9</option>
                            <option className="option" value="tam10">10x10</option>

                        </select>
                        </div>
                    </div>    
                </div>
                <div className= "MenuBtns">
                    <button className="btnSignOff" onClick={()=>this.signOff()}>Cerrar Sesión</button>
                    <button className="btnStartGame" onClick={()=>this.startGame()}> Iniciar juego</button>
                </div>
            </div>
        );

    }

}
export default Menu;