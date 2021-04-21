import { Component } from 'react';
import './style.css'
import logo_bco from '../../images/logo_bco.svg'
import fb from '../../images/fb.svg'
class Header extends Component {
   constructor(props) {
      super(props);
         this.state = {
         
         }
   }
   render() {
      return (
         <div className='containerFooter'>
             <img src={logo_bco} alt="" style={{width: '6vh'}}/>
            <div className='infoFooter'>
                <h3 className='textHeader'>Nosotros</h3>
                <h3 className='textHeader'>Historia</h3>
                <h3 className='textHeader'>Labor Social</h3>
                <h3 className='textHeader'>Crèditos</h3>
                <h3 >Contacto</h3>
            </div>
            <div>
               <img src={fb} alt="" style={{width: '1.6vh'}}/>
               <h3>Politica de privacidad.</h3>
               <h3>hecho por </h3>
               <h3>Aliat Agency</h3>
            </div>
         </div>
      )
   }
}
export default Header