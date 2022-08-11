import React from "react";
import styled from "styled-components";
import CardSlider from "./CardSlider";

export default function Slider({ movies }) {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };

  return (
    <Container>
      <CardSlider data={getMoviesFromRange(0, 5)} title="Trending Now" />
      <CardSlider data={getMoviesFromRange(5, 10)} title="New Releases" />
      <CardSlider
        data={getMoviesFromRange(10, 20)}
        title="Blockbuster Movies"
      />
      <CardSlider
        data={getMoviesFromRange(20, 30)}
        title="Popular on Netflix"
      />
      <CardSlider data={getMoviesFromRange(30, 40)} title="Action Movies" />
      <CardSlider data={getMoviesFromRange(40, 50)} title="Epics" />
    </Container>
  );
}
// getting all movies using range 

const Container = styled.div``;
