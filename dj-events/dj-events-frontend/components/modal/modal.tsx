import { MouseEventHandler, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { IModal } from '@/components/modal/contract';
import styles from '@/styles/Modal.module.css';
import { FaTimes } from 'react-icons/fa';

export default function Modal({ children, title, show, onClose }: IModal) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const ModalContent = show ? (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <a href="#" onClick={handleClose}>
            <FaTimes />
          </a>
        </div>
        {title && <div>{title}</div>}
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser && document.getElementById('modal-root')) {
    return ReactDOM.createPortal(
      ModalContent,
      document.getElementById('modal-root') as HTMLElement
    );
  } else {
    return null;
  }
}
