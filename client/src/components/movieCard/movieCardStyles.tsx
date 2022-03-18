import styled from "styled-components";

const Container = styled.div`
  display: block;
  width: 100%;

  @media (min-width: 1024px) {
    .movies_cont {
      margin: 0px auto;
      width: 92vw;
      max-width: 1240px;
    }
  }
  .movies_cont {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
  }

  .movies_wrapper {
    scroll-behavior: smooth;
    transition: transform 1000ms ease 0s;
    overscroll-behavior-x: contain;
    margin: 16px 0px 0px;
    padding: 0px 16px;
    display: grid;
    grid-template-columns: repeat(10, calc((100% - 16px) / 2.75));
    grid-template-rows: repeat(1, 1fr);
    grid-auto-flow: column;
    gap: 0px 8px;
    overflow: scroll hidden;
    transform: initial;
  }
  .movie_card {
    display: flex;
    position: relative;
    -webkit-box-align: center;
    align-items: center;
    overflow: hidden;
    transition: height 0.3s ease-in 0s, width 0.3s ease-in 0s;
    width: 100%;
    height: calc(348.035px);
    max-height: unset;
    margin: 0px;
    border-radius: 4px;
  }
  .movie_card > img {
    object-fit: cover;
    transition: visibility 0s ease 0s, opacity 0.3s linear 0s;
    opacity: 1;
    visibility: visible;
    max-width: 100%;
  }
  .movie_title {
    margin: 0px 0px 2px;
    word-break: break-word;
    color: rgb(34, 34, 34);
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.43;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .stats {
  }

  .see-all {
    margin: 0px;
    word-break: break-word;
    color: rgb(220, 53, 88);
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.43;
    cursor: pointer;
    margin-top: 8px;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

export { Container };
