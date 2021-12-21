import React from "react";
import s from "./EndGame.module.css";


export const EndGames = (props) => {

    const styleResult = {
        marginLeft: "8px",
        fontWeight:"bold",
        color: "red",
    }

    const stringStyle = {color: "green", fontSize: "50px", display:"flex" , justifyContent:"space-between"}

    return (
        <div className={s.endGame}>
            <h1 style={{color: "#d20e0e", fontSize: "70px", margin: "0"}}>Игра окончена!</h1>
            <p style={stringStyle}>
                Сделано ходов: <span style={styleResult}> {props.moves} </span>
            </p>

            <p style={stringStyle}>
                Время игры: <span style={styleResult}>{props.time}</span>
            </p>

            <p style={stringStyle}>
                Найдено пар: <span style={styleResult}> {props.pairs} из 18 </span>
            </p>
            <button onClick={props.handleGameRestart} className={s.buttonEndGames}>Завершить</button>
        </div>
    )
}

