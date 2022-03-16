import styled from "styled-components";

const Container = styled.header`
  display: block;
  width: 100%;

  .top-nav {
    width: 100%;
    height: 64px;
    background: rgb(51, 53, 69);
    padding: 0px;
  }

  .bottom-nav {
    padding: 0px;
    width: 100%;
    background: rgb(31, 37, 51);
  }

  .top-nav > div {
    max-width: 1240px;
    width: 92%;
    margin: 0px auto;
    height: 100%;
  }

  .top-nav > div > div {
    display: flex;
    height: 100%;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }

  .top-nav > div > div > div {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    -webkit-box-align: center;
    align-items: center;
  }

  .logo-search {
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    height: 100%;
    width: 75%;
  }

  .location-sign {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    justify-content: flex-end;
    height: 100%;
  }

  .logo {
    width: 134px;
    min-width: 134px;
    vertical-align: middle;
  }

  .logo > a {
    display: flex;
    margin-right: 16px;
    max-width: 115px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    cursor: pointer;
  }

  .logo > a > img {
    overflow: hidden;
  }

  .search {
    width: 100%;
    overflow: hidden;
  }

  .search > div {
    display: flex;
    flex-flow: row nowrap;
    -webkit-box-pack: start;
    justify-content: flex-start;
    padding: 0px;
    margin: 0px;
    opacity: 1;
    cursor: text;
    width: calc(100% - 134px);
    max-width: 549px;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(238, 238, 238);
    border-radius: 4px;
    -webkit-box-align: center;
    align-items: center;
  }

  .search > div > span:nth-of-type(1) {
    width: 39px;
    height: 34px;
    -webkit-box-align: center;
    align-items: center;

    img {
      width: 13px;
      height: 13px;
      margin: 10px 12px;
    }
  }

  .search > div > span:nth-of-type(2) {
    width: calc(100% - 50px);
    border: none;
    background: white;
    box-shadow: none;
    font-size: 14px;
    color: rgb(153, 153, 153);
    outline: 0px;
    max-width: 500px;
  }

  .location {
    margin-right: 24px;
    display: flex;
    flex-direction: row;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    cursor: pointer;
  }

  .sign {
    display: flex;
    flex-direction: row;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    margin-right: 0px;
  }

  .location > span {
    margin-left: 0px;
    max-width: 90px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    font-size: 14px;
    font-weight: 400;
    position: relative;
    color: rgb(204, 204, 204);
    padding-right: 15px;
    line-height: 19px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

    &:hover {
      color: rgb(255, 255, 255);
    }
  }

  .location > span::after {
    display: block;
    content: "";
    position: absolute;
    inset: -2px 0px 0px;
    margin: auto 0px auto auto;
    width: 0px;
    height: 0px;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid rgb(255, 255, 255);
  }

  .sign > div:nth-of-type(1) {
    color: rgb(255, 255, 255);
    background-color: rgb(248, 68, 100);
    font-size: 12px;
    height: 25px;
    line-height: 25px;
    width: 67px;
    text-align: center;
    border-radius: 4px;
    border: 1px solid rgb(248, 68, 100);
    display: block;
  }

  .sign > div:nth-of-type(2) {
    margin-left: 24px;

    img {
      overflow: hidden;
    }
  }

  .bottom-nav > div {
    max-width: 1240px;
    width: 92%;
    margin: 0px auto;
    height: 100%;
  }

  .bottom-nav > div > div {
    display: flex;
    height: 100%;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }

  .left-links {
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    height: 100%;
    width: 75%;
  }

  .right-links {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    justify-content: flex-end;
    height: 100%;
  }

  .left-links > div {
    display: flex;
    height: 40px;
    width: 100%;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    background: rgb(34, 37, 57);
    overflow-x: auto;
    white-space: nowrap;
  }

  .right-links > div {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    justify-content: flex-end;
    height: 100%;
  }

  .left-links > div > a {
    font-size: 14px;
    cursor: pointer;
    padding: 0px 10px;
    position: relative;
    text-decoration: none;
    font-weight: 400;
    color: rgb(204, 204, 204);
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

    &:hover {
      color: rgb(255, 255, 255);
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    }

    &:nth-of-type(1) {
      @media (min-width: 768px) {
        padding-left: 0px;
      }
    }
  }

  .right-links > div {
    display: flex;
    height: 40px;
    width: 100%;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    background: rgb(34, 37, 57);
    overflow-x: auto;
    white-space: nowrap;
  }

  .right-links > div > a:nth-of-type(1) {
    position: relative;
  }

  .right-links > div > a:nth-of-type(4) {
    padding-right: 0px;
  }

  .right-links > div > a {
    font-size: 12px;
    cursor: pointer;
    padding: 0px 12px;
    text-decoration: none;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    font-weight: 400;
    color: rgb(255, 255, 255);
  }

  .new {
    font-size: 8px;
    color: rgb(231, 54, 77);
    font-weight: 500;
    position: absolute;
    right: 0px;
    bottom: 90%;
  }
`;

export { Container };
