import { PureComponent } from 'react';
import './style.css'
import social_asssistance1 from '../../../images/00_social_asssistance1.jpg'
import social_asssistance2 from '../../../images/00_social_asssistance2.jpg'
import social_asssistance3 from '../../../images/00_social_asssistance3.jpg'

class Content extends PureComponent {
   render() {
      return (
         <>
            <div>
               <h3 className='contentTitle'>Asistencia social</h3>
               <h4 className='contentDescription'>para mujeres sin fines de lucro</h4>
               <div className='containerFirstSection' style={{fontSize: '2%'}}>
                  <div className='containerAsssistance'>
                     <img src={social_asssistance1} className='containerAsssistanceImg1' alt=""/>
                     <p>Somos una institución</p>
                  </div>
                  <div className='containerAsssistanceSecontContainer'>
                     <img src={social_asssistance2} className='containerAsssistanceImg2' alt=""/>
                     <p>que busca el bienestar social, no por cumplir una estadísticas</p>
                  </div>
                  <div className='containerAsssistance'>
                     <img src={social_asssistance3} className='containerAsssistanceImg3' alt=""/>
                     <p>o llegar a una meta</p>
                  </div>
               </div>
            </div>
         </>
      )
   }
}
export default Content