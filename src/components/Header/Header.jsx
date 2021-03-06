import { PureComponent } from 'react';
import './style.css'
import iconHeader from '../../images/logo_azul.svg'
import 'font-awesome/css/font-awesome.min.css';
import Modal from '@bdenzer/react-modal';
class Header extends PureComponent {
   constructor(props) {
      super(props);
      this.state = {
          shouldShowModal: false,
      }
      this.closeModal = this.closeModal.bind(this);
      this.openModal = this.openModal.bind(this);
    }
  
    closeModal() {
      this.setState({ shouldShowModal: false });
    }
  
    openModal() {
      this.setState({ shouldShowModal: true });
    } 
   render() {
      return (
         <div>
            <img src={iconHeader} alt="" className='iconHeader'/>
            <div className='containerHeader'>
            <span href='/' onClick={this.openModal} className='modalNavegation'><i className='fa fa-bars'></i></span>
               <div className='infoHeader'>
                  <a href='/' className='textHeader'>Nosotros</a>
                  <a href='/' className='textHeader'>Historia</a>
                  <a href='/' className='textHeader'>Labor Social</a>
                  <a href='/' className='textHeader'>Créditos</a>
                  <a href='/' className='textHeader'>Contacto</a>
               </div>
            </div>
            <div className='modalContainer'>
                  <Modal
                     closeModal={this.closeModal}
                     shouldShowModal={this.state.shouldShowModal}
                  >
                     <div className='modal'>
                        <a href='/' className='textHeader'><p>Nosotros</p></a>
                        <a href='/' className='textHeader'><p>Historia</p></a>
                        <a href='/' className='textHeader'><p>Labor Social</p></a>
                        <a href='/' className='textHeader'><p>Créditos</p></a>
                        <a href='/' className='textHeader'><p>Contacto</p></a>
                     </div>
                  </Modal>
               </div>
         </div>
      )
   }
}
export default Header