import React from 'react';
import { Component } from 'react';
import '../css/Online.css';


class  Online extends Component{

leave(){
    window.location.href="/menu";
}

    render(){
        return(
            <div className="onlineMainContainer">
                <div className="onlineUpperContainer">
                    Seleccionar Contricante
                </div>
                <div className="onlineSecondaryContainer">
                    <div className="onlineListContainer">
                            contenedor lista
                    </div>
                </div>
                <div className="onlineBottonContainer">
                        <button className="btnLeave" onChange={this.leave}>Volver</button>
                </div>
            </div>
        )
    }
}

export default Online