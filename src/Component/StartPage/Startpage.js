import './start.css'

export const Startpage = ({CardShuffle}) => {
    return (
        <div className="startScreen">
            <div className='info_section'>
                <img src="logo192.png" alt="gameLogo" />
                <span>Card Molotov</span>

            </div>
            <button onClick={CardShuffle}>Start Game</button>
          

        </div>
    )
}