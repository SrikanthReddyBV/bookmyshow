import React from "react";
import { Container } from "./movieCardStyles";

const MovieCard = ({ movie }: any) => {
  return (
    <Container>
      <a href={movie.url}>
        <div className="movie_card">
          <img alt="movie" src={movie.image_url} />
          <div>
            {/* <div className="stats">95% 12K Votes</div> */}
          </div>
        </div>
        <div className="movie_title">{movie.title}</div>
      </a>
    </Container>
  );
};

export { MovieCard };
