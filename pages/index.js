import Home from "./components/homePage";
import styled from "styled-components";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useState, useEffect } from "react";
import { IconButton } from "@material-ui/core";
import Sudoku from './api/resolvers/sudokusolver';
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