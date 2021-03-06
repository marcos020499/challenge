import { PureComponent } from 'react';
import './style.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import impulse4 from '../../../images/00_impulse4.jpg'
import impulse1 from '../../../images/00_impulse1.jpg'
import impulse2 from '../../../images/00_impulse2.jpg'
import impulse3 from '../../../images/00_impulse3.jpg'
import logo_bco from '../../../images/logo_bco_completo.svg'

class Content extends PureComponent {
   render() {
      return (
         <>
            <div className='containerSecondSection'>
               <h3>Obtén un impulso para tu <small className='small'>negocio</small></h3>
               <div className='contentSecondSection'>
                  <img loading='lazy' src={impulse4} alt="" className='impulse4'/>
                  <img loading='lazy' src={impulse1} alt="" className='impulse1'/>
                  <img loading='lazy' src={impulse2} alt="" className='impulse2'/>
                  <img loading='lazy' src={impulse3} alt="" className='impulse3-1'/>
                  <button className='buttonSecontSection'>!Más información¡</button>
                  <div className='containerTextSecondSection'>
                     <p>Nuestro objetivo es ayudar a que las familiar mejoren <small className='smallSecondText'>su calidad de vida.</small></p>
                     <img src={logo_bco} alt="" className='logo_bco'/>
                  </div>
               </div>
               <div className="contentSecondSectionTwo">
                  <img loading='lazy' src={impulse3} alt="" className='impulse3'/>
                     <div className='secondContainerTextSecondSection'>
                        <h4>!Más de 340 créditos otorgados a lo largo de 40 meses!</h4>
                        <p>Buscamos siempre llegar a las mujeres comprometidas con cumplir sus objetivos y mejorar su calidad de vida.</p>
                     </div>
               </div>
            </div>
         </>
      )
   }
}
export default Content