import React, { Component } from 'react'


import Splash from '../components/Splash'

export default class About extends Component {
  render() {
    return ( <div style={{width: '80%', margin: '50px auto'}}>
                <div className='about-container'>
                  <div className='about-text'>
                    <h4>About</h4>
                    <p className='bold'>
                      Carlos de la Garza is a Los Angeles based producer, engineer, mixer, and songwriter.
                    </p>  
                    <div>
                      <p className='six columns'>
                        Hailing from the hard-knock streets of Cerritos, CA, Carlos spent his formative years immersed in skateboard and punk culture before receiving his first drum set in 10th grade. 
                        Following his first live show, a last place finish in the school talent show for performing Metallica’s “Am I Evil,” his desire for further musical feelings was ignited, leading to his first actual band experience, local South Bay punkers F.Y.P.  
                        It was with this supergroup that de la Garza would experience his first “professional” recording studio experience, playing on the band’s first few records.
                      </p> 
                      <div className='six columns'>
                        <p>
                          Twelve years and 19 bands later he set his sights upon a new destiny...
                          His first proper studio job as an assistant at Capitol Recording Studios in 2003 enabled him to work alongside some truly legendary artists, producers and engineers, and set him upon the path to go solo in mid-2005. 
                        
                        </p>
                        <p>To this day he has been known to still play “Am I Evil”, note-for-note.</p>
                      </div>
                    </div>
                  </div>
               </div>
             </div>       
    );
  }
}