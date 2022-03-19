import styled from "styled-components";

const Container = styled.div`
  .div {
    background: #0000;
    border: 0;
    font-size: 100%;
    font-weight: 400;
    margin: 0;
    padding: 0;
    vertical-align: initial;
  }

  .outer-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: unset;
  }
  @media (min-width: 1024px) {
    .main-wrapper {
      margin: 0px auto;
      width: 92vw;
      max-width: 1240px;
    }

    .movie-div-div {
      overflow: hidden;
    }

    .movies {
      overflow: visible;
      transform: translateX(0px);
    }
    .movie-inner-2 {
      height: calc(378.077px);
      max-height: calc(378.077px);
    }
  }

  .main-wrapper {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
  }

  .header {
    display: flex;
    flex-direction: column;
    margin: 0px 0px 8px;
    padding: 0px;
  }
  .movie-div {
    position: relative;
    cursor: pointer;
  }
  .movie-div-div {
    overflow: initial;
  }

  .movies {
    scroll-behavior: smooth;
    transition: transform 1000ms ease 0s;
    overscroll-behavior-x: contain;
    padding: 0px;
    display: grid;
    grid-template-columns: repeat(10, calc((100% - 128px) / 5));
    grid-template-rows: repeat(1, 1fr);
    grid-auto-flow: column;
    gap: 8px 32px;
    overflow: scroll hidden;
    transform: initial;
  }

  .header-cont {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .header-left {
    display: flex;
    margin: 0px auto 0px 0px;
  }
  .header-left-div {
    word-break: break-word;
    color: rgb(51, 51, 51);
    font-family: Roboto;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.17;
  }
  .header-right {
    margin: 0px;
    word-break: break-word;
    color: rgb(220, 53, 88);
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.43;
  }

  .movie-anchor {
    text-decoration: none;
    display: block;
  }

  .movie-anchor > div {
    position: relative;
    height: 100%;
  }
  .movie-inner-1 {
    display: flex;
    position: absolute;
    z-index: 2;
    top: 4px;
    right: 4px;
  }

  .movie-inner-2 {
    display: flex;
    position: relative;
    -webkit-box-align: center;
    align-items: center;
    overflow: hidden;
    transition: height 0.3s ease-in 0s, width 0.3s ease-in 0s;
    width: 100%;
    height: calc(378.077px);
    max-height: unset;
    margin: 0px 0px 8px;
    border-radius: 8px;
  }
  .movie-inner-2 > div {
    display: flex;
    height: 100%;
    width: 100%;
  }

  .movie-inner-2 img {
    object-fit: cover;
    transition: visibility 0s ease 0s, opacity 0.3s linear 0s;
    opacity: 1;
    visibility: visible;
    max-width: 100%;
  }
  .movie-inner-3 {
    display: flex;
    flex-direction: column;
    margin: 4px 0px 0px;
    padding: 4px 0px 0px;
  }

  .movie-inner-3 > div {
    display: flex;
    flex-wrap: wrap;
    -webkit-box-align: center;
    align-items: center;
  }
  .movie-inner-3 > div:nth-child(1) > div {
    margin: 0px 0px 4px;
    word-break: break-word;
    color: rgb(34, 34, 34);
    font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .movie-inner-3 > div:nth-child(2) > div {
    margin: 0px;
    word-break: break-word;
    color: rgb(102, 102, 102);
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export { Container };
