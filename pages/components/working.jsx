import styled from 'styled-components';

const Working = ({ id }) => {
    return (
        <Container id={id}>
            <Background />
            <Title>Working</Title>
        </Container>
    )
}

const Container = styled.div`
    padding-top: 6rem;
    padding-bottom: 6rem;
    height: 55rem;
    position: relative;
    color: #fff;
    transition: all .25s ease-in-out;
`;

const Background = styled.div`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg,#0e5358,#e5b0a1);
    transform: skewY(5deg);
    box-shadow: 0 0 50px rgb(60 117 162 / 40%);
`;
const Title = styled.h1`
    position: absolute;
    left:0;
    right:0;
    text-align: center;
    font-weight: 400;
    font-size: 3rem;
    @media(max-width:550px) {
    font-size: 2.5rem;
    }
    @media(max-width:400px) {
        font-size: 2rem;
    }
`;

export default Working;
