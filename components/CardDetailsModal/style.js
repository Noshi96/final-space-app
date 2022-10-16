import styled from 'styled-components'
import Icon from '../Icon/Icon'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  opacity: 0.5;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background: #000;
`

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1050;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
`

export const Modal = styled.div`
  position: fixed;
  z-index: 1050;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: 16rem;
  align-items: center;
  justify-items: center;
  color: #484848;
  @media only screen and (min-width: 48rem) {
    justify-content: center;
    grid-template-columns: 19.5rem 19.5rem;
    grid-template-rows: repeat(4, auto);
  }
`

export const CardDetails = styled.div`
  grid-row: 3 /4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
    0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  border-radius: 0px 0px 24px 24px;
  width: 100%;
  background: #fff;
  color: #484848;
  @media only screen and (min-width: 48rem) {
    grid-row: 3 / 4;
  }
`

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 24px 24px 0px 0px;
  padding-top: 1rem;
  padding-right: 0.5rem;
  width: 100%;
  background: #fff;
  @media only screen and (min-width: 48rem) {
    grid-row: 2 / 3;
  }
`

export const ModalCloseButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`

export const Image = styled.img`
  grid-row: 2 / 3;
  z-index: 110;
  border-radius: 24px;
  box-shadow: 0px 6px 22px #000;
  width: 120%;
  @media only screen and (min-width: 48rem) {
    grid-row: 1 / -1;
    margin-left: 2rem;
    width: 100%;
  }
`

export const Name = styled.h2`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: 1rem;
  padding-right: 2rem;
  padding-left: 2rem;
  @media only screen and (min-width: 48rem) {
    margin-top: 0rem;
  }
`

export const StyledIcon = styled(Icon)`
  margin-right: 0.8rem;
  color: ${(props) =>
    props.female === 'Female'
      ? '#E91E63;'
      : props.female === 'Male'
      ? '#2196F3;'
      : '#000;'};

  margin-left: ${(props) =>
    props.female === 'Female'
      ? '0.5rem;'
      : props.female === 'Male'
      ? '0.5rem;'
      : '0;'};
`

export const AddToFavoriteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  width: 10rem;
  height: 2.5rem;
  border: 1px solid #7f56d9;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 24px;
  background: #7f56d9;
  cursor: pointer;
  color: #fff;

  &:hover {
    background: #7f56a9;
    border: 1px solid #7f56a9;
    box-shadow: 0px 5px 2px rgba(16, 24, 40, 0.05);
  }

  &:active {
    background: #7f56d9;
    border: 1px solid #7f56d9;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  }
`
