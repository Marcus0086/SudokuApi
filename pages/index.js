import Home from "./components/homePage";
import styled from "styled-components";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useState, useEffect } from "react";
import { IconButton } from "@material-ui/core";

const Main = ({ grid, difficulty, message }) => {
  const [_document, setDocument] = useState(null);
  useEffect(() => {
    setDocument(document);
    if (_document != null) {
      window.onscroll = () => TopOnOff();
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

  const ToTop = () => {
    if (_document != null) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  return (
    <div>
      <Home grid={grid} difficulty={difficulty} message={message} />
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


export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:3000/api/dosuku', { method: 'GET' });
  const data = await res.json();
  if (!data) {
    return {
      notFound: true
    };
  }
  const { grid, difficulty, message } = data;
  return {
    props: {
      grid: grid,
      difficulty: difficulty,
      message: message
    }
  };
}