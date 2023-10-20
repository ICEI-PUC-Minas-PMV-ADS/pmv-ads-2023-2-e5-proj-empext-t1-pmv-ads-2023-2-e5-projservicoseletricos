import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

export const HomeContainer = styled.div`
  padding: 20px;
`;

export const MenuBarWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  / MenuBar */
`;

export const CenteredCarouselContainer = styled.div`
  display-aling: center;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const CustomCarousel = styled(Carousel)`
  max-width: 100%;
  width: 100%;
`;
