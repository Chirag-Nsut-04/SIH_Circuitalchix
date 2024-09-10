import React, { useState } from 'react';
import styled from 'styled-components';
import { flightData } from "../lib/dummydata";
import Filter from "../components/Filter";
import Card from "../components/Card";

const Search = () => {
  const [filteredFlights, setFilteredFlights] = useState(flightData);

  const handleSearch = (filters) => {
    const filtered = flightData.filter(flight => {
      const matchesSource = filters.source === '' || flight.Location.toLowerCase().includes(filters.source.toLowerCase());
      const matchesDestination = filters.destination === '' || flight.Location.toLowerCase().includes(filters.destination.toLowerCase());
      const matchesMinPrice = filters.minPrice === '' || flight.price >= Number(filters.minPrice);
      const matchesMaxPrice = filters.maxPrice === '' || flight.price <= Number(filters.maxPrice);
      const matchesDate = filters.departureDate === '' || flight.OpeningTime.startsWith(filters.departureDate);

      return matchesSource && matchesDestination && matchesMinPrice && matchesMaxPrice && matchesDate;
    });

    setFilteredFlights(filtered);
  };

  return (
    <ListPageContainer>
      <ListContainer>
        <Wrapper>
          <Filter onSearch={handleSearch} />
          {filteredFlights.map(item => (
            <Card key={item.id} item={item} />
          ))}
        </Wrapper>
      </ListContainer>
    </ListPageContainer>
  );
};

// Styled components
const ListPageContainer = styled.div`
  display: flex;
  height: 100%;
`;

const ListContainer = styled.div`
  flex: 3;
  height: 100%;
`;

const Wrapper = styled.div`
  height: 100%;
  padding-right: 50px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  overflow-y: scroll;
  padding-bottom: 50px;
`;

export default Search;
