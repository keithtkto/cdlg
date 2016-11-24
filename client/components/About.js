import React, { Component } from 'react'
var {SparkScroll, SparkProxy, sparkScrollFactory} =
  require('react-spark-scroll-gsap')({
    invalidateAutomatically: true
  });

export default class About extends Component {
  render() {
    return ( <div className='about-container container' style={{width: '80%',padding: '50px 0',margin: '0 auto'}}>
              <div className='about-text'>
                <h1>
                  About
                </h1>
                <div>
                  <p className='bold'>
                    Carlos de la Garza is a Producer, Engineer, Mixer, and Songwriter, based in Los Angeles.
                  </p>  
                </div>
                <div>
                  <div className='six columns'>
                    <p>
                      Hailing from the hard-knock streets of Cerritos, CA, Carlos spent his formative years immersed in skateboard and punk culture before receiving his first drum set in 10th grade. 
                    </p>
                    <p>
                      Following his first live show, a last place finish in the school talent show for performing Metallica’s “Am I Evil,” his desire for further musical feelings was ignited, leading to his first actual band experience, local South Bay punkers F.Y.P.  
                      It was with this supergroup that de la Garza would experience his first “professional” recording studio experience, playing on the band’s first few records.
                    </p> 
                  </div>
                  <div className='six columns'>
                    <p>
                      Twelve years and 19 bands later he set his sights upon a new destiny...
                      His first proper studio job as an assistant at Capitol Recording Studios in 2003 enabled him to work alongside some truly legendary artists, producers and engineers, and set him upon the path to go solo in mid-2005. 
                    
                    </p>
                    <p style={{fontWeight: 200, color: 'black', letterSpacing: 1}}>To this day he has been known to still play “Am I Evil”, note-for-note.</p>
                  </div>
                </div>
              </div>
            </div>      
    );
  }
}