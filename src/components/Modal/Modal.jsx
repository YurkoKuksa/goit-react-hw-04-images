import React, { useEffect } from 'react';
import { ModalStyle, Overlay } from './Modal.styled';

export const Modal = ({ close, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        close();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [close]);

  const handleClickOnBackdrop = e => {
    if (e.currentTarget === e.target) {
      close();
    }
  };

  return (
    <Overlay onClick={handleClickOnBackdrop}>
      <ModalStyle>{children}</ModalStyle>
    </Overlay>
  );
};

export default Modal;

// import React, { Component } from 'react';
// import { ModalStyle, Overlay } from './Modal.styled';

// export class Modal extends Component {
//   componentDidMount() {
//     document.addEventListener('keydown', handleKeyDown);
//   }

//   componentWillUnmount() {
//     document.removeEventListener('keydown', handleKeyDown);
//   }

//   handleClickOnBackdrop = e => {
//     console.log(e.target);
//     if (e.currentTarget === e.target) {
//       this.props.close();
//     }
//   };

//   handleKeyDown = e => {
//     if (e.key === 'Escape') {
//       this.props.close();
//     }
//   };

//   render() {
//     return (
//       <Overlay onClick={this.handleClickOnBackdrop}>
//         <ModalStyle>{this.props.children}</ModalStyle>
//       </Overlay>
//     );
//   }
// }

// export default Modal;
