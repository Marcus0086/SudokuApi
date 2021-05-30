import Head from "next/head";
import Link from "next/link";
import styled, { keyframes } from 'styled-components';
import { IconButton, Button } from "@material-ui/core"
import { GitHub } from "@material-ui/icons";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import GetStarted from "./getStarted";
import { useState, useEffect } from "react";
import Working from "./working";
import About from "./about";
import Footer from "./footer";
import { useRouter } from 'next/router';

export default function Home({ grid }) {
  const [_document, setDocument] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [valarr, setGrid] = useState([]);
  const router = useRouter();
  const gridarr = [];
  useEffect(() => {
    setLoading(true);
    setDocument(document);
    if (grid !== undefined && grid.value !== undefined) {
      grid.value.map((val, idx) => {
        const valarr = [];
        val.map((val2, idx2) => {
          valarr.push(idx2 === 2 || idx2 === 5 ? "  " + val2 + "  " + "|" : "  " + val2 + "  ");
        })
        gridarr.push(idx === 3 || idx === 6 ? '---------------------------------------------\n\n' + valarr.join("") + "\n\n" : valarr.join("") + '\n\n');
      });
      setGrid(gridarr);
      setTimeout(() => {
        setLoading(false);
      }, 250);
    }
  }, [grid]);

  const getToDiv = id => {
    if (_document != null) {
      const element = _document.getElementById(id);
      if (element != null) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  const getNewBoard = () => {
    setTimeout(() => {
      router.replace(router.asPath);
      setLoading(true);
    }, 0);
  }


  return (
    <div>
      <Container>
        <Head>
          <title>
            Dosuku Home Page
          </title>
        </Head>
        <Background />
        <Navbar>
          <h3 onClick={() => getToDiv('start')}>Get Started</h3>
          <h3 onClick={() => getToDiv('working')}>Working</h3>
          <h3 onClick={() => getToDiv('about')}>About</h3>
          <Link href="https://github.com/Marcus0086">
            <IconButton aria-label='gitbutton'>
              <GitHubIcon />
            </IconButton>
          </Link>
        </Navbar>
        <TitleBox>
          <Title>
            数 dosuku 独
          </Title>
          <SubTitle>
            A Sudoku Api made in <a href="https://graphql.org/">graphql</a>
            <a href="https://graphql.org/">
              <GraphQlLogo id='logo' src='/gql.svg' />
            </a>
          </SubTitle>
          <BoardBox>
            {isLoading ?
              <NewBoard>
                <code>
                  {[...Array(9).keys()].map((val, idx) => (
                    <Row key={idx} width={idx === 0 ? '1.35rem' : idx * 2.35 + 'rem'} />
                  ))}
                </code>
              </NewBoard>
              : <NewBoard>
                <code>
                  {valarr ? valarr.map((val, idx) => (
                    <div key={idx}>
                      {val}
                    </div>
                  )) : ''}
                </code>
              </NewBoard>}
          </BoardBox>
          <GetNewBoard onClick={getNewBoard} variant='outlined'>Get new board</GetNewBoard>
          <DownButton onClick={() => getToDiv('start')} aria-label="donwbutton">
            <DownKey />
          </DownButton>
        </TitleBox>
      </Container>
      <GetStarted id={'start'} />
      <Working id={'working'} />
      <About id={'about'} />
      <Footer id={'footer'} />
    </div>
  );
}

const linearGradient = 'linear-gradient(135deg,#0e5358,#e5b0a1)'
const Container = styled.div`
  height: 56rem;
  position: relative;
  color: #fff;
  font-size: .9rem;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  transition: all .25s ease-in-out;
  @media(max-width:800px) {
    height: 50rem;
  }
  @media(max-width:650px) {
    height: 30rem;
  }
  @media(max-width:550px) {
    font-size: .8rem;
  }
  @media(max-width:400px) {
    font-size:.7rem;
  }
`;

const Background = styled.div`
  position: absolute;
  top: -10vh;
  width: 100%;
  height: calc(100% + 10vh);
  background: ${linearGradient};
  transform: skewY(5deg);
  box-shadow: 0 0 50px rgb(60 117 162 / 40%);
`;

const Navbar = styled.header`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: .25rem;
  h3 {
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    padding: .5rem;
    margin-left: .5rem;
    margin-right: .5rem;
    font-weight: 400;
    text-decoration: none;
    color: white;
    :hover {
      text-decoration: underline
    }
  }
  @media(max-width: 650px) {
    right:0;
    left:0;
    text-align: center;
  }
`;

const GitHubIcon = styled(GitHub)`
  && {
    color: white;
  }
`;
const TitleBox = styled.div`
  position: relative;
  display: flex;
  h1, h3 {
  flex:1;
  position: absolute;
  font-weight: 100;
  left:0;
  right:0;
  text-align: center;
  }
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  top: 6rem;
  font-size: 4rem;
  @media(max-width:550px) {
    font-size:3.5rem;
  }
  @media(max-width:400px) {
    font-size:3rem;
  }
`;

const SubTitle = styled.h3`
  top: 14rem;
  font-size: 2.5rem;
  a {
    text-decoration: none;
  }
  @media(max-width:550px) {
    font-size: 2rem;
  }
  @media(max-width:450px) {
    font-size: 1.5rem;
  }
`;

const GraphQlLogo = styled.svg`
  background-image: url('${props => props.src}');
  position: absolute;
  margin-left: 1rem;
  bottom:0;
  width: 2.5rem;
  height: 2.5rem;
  @media (max-width:800px) {
    display: none;
  }
`;
const DownButton = styled(IconButton)`
  position: absolute;
  top: 52rem;
  @media (max-width:800px) {
    top: 46rem;
  }
  @media (max-width:650px) {
    top: 25rem;
  }
  
`;

const DownKey = styled(KeyboardArrowDownIcon)`
  color: white;
`;

const BoardBox = styled.div`
  position: absolute;
  top: 22.5rem;
  @media (max-width:650px) {
    display: none;
  }
`;
const NewBoard = styled.pre`
    vertical-align: middle;
    width: auto;
    padding: 1.25rem;
    background: hsla(0,0%,4%,.8);
    font-family: Courier;
    color: white;
    border-radius: 1.5rem;
    border: 2px solid orange;
    text-align: center;
    word-break: break-all;
    font-size: .8rem;
    transition: all .25s ease-in-out;
    @media (max-width:800px) {
      font-size: .6rem;
    }
    :focus {
      transform: scale(0.99);
      transition: all .25s ease-in-out;
    }
`;
const Load = keyframes`
  0% {
    background-color: grey;
  }
  90% {
    background: hsla(0,0%,4%,.8);
  }
    
`;

const Row = styled.div`
  width: ${props => props.width};
  background-color: grey;
  height: 1.2rem;
  margin: 1rem;
  border-radius: .25rem;
  @media (max-width:800px) {
    height: 1.2rem;
    margin: .5rem;
  }
  animation: ${Load} .25s linear infinite;
`;

const GetNewBoard = styled(Button)`
  &&& {
    position: absolute;
    top: 48rem;
    color: white;
    border-radius: 1.5rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    border: 1px solid white;
    @media(max-width:800px) {
      top: 42rem;
    }
    @media(max-width:650px) {
      display: none;
    }
  }
`;