import React from "react";
import { Container } from "./mcStyles";

type Props = {};

type Movie = {
  title: string;
  link: string;
  poster: string;
  genre: string;
};

type Movies = [Movie];

const movies = [
  {
    title: "James",
    genre: "Action/Thriller",
    poster:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTUlICAyMGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312373-pbuugrzltv-portrait.jpg",
    link: "https://in.bookmyshow.com/bengaluru/movies/james/ET00312373",
  },

  {
    title: "James",
    genre: "Action/Thriller",
    poster:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTUlICAyMGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312373-pbuugrzltv-portrait.jpg",
    link: "https://in.bookmyshow.com/bengaluru/movies/james/ET00312373",
  },
  {
    title: "James",
    genre: "Action/Thriller",
    poster:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTUlICAyMGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312373-pbuugrzltv-portrait.jpg",
    link: "https://in.bookmyshow.com/bengaluru/movies/james/ET00312373",
  },
  {
    title: "James",
    genre: "Action/Thriller",
    poster:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTUlICAyMGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312373-pbuugrzltv-portrait.jpg",
    link: "https://in.bookmyshow.com/bengaluru/movies/james/ET00312373",
  },
  {
    title: "James",
    genre: "Action/Thriller",
    poster:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTUlICAyMGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312373-pbuugrzltv-portrait.jpg",
    link: "https://in.bookmyshow.com/bengaluru/movies/james/ET00312373",
  },
  {
    title: "James",
    genre: "Action/Thriller",
    poster:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTUlICAyMGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312373-pbuugrzltv-portrait.jpg",
    link: "https://in.bookmyshow.com/bengaluru/movies/james/ET00312373",
  },
  {
    title: "James",
    genre: "Action/Thriller",
    poster:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTUlICAyMGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312373-pbuugrzltv-portrait.jpg",
    link: "https://in.bookmyshow.com/bengaluru/movies/james/ET00312373",
  },
  {
    title: "James",
    genre: "Action/Thriller",
    poster:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTUlICAyMGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312373-pbuugrzltv-portrait.jpg",
    link: "https://in.bookmyshow.com/bengaluru/movies/james/ET00312373",
  },
  {
    title: "James",
    genre: "Action/Thriller",
    poster:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTUlICAyMGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00312373-pbuugrzltv-portrait.jpg",
    link: "https://in.bookmyshow.com/bengaluru/movies/james/ET00312373",
  },
];

const Mc = (props: Props) => {
  return (
    <Container>
      <div>
        <div className="outer-wrapper">
          <div className="main-wrapper">
            {/* header */}
            <div className="header">
              <div className="header-cont">
                <div className="header-left">
                  <div className="header-left-div">Recomended Movies</div>
                </div>
                <div>
                  <a href="https://in.bookmyshow.com/explore/movies-bengaluru">
                    <div className="header-right">See All ›</div>
                  </a>
                </div>
              </div>
            </div>

            {/* main */}
            <div className="movie-div">
              <div className="movie-div-div">
                <div className="movies">
                  {/* movie */}
                  {movies.map((movie) => (
                    <div>
                      <a className="movie-anchor" href={movie.link}>
                        <div>
                          <div className="movie-inner-1"></div>
                          <div className="movie-inner-2">
                            <div>
                              <img
                                src={movie.poster}
                                alt={movie.title}
                                width="100%"
                                height="100%"
                              />
                            </div>
                          </div>
                          <div className="movie-inner-3">
                            <div>
                              <div>{movie.title}</div>
                            </div>
                            <div>
                              <div>{movie.genre}</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export { Mc };
