import Home from "./components/homePage";
import styled, { createGlobalStyle } from "styled-components";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useState, useEffect } from "react";
import { IconButton } from "@material-ui/core";
import Sudoku from './api/resolvers/sudokusolver';

const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    text-size-adjust: 100%;
    scroll-behavior: smooth;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    user-select: none;
    background-color:#e5f0f1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ::-webkit-scrollbar {
      width: .5em;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #d6dee1;;
      border-radius: .5rem;
      border: 6px solid transparent;
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: #a8bbbf;
    }
  }

  a {
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }

`;
const Main = (grid) => {
  const [_document, setDocument] = useState(null);

  useEffect(() => {
    setDocument(document);
    if (_document != null) {
      window.onscroll = () => { TopOnOff(); topScrollBar(); }
    }
  }, [_document]);

  const TopOnOff = () => {
    const button = _document.getElementById('up');
    if (button != null) {
      if (_document.body.scrollTop > 20 || _document.documentElement.scrollTop > 20) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    }
  }

  const topScrollBar = () => {
    const winScroll = _document.body.scrollTop || _document.documentElement.scrollTop;
    const height = _document.documentElement.scrollHeight - _document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const topBar = _document.getElementById('upBar');
    if (topBar != null) {
      topBar.style.width = scrolled + "%";
    }
  }

  const ToTop = () => {
    if (_document != null) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  return (
    <div>
      <GlobalStyles />
      <TopBar id='upBar' />
      <Home grid={grid} />
      <UpButton id="up" onClick={() => ToTop()} aria-label="upbutton">
        <UpArrowKey />
      </UpButton>
    </div>
  )
}
const TopBar = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  border-radius: 0rem .5rem .5rem 0rem;
  width: 0%;
  height: .1rem;
  background: #FDC830;
  background: -webkit-linear-gradient(to right,  #FDC830,#F37335); 
  background: linear-gradient(to right,  #FDC830,#F37335); 
`;
const UpButton = styled(IconButton)`
  &&& {
    position: fixed;
    bottom: 0;
    right: 0;
    margin: .5rem;
    cursor: pointer;
  }
`;
const UpArrowKey = styled(KeyboardArrowUpIcon)`
  color: #4b4356;
  
  
`;
export default Main;


export async function getStaticProps(context) {
  const sudoku = new Sudoku();
  sudoku.generate();
  const value = sudoku.grid;
  const grid = { value: value };
  return {
    props: grid
  };
}