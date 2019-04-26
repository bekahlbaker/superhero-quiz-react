import React from 'react';
import styled from 'styled-components';
import devices from '../style-utils/devices';
import Close from '../img/close.png';

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.75);
  height: 100%;
  display: flex; 
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  z-index: 2;
`

const Main = styled.div`
  background: rgba(255, 255, 255, 0.85);
  border-radius: 5px;
  min-height: 50%;
  position: absolute;
  max-width: 95%;
  z-index: 3;

    @media ${devices.tablet} {
        max-width: 60%;
    }
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  height: 50px;
  width: 50px;
  opacity: 5;
  outline: none;

  img {
    height: 20px;
    width: 20px;
  }
`;

const ModalHeader = styled.div`
  align-items: center;
  color: #cf000f;
  border-bottom: 1px solid white;
  display: flex;
  font-family: 'Montserrat', sans-serif;
  font-size: 2em;
  /* justify-content: space-between; */
  justify-content: center;
  letter-spacing: 2px;
  margin-top: 0;
  padding: 8px 24px;
`;

const Title = styled.h4`
  font-family: 'Montserrat';
  letter-spacing: 2px;
`;

const Subtitle = styled.p``;

const ModalBody = styled.div`
  color: #000;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 1px;
  padding: 8px 24px;

  li {
      list-style: none;
  }
`;

const Modal = props => {
    const { onClick } = props;
  return (
    <Overlay onClick={onClick}>
        <Main>
            <ModalHeader>
                ARE YOU A COMIC EXPERT?
                {/* <CloseButton onClick={onClick}>
                <img src={Close} alt="" />
                </CloseButton> */}
            </ModalHeader>
            <ModalBody>
                <Title>Here's how it works: </Title>
                <Subtitle>{`You will be presented with the headshots of 39 different DC & Marvel Comic superheroes and villains. Beneath each headshot is a place for you to enter the name of the character. Enter as many as you can and see how you score at the end!`}</Subtitle>
                <Subtitle>{`(Remember, this fan tribute is just for fun, so don’t get too upset if you can’t get them all - or if one of your favorites was left out.)`}</Subtitle>
                <Title>See how you rate:</Title>
                <ul>
                <li>0 : ignorant</li>
                <li>1 - 7 : novice</li>
                <li>8 - 16 : apprentice</li>
                <li>17 - 24 : intermediate</li>
                <li>25 - 32 : advanced</li>
                <li>33 - 38 : master</li>
                <li>39 : expert</li>
                </ul>
            </ModalBody>
        </Main>
    </Overlay>
  );
};

export default Modal;
