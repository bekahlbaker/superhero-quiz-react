import React from 'react';
import styled from 'styled-components';
import devices from '../style-utils/devices';
import HeroCard from './Card';

const Main = styled.div`
  align-items: center;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media ${devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${devices.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }

  grid-gap: 1em;
  justify-content: center;
  max-width: 80%;
  padding: 20px;
`;

const Grid = props => {
  const { heroes } = props;
  const gridItems = heroes.map(hero => (
    <HeroCard hero={hero} key={hero.name} />
  ));
  return <Main>{gridItems}</Main>;
};

export default Grid;
