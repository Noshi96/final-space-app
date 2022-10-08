import styled from 'styled-components'
import Icon from '../Icon/Icon'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
  overflow: hidden;
`

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`

export const Modal = styled.div`
  z-index: 100;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: #484848;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
  background: #ffffff;

  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
    0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  border-radius: 12px;
`

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 1rem;
  margin-right: -3rem;
`

export const ModalCloseButton = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
`

export const ButtonDefault = styled.div`
  background: #247ba0;
  color: #fff;
`

export const Image = styled.img`
  width: 16rem;
  border-radius: 12px;
  display: flex;
  justify-self: start;
`
export const StyledIcon = styled(Icon)`
  margin-right: 0.5rem;
  color: ${(props) =>
    props.female === 'Female'
      ? '#E91E63;'
      : props.female === 'Male'
      ? '#2196F3;'
      : props.status === 'Alive'
      ? '#D32F2F;'
      : props.status === 'Deceased'
      ? '#2196F3;'
      : '#000;'};

  margin-left: ${(props) =>
    props.female === 'Female'
      ? '0.5rem;'
      : props.female === 'Male'
      ? '0.5rem;'
      : '0;'};
`

export const Name = styled.h2`
  width: 100%;
`
export const Origin = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

export const AddToFavoriteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem;

  width: 10rem;
  height: 2.5rem;

  background: #7f56d9;

  border: 1px solid #7f56d9;

  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;

  color: #fff;
  cursor: pointer;
`

export const Status = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

export const Species = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`
