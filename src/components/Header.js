import React from 'react';
import TitleLogo from '../img/title.png';
import styled from 'styled-components';
import LargeButton from './LargeButton';

const HeaderLogo = styled.img`
  margin-bottom: 24px;
  width: 75%;
`;

const HiddenH1 = styled.h1`
  position: absolute;
  visibility: hidden;
`;

const Main = styled.div`
  align-items: center;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0px;
  padding: 20px 10px;
  top: 0;
`;

const Header = props => {
  const { onClick } = props;
  return (
    <Main>
      <HeaderLogo src={TitleLogo} alt="" />
      <HiddenH1>DC and MARVEL CHARACTER QUIZ</HiddenH1>

      <LargeButton title={'How To Play'} onClick={onClick} />
    </Main>
  );
};

export default Header;
