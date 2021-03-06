import './start.css'
import { BsFacebook, BsYoutube, BsGithub, BsLinkedin } from 'react-icons/bs'

export const Startpage = ({ CardShuffle }) => {
    return (
        <div className="startScreen">
            <div className="myImage">
                <img src="owner.jpg" alt='ownerImage' />
            </div>


            <div className="mainSection">

                <div className='info_section'>
                    <img src="logo192.png" alt="gameLogo" />
                    <span>Card Molotov</span>

                </div>
                <p>Score minimum  and Match the following Pairs</p>
                <button onClick={CardShuffle}>Start Game</button>
            </div>



            <div className="socialMedia">
                <p>follow me on :</p>
                <a href='https://www.linkedin.com/in/yash-purohit-a135321b1/'><BsLinkedin /></a>
                <a href='https://github.com/yashPurohit01'><BsGithub /></a>
                <a href='https://www.youtube.com/channel/UCynO2RXIN3nJHJYtWKcPStw'><BsYoutube /></a>
                <a href='https://www.facebook.com/fantastic.yash'><BsFacebook /></a>


            </div>
        </div>
    )
}