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

export const ModalImageTextForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  @media only screen and (min-width: 48rem) {
    flex-direction: row;
    justify-content: center;
    gap: 0;
  }
`

export const Form = styled.form`
  z-index: 100;

  width: 16rem;

  color: #484848;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 1rem;
  background: #ffffff;
  gap: 0.5rem;

  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
    0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  border-radius: 24px;

  @media only screen and (max-width: 23.43rem) {
    width: 13rem;
    font-size: 0.8rem;
  }

  @media only screen and (min-width: 48rem) {
    width: 19.5rem;
    margin-left: 2rem;
  }
`

export const Modal = styled.div`
  z-index: 100;

  width: 16rem;

  color: #484848;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 1rem;
  padding-top: 2rem;
  background: #ffffff;

  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08),
    0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  border-radius: 24px;

  @media only screen and (max-width: 24rem) {
    width: 13rem;
    font-size: 0.8rem;
  }

  @media only screen and (min-width: 48rem) {
    width: 19.5rem;
  }
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
  width: 14rem;
  border-radius: 24px;
  margin-top: 2rem;
  margin-bottom: -2rem;
  box-shadow: 0px 6px 22px #000;
  z-index: 150;
  @media only screen and (min-width: 48rem) {
    width: 20rem;
    margin-right: -1rem;
    margin-top: 0;
    margin-bottom: 0;
  }
`

export const Name = styled.h2`
  margin-top: 1rem;
  width: 100%;
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
  padding: 0.75rem 1rem;
  margin-top: 1rem;
  width: 10rem;
  height: 2.5rem;
  background: #7f56d9;
  border: 1px solid #7f56d9;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 24px;
  color: #fff;
  cursor: pointer;

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
