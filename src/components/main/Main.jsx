import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import './Main.css'
import { Context } from '../../Context/Context'

const Main = () => {

  const { onSent,recentPrompt,showResult,loading,resultData,setInput,input } =useContext(Context)

  return (

    <div className='main'>

      <div className='nav'>

        <p>Gemini</p>

        <img src={assets.user_icon}/>

      </div>

      <div className='main-container'>

        {!showResult ?
        <>
          
          <div className='greet'>

          <p><span>Hello, Aniket</span></p>

          <p>How can I help you today?</p>

          </div>

          <div className='cards'>

          <div className='card'>

            <p>Suggest the best parks to visit in a city with descriptions</p>

            <img src={assets.compass_icon}/>

          </div>

          <div className='card'>

            <p>Act like Mowgli from The Jungle Book and answer questions</p>

            <img src={assets.bulb_icon}/>

          </div>

          <div className='card'>

            <p>Brainstorm team bonding activities for our work retreat</p>

            <img src={assets.message_icon}/>

          </div>

          <div className='card'>

            <p>Explain the following code step-by-step in detail</p>

            <img src={assets.code_icon}/>

          </div>

          </div>
        </>
        :<div className='result'>
          
          <div className='result-title'>

            <img src={assets.user_icon} />

            <p>{recentPrompt}</p>

          </div>

          <div className='result-data'>

            <img src={assets.gemini_icon} />

            {loading ? 

            <div className='loader'>
                <hr></hr>
                <hr></hr>
                <hr></hr>
            </div>

            :<p dangerouslySetInnerHTML={{__html:resultData}}></p>

            }

          </div>

        </div>
        }


        <div className='main-bottom'>

          <div className='search-box'>

            <input type='text' placeholder='Enter a prompt here' onChange={(e) => setInput(e.target.value)} value={input} />

            <div>
              <img src={assets.gallery_icon}/>
              <img src={assets.mic_icon}/>
              <img onClick={()=>onSent()} src={assets.send_icon}/>
            </div>

          </div>

          <p className='bootm-info'>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps</p>

        </div>

      </div>

    </div>

  )
}

export default Main
