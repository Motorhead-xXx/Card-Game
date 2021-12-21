import './App.css';
import React, {useState, useEffect} from "react";
import {animal} from './img/imageIndex'
import {EndGames} from "./component/EndGames/EndGames";
import {Games} from "./component/Games/Games";

const initialCardsArray = [
    {id: 1, img: animal.fish},
    {id: 2, img: animal.bird},
    {id: 3, img: animal.owl},
    {id: 4, img: animal.dog},
    {id: 5, img: animal.fox},
    {id: 6, img: animal.birdORang},
    {id: 7, img: animal.chickBird},
    {id: 8, img: animal.chicken},
    {id: 9, img: animal.turtle},
    {id: 10, img: animal.shark},
    {id: 11, img: animal.racoon},
    {id: 12, img: animal.mouse},
    {id: 13, img: animal.frog},
    {id: 14, img: animal.seagull},
    {id: 15, img: animal.lion},
    {id: 16, img: animal.grin},
    {id: 17, img: animal.elephant},
    {id: 18, img: animal.chickenBig},
]

const pairOfArrayCards = [...initialCardsArray, ...initialCardsArray]

export const App = React.memo(() => {
    const [gameOver, setGameOver] = useState(false);
    const [moves, setMoves] = useState(0);
    const [pairs, setPairs] = useState(0);

    const [arrayCards, setArrayCards] = useState([]);
    const [openedCards, setOpenedCards] = useState([]);
    const [matched, setMatched] = useState([]);

    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)
    const [startGame, setStartGame] = useState(false)
    const [time, setTime] = useState(
        <span> {minute <= 9 ? `0${minute}`:minute}:{second <= 9 ? `0${second}`:second} </span>
    )


    useEffect(() => {
        setArrayCards(shuffle(pairOfArrayCards))
    }, [])

    useEffect(() => {
        if (openedCards < 2) return
        const firstMatched = arrayCards[openedCards[0]];
        const secondMatched = arrayCards[openedCards[1]]
        if (secondMatched && firstMatched.id === secondMatched.id) {
            setMatched([...matched, firstMatched.id])
            setPairs(p => p + 1)
        }
        if (openedCards.length === 2) {
            setMoves(prevMove => prevMove + 1)
            setTimeout(() => setOpenedCards([]), 1000)
        }
    }, [openedCards])

    const shuffle = (array) => {
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex -= 1;
            temporaryValue = array[currentIndex]
            array[currentIndex] = array[randomIndex]
            array[randomIndex] = temporaryValue
        }
        return array
    }

    const flipCard = (index) => {
        setOpenedCards(opened => [...opened, index])
    }
    console.log(`${minute}:${second}`)

    const handleGameRestart = () => {
        setOpenedCards([]);
        setMatched([])
        setMoves(0)
        setArrayCards(shuffle(pairOfArrayCards))
        setPairs(0)
        setSecond(0)
        setMinute(0)
        setGameOver(false)
        setStartGame(false)
    }

    return (
        <div className="App">
            {gameOver
                ? <EndGames handleGameRestart={handleGameRestart}
                            moves={moves}
                            pairs={pairs}
                            minute={minute}
                            time={time}
                            second={second}/>
                : <Games
                    setTime={setTime}
                    startGame={startGame}
                    setStartGame={setStartGame}
                    minute={minute}
                    second={second}
                    setSecond={setSecond}
                    setMinute={setMinute}
                    pairOfArrayCards={pairOfArrayCards}
                    setGameOver={setGameOver}
                    pairs={pairs}
                    moves={moves}
                    openedCards={openedCards}
                    arrayCards={arrayCards}
                    matched={matched}
                    handleGameRestart={handleGameRestart}
                    flipCard={flipCard}
                />
            }
        </div>
    );
})
