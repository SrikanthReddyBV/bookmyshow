import { Container } from "./mcStyles";

type Props = {
  movies: { title: string; genre: string; poster: string; link: string }[];
  header: string;
};

const Mc = ({ movies, header }: Props) => {
  return (
    <Container>
      <div>
        <div className="outer-wrapper">
          <div className="main-wrapper">
            {/* header */}
            <div className="header">
              <div className="header-cont">
                <div className="header-left">
                  <div className="header-left-div">{header}</div>
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
