import React from 'react';
import styled from 'styled-components';
import Logo1 from '../../assets/images/logo1.png';

const StyledWrapper = styled.div`
  display: grid;
  width: 70vw;
  margin: 10px auto 70px auto;
`;

const StyledHeader = styled.div`
  padding-top: 15px;
  display: grid;
  grid-template-columns: 0.09fr 0.75fr;
`;

const StyledAwatar = styled.img`
  max-width: 70px;
  margin-left: 10px;
  border-radius: 50px;
  &:hover {
    transform: scale(1.15);
    filter: sepia(70%);
    transition: transform 0.3s ease-in-out;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center; 

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
    width: 70vw;
  }
`;

const StyleGridItem = styled.img`
  max-width: 350px;
  &:hover {
    transform: scale(1.15);
    transition: transform 0.3s ease-in-out;
  }
`;

const StyledParagraph = styled.p`
  padding-left: 10px;
`;

const GalleryList = () => {
  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledAwatar src={Logo1} alt="galleryItem" />
        <div>
          <StyledParagraph> Jan Kowlaski Fotograf</StyledParagraph>
          <StyledParagraph>Historia Weselna | Kętrzyn | 2020</StyledParagraph>
        </div>
      </StyledHeader>
      <StyledGrid>       
        <StyleGridItem src={Logo1} alt="galleryItem" />
        <StyleGridItem src={Logo1} alt="galleryItem" />
        <StyleGridItem src={Logo1} alt="galleryItem" />
      </StyledGrid>
      <StyledGrid>        
        <StyleGridItem src={Logo1} alt="galleryItem" />
        <StyleGridItem src={Logo1} alt="galleryItem" />
        <StyleGridItem src={Logo1} alt="galleryItem" />
      </StyledGrid>
    </StyledWrapper>
  );
};

export default GalleryList;
