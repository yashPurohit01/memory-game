import { useEffect, useState } from 'react';
import Card from '../card/Card';
import { Startpage } from '../StartPage/Startpage';
import styles from './preview.module.css'
import { cards } from '../data';



function AppPreview() {
    const [Cards, setCards] = useState([]);
    const [steps, setSteps] = useState(0)
    const [firstSelect, setfirstSelect] = useState(null);
    const [SecondSelect, setSecondSelect] = useState(null);
    const [Start, setStart] = useState(true);

    const CardShuffle = () => {
        setStart(false);
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
            setSteps(pre => pre + 1);
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



            }
            else {
                resetSelection();
            }
        }
    }, [firstSelect, SecondSelect]);


    const resetSelection = () => {
        setfirstSelect(null);
        setSecondSelect(null);

    }

    const ViewCards = Cards.map(card => {
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

    return (
          <>{
            Start ?
             <Startpage CardShuffle={CardShuffle}/>
              : 
              <div className={styles.previewSection}>

              <div className={styles.appheader} >
               
                  <button onClick={CardShuffle}>NewGame</button>
                  <img src="logo192.png" />
                  
                  <div style={{ color: "white" ,display:'flex' , alignItems:"center" }}>
                     
                      <span><strong>Score:</strong>{steps}</span>
                  </div>
              </div>
              <div className={styles.cardPreviewSection}>
                  {
                      ViewCards
                  }
  
  
              </div>
  
          </div>


                   }
           </>
        

       

    );
}

export default AppPreview;
/* 
  
                  


*/