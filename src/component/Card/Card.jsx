import s from "./Card.module.css";
import star from "../../img/star.png";
import {useEffect} from "react";

export const Card = ({arrayCards,setSecond, minute,second, flipCard, stop, matched, openedCards, moves, pairs}) => {

    useEffect(()=>{
        let intervalId = setInterval(()=>setSecond(s => s + 1), 1000)

        return () => {
            clearInterval(intervalId)
        }
    },[])

    return (
        <div>
            <div className={s.title}>
                <p className={s.numberOfStrokes}>Сделано ходов: <span style={{marginLeft: "10px", color: "red"}}> {moves} </span></p>

                <div className={s.time}>
                    {minute <= 9 ? `0${minute}`: minute} : {second <= 9 ? `0${second}` : second}
                </div>

                <p className={s.numberOfStrokes}>Найдено пар: <span style={{marginLeft: "10px", color: "red"}}> {pairs} </span></p>
            </div>
            <div className={openedCards.length >= 2 ? `${s.cards} ${s.notClick}` : s.cards}>
                {arrayCards.map((item, index) => {
                    let isFlipped = false;

                    if (openedCards.includes(index)) isFlipped = true
                    if (matched.includes(item.id)) isFlipped = true

                    return (
                        <div key={index}
                             className={isFlipped ? `${s.card}  ${s.flipped}` : s.card}
                             onClick={() => flipCard(index)}>
                            <div className={s.inner}>
                                <div className={s.front}>
                                    <img className={s.img} src={item.img} alt={"Front-card"}/>
                                </div>
                                <div className={s.back}>
                                    <img className={s.img} src={star} alt={"card-shirt"}/>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
           <button onClick={stop} className={s.buttonRestart}>Завершить</button>
        </div>
    )
}