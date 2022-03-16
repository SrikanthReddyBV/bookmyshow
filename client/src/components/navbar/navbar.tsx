import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./navbarStyles";
// @ts-ignore
import Logo from "../../assets/images/logo.svg";
// @ts-ignore
import SearchIcon from "../../assets/images/search.svg";
// @ts-ignore
import Hamburger from "../../assets/images/hamburger.svg";

const Navbar = () => {
  return (
    <Container>
      <div className="top-nav">
        <div>
          <div>
            <div>
              <div className="logo-search">
                <div className="logo">
                  <Link to="/">
                    <img src={Logo} alt="Book My Show Logo" />
                  </Link>
                </div>
                <div className="search">
                  <div>
                    <span>
                      <img src={SearchIcon} alt="Search Icon" />
                    </span>
                    <span>
                      Search for Movies, Events, Plays, Sports and Activities
                    </span>
                  </div>
                </div>
              </div>
              <div className="location-sign">
                <div className="location">
                  <span>Bengaluru</span>
                </div>
                <div className="sign">
                  <div>Sign in</div>
                  <div>
                    <img src={Hamburger} alt="Hamburger icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-nav">
        <div>
          <div>
            <div className="left-links">
              <div>
                <Link to="/explore/movies">Movies</Link>
                <Link to="/explore/stream">
                  Stream <div className="new">NEW</div>
                </Link>
                <Link to="/explore/events">Events</Link>
                <Link to="/explore/plays">Plays</Link>
                <Link to="/explore/sports">Sports</Link>
                <Link to="/explore/activities">Activities</Link>
                <Link to="/explore/buzz">Buzz</Link>
              </div>
            </div>
            <div className="right-links">
              <div>
                <Link to="/explore/stream">
                  ListYourShow <div className="new">NEW</div>
                </Link>
                <Link to="/explore/events">Corporates</Link>
                <Link to="/explore/events">Offers</Link>
                <Link to="/explore/events">Gift Cards</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export { Navbar };
