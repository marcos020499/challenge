import { Component } from 'react';
import './style.css'
import iconHeader from '../../images/logo_azul.svg'
class Header extends Component {
   constructor(props) {
      super(props);
         this.state = {
         
         }
   }
   render() {
      return (
         <div>
            <img src={iconHeader} alt="" className='iconHeader'/>
            <div className='containerHeader'>
               <div className='infoHeader'>
                  <h3 className='textHeader'>Nosotros</h3>
                  <h3 className='textHeader'>Historia</h3>
                  <h3 className='textHeader'>Labor Social</h3>
                  <h3 className='textHeader'>Crèditos</h3>
                  <h3 >Contacto</h3>
               </div>
            </div>
         </div>
      )
   }
}
export default Header