import React, { useState } from 'react';
import styled from 'styled-components';

const Filter = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    source: '',
    destination: '',
    minPrice: '',
    maxPrice: '',
    departureDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleSearch = () => {
    onSearch(filters);
  };

  return (
    <FilterContainer>
      <Title>
        Search Flights
      </Title>
      <Top>
        <Item>
          <label htmlFor="source">Source</label>
          <input
            type="text"
            id="source"
            name="source"
            placeholder="Enter source city"
            value={filters.source}
            onChange={handleChange}
          />
        </Item>
        <Item>
          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            id="destination"
            name="destination"
            placeholder="Enter destination city"
            value={filters.destination}
            onChange={handleChange}
          />
        </Item>
      </Top>
      <Bottom>
        <Item>
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
            value={filters.minPrice}
            onChange={handleChange}
          />
        </Item>
        <Item>
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
            value={filters.maxPrice}
            onChange={handleChange}
          />
        </Item>
        <Item>
          <label htmlFor="departureDate">Departure Date</label>
          <input
            type="date"
            id="departureDate"
            name="departureDate"
            value={filters.departureDate}
            onChange={handleChange}
          />
        </Item>
        <SearchButton onClick={handleSearch}>
          Search
        </SearchButton>
      </Bottom>
    </FilterContainer>
  );
};

// Styled components
const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.h1`
  font-weight: 300;
  font-size: 24px;
`;

const Top = styled.div`
  display: flex;
  gap: 20px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  label {
    font-size: 12px;
  }

  input {
    width: 150px;
    padding: 10px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    font-size: 14px;
  }
`;

const SearchButton = styled.button`
  width: 100px;
  padding: 10px;
  border: none;
  cursor: pointer;
  background-color: #ff8c00;
  color: white;
`;

export default Filter;
