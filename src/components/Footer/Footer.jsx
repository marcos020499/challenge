import { PureComponent } from 'react';
import './style.css'
import logo_bco from '../../images/logo_bco.svg'
import fb from '../../images/fb.svg'
class Header extends PureComponent {
   render() {
      return (
         <div className='containerFooter'>
            <img src={logo_bco} alt="" className='logo_bcoFooter'/>
            <h3 className='fundationName'>Fundación Lolita Barragàn</h3>
            <div className='infoFooter'>
               <a href='/' className='textFooter'>Nosotros</a>
               <a href='/' className='textFooter'>Historia</a>
               <a href='/' className='textFooter'>Labor Social</a>
               <a href='/' className='textFooter'>Créditos</a>
               <a href='/' className='textFooter'>Contacto</a>
            </div>
            <div>
               <img src={fb} alt="" style={{width: '1.2vh'}}/>
               <div className='AliatFooter'>
                  <p style={{marginBottom: '1%'}}>Política de privacidad.</p>
                  <p style={{margin: '0%'}}>hecho por </p>
                  <p style={{margin: '0%'}}>Aliat Agency</p>
               </div>
            </div>
         </div>
      )
   }
}
export default Header