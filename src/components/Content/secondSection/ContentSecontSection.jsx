import { Component } from 'react';
import './style.css'
import impulse4 from '../../../images/00_impulse4.jpg'
import impulse1 from '../../../images/00_impulse1.jpg'
import impulse2 from '../../../images/00_impulse2.jpg'
import impulse3 from '../../../images/00_impulse3.jpg'
import logo_bco from '../../../images/logo_bco_completo.svg'

class Content extends Component {
   constructor(props) {
      super(props);
         this.state = {
         
         }
   }
   render() {
      return (
         <>
            <div className='containerSecondSection'>
               <h3>Obtèn un impulso para tu <small className='small'>negocio</small></h3>
               <div className='contentSecondSection'>
                  <img src={impulse4} alt="" style={{width: '30%', height: '42%'}}/>
                  <img src={impulse1} alt="" style={{width: '27%', height: '10%', marginLeft: '1.5%'}}/>
                  <img src={impulse2} alt="" style={{width: '27%', height: '10%', position: 'relative', top: '14.2vw', right: '27%', marginTop: '2.5%'}}/>
                  <div className='containerTextSecondSection'>
                     <h4>Nuestro objetivo es ayudar a que las familiar mejoren su calidad de vida.</h4>
                     <img src={logo_bco} alt="" style={{width: '50%', alignContent: 'baseline'}}/>
                  </div>
               </div>
               <div className="contentSecondSection">
                  <img src={impulse3} alt="" style={{width: '30%', height: '10%'}}/>
                     <div className='secondContainerTextSecondSection'>
                        <h4>!Mas de 340 creditos otorgados a lo largo de 40 meses</h4>
                        <p>Buscamos siempre llegar a las mujeres comprometidas con cumplir sus objetivos y mejorar su calidad de vida.</p>
                     </div>
               </div>
            </div>
         </>
      )
   }
}
export default Content