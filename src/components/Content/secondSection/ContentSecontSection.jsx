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
                  <img src={impulse4} alt="" className='impulse4'/>
                  <img src={impulse1} alt="" className='impulse1'/>
                  <img src={impulse2} alt="" className='impulse2'/>
                  <button className='buttonSecontSection'>!Màs informaciòn¡</button>
                  <div className='containerTextSecondSection'>
                     <p>Nuestro objetivo es ayudar a que las familiar mejoren <small className='smallSecondText'>su calidad de vida.</small></p>
                     <img src={logo_bco} alt="" className='logo_bco'/>
                  </div>
               </div>
               <div className="contentSecondSectionTwo">
                  <img src={impulse3} alt="" className='impulse3'/>
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