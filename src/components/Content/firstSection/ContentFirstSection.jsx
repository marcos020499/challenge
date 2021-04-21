import { Component } from 'react';
import './style.css'
import social_asssistance1 from '../../../images/00_social_asssistance1.jpg'
import social_asssistance2 from '../../../images/00_social_asssistance2.jpg'
import social_asssistance3 from '../../../images/00_social_asssistance3.jpg'

class Content extends Component {
   constructor(props) {
      super(props);
         this.state = {
         
         }
   }
   render() {
      return (
         <>
            <div>
               <h3 className='contentTitle'>Asistencia social</h3>
               <h4 className='contentDescription'>para mujeres sin fines de lucro</h4>
               <div className='containerFirstSection' style={{fontSize: '2%'}}>
                  <div className='containerAsssistance1'>
                     <img src={social_asssistance1} alt="" style={{width: '90%', paddingTop: '5%'}}/>
                     <h5>somos una institucion</h5>
                  </div>
                  <div className='containerAsssistance2'>
                     <img src={social_asssistance2} alt="" style={{width: '90%', paddingTop: '1.5%'}}/>
                     <h5>que busca el bienestar social, no por cumplir una estadìsticas</h5>
                  </div>
                  <div className='containerAsssistance3'>
                     <img src={social_asssistance3} alt="" style={{width: '95%', paddingTop: '2%'}}/>
                     <h5>o llegar a una meta</h5>
                  </div>
               </div>
            </div>
         </>
      )
   }
}
export default Content