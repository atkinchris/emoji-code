import { createPortal } from 'react-dom'

const Modal = ({ children, isOpen }) =>
  createPortal(isOpen && children, document.getElementById('modal-root'))

export default Modal
