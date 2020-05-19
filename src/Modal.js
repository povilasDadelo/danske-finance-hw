import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: ${({ show }) => show ? 'block' : 'none'};
`

const ModalBody = styled.div`
  position:fixed;
  background: white;
  padding: 15px;
  width: 80%;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`

const Modal = ({ handleClose, show, children }) => {
  return (
    <Container show={show}>
      <ModalBody>
        {children}
        <button onClick={handleClose}>Close</button>
      </ModalBody>
    </Container>
  );
};

export default Modal
