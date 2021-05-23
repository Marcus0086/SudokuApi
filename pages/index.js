import Home from "./components/homePage";
import styled from "styled-components";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useState, useEffect } from "react";
import { IconButton } from "@material-ui/core";

const Main = () => {
  const [_document, setDocument] = useState(null);
  const [grid, setGrid] = useState([[]]);
  useEffect(() => {
    setDocument(document);
    if (_document != null) {
      window.onscroll = () => TopOnOff();
    }
    setGrid([[]]);
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

  const ToTop = () => {
    if (_document != null) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  return (
    <div>
      <Home grid={grid} />
      <UpButton id="up" onClick={() => ToTop()}>
        <UpArrowKey />
      </UpButton>

    </div>
  )
}
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
