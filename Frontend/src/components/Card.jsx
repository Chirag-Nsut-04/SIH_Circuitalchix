import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Card = ({ item }) => {
  return (
    <CardContainer>
      <ImageContainer to={`/${item.id}`}>
        <img src={item.img} alt={item.flightName} />
      </ImageContainer>
      <TextContainer>
        <Title>
          <Link to={`/${item.id}`}>{item.flightName}</Link>
        </Title>
        <Details>
          <Detail>
            <span>Location: {item.Location}</span>
          </Detail>
          <Detail>
            <span>Opening Time: {new Date(item.OpeningTime).toLocaleTimeString()}</span>
          </Detail>
          <Detail>
            <span>Closing Time: {new Date(item.ClosingTime).toLocaleTimeString()}</span>
          </Detail>
        </Details>
        <Price>$ {item.price}</Price>
        <BookButton to="/chatbot">Book Museums</BookButton>
      </TextContainer>
    </CardContainer>
  );
};

// Styled components
const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled(Link)`
  flex: 2;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const TextContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
`;

const Details = styled.div`
  font-size: 14px;
  color: #555;
`;

const Detail = styled.div`
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 16px;
  }
`;

const Price = styled.p`
  font-size: 22px;
  font-weight: 400;
  color: #444;
`;

const BookButton = styled(Link)`
  padding: 10px 20px;
  background-color: #ff8c00;
  color: white;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e67e00;
  }
`;

export default Card;
