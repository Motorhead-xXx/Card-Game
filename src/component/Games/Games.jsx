import React from "react";
import {Card} from "../Card/Card";
import s from "../Card/Card.module.css";

export const Games = ({
                          arrayCards,
                          setTime,
                          setSecond,
                          setMinute,
                          minute,
                          setStartGame,
                          second,
                          startGame,
                          pairOfArrayCards,
                          flipCard,
                          setGameOver,
                          handleGameRestart,
                          matched,
                          openedCards,
                          moves,
                          pairs,
                      }) => {

    const start = () => {
        setStartGame(true)
    }

    const stop = () => {
        setTime(<span> {minute <= 9 ? `0${minute}` : minute}:{second <= 9 ? `0${second}` : second} </span>)
        setGameOver(true)
    }

    if (matched.length === pairOfArrayCards.length / 2) {
        stop()
    }

    if (second === 59) {
        setMinute(s => s + 1)
    }

    if (second === 59) {
        setSecond(0)
    }
    return (
        <div>

            {!startGame ?
                <button onClick={start} className={s.startButton}>Начать игру</button>

                : <Card
                    setSecond={setSecond}
                    stop={stop}
                    second={second}
                    minute={minute}
                    pairOfArrayCards={pairOfArrayCards}
                    setGameOver={setGameOver}
                    pairs={pairs}
                    moves={moves}
                    openedCards={openedCards}
                    arrayCards={arrayCards}
                    matched={matched}
                    handleGameRestart={handleGameRestart}
                    flipCard={flipCard}
                />}
        </div>
    )
}
