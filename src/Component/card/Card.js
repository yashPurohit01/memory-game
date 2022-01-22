
import './card.css'

function Card({card , SelectionHandler ,flipped}) {
   const handleSelection = ()=>{
       SelectionHandler(card);
   }
    return (
        <div className="card"> 
            <div className={`cardview ${ flipped ? "flipped" :""}`}>
        
                <div className="front">
                    <img src={card.src} alt={card.lang} />
                </div>
             
                <div className="back" onClick={handleSelection}>
                   <img src="/images/cardBack3.jpg" width="140" height="200" alt="cardback" /> 
                    
               </div>
        </div>
        </div>
    )
}

export default Card
