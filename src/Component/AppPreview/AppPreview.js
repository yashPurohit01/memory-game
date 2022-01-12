import { useEffect, useState } from 'react';
import Card from '../card/Card';
import styles from './preview.module.css'

const cards = [
    {
        src: "/images/icon/python.png",
        lang: "python",
        id: "",
        matched: false
    },
    {
        src: "/images/icon/nodejs.png",
        lang: "nodejs",
        id: "",
        matched: false
    },
    {
        src: "/images/icon/javascript.png"
        , lang: "javascript",
        id: "",
        matched: false,
    },
    {
        src: "/images/icon/flutter.png",
        lang: "flutter",
        id: "",
        matched: false
    },
    {
        src: "/images/icon/java.png",
        lang: "java",
        id: "",
        matched: false
    },
    {
        src: "/images/icon/cpp.png",
        lang: "cpp",
        id: "",
        matched: false
    },

]


function AppPreview() {
    const [Cards, setCards] = useState([]);
    const [steps, setSteps] = useState(0)
    const [firstSelect, setfirstSelect] = useState(null);
    const [SecondSelect, setSecondSelect] = useState(null);

    const CardShuffle = () => {
        const ShuffledCards = [...cards, ...cards]
            .sort(() => Math.random() - 0.5)
            .map(card => ({ ...card, id: Math.random() }))
        setCards(ShuffledCards);
        setSteps(0);
        console.log(JSON.stringify(Cards));

    }
    const SelectionHandler = (card) => {
        if (firstSelect) {
            setSecondSelect(card);
        }
        else {
            setfirstSelect(card);
            setSteps(pre => pre + 1) ;
        }
        

    }
    useEffect(() => {
        if (firstSelect && SecondSelect) {
            if (firstSelect.lang === SecondSelect.lang) {
                console.log("matched")
                setCards(prev => {
                    return prev.map(card => {
                        if (card.lang === firstSelect.lang) {
                            return { ...card, matched: true, }
                        }
                        else {

                            return card
                        }
                    })

                })
                resetSelection();
                console.log(Cards)


            }
            else {
                resetSelection();
            }
        }
    }, [firstSelect, SecondSelect]);
    console.log(Cards);

    const resetSelection = () => {
        setfirstSelect(null);
        setSecondSelect(null);

    }
    return (
        <div className={styles.previewSection}>
            <div className={styles.appheader} >
               <button onClick={CardShuffle}>NewGame</button>
               <div style={{color:"white"}}>
                   <span><strong>Score:</strong>{steps}</span>
               </div>
            </div>
          
            <div className={styles.cardPreviewSection}>
                {
                    Cards.map(card => {
                        return (
                            <div key={card.id}>
                                <Card
                                    card={card}
                                    SelectionHandler={SelectionHandler}
                                    flipped={card.matched || card === firstSelect || card === SecondSelect}
                                />
                            </div>
                        )
                    })

                }
            </div>
        </div>
    );
}

export default AppPreview;
/* 
  
                  


*/