import styled from 'styled-components';

const GetStarted = ({ id }) => {
    const query1 = "https://sudoku-api.vercel.app/api/dosuku?query={newboard(limit:1){grids{value}}}";
    return (
        <Container id={id}>
            <TextBox>
                <Title>Get Started</Title>
                <Paragraph>
                    Create Sudoku grid with ease.<br />
                    Our API not only provides you with a grid <br />
                    but it also provides the unique solution of that grid.
                </Paragraph>
            </TextBox>
            <InfoBox>
                <Info>
                    <InfoTitle>No setup required</InfoTitle>
                    <InfoP>
                        You don't have to install any library or do any setup in order<br />
                        to get a new sudoku board. Just make a GET request to<br />
                        API: https://sudoku-api.vercel.app/api/dosuku
                    </InfoP>
                    <InfoSubTitle>Make a GET request using following:</InfoSubTitle>
                    <ul>
                        <li>
                            <Code width='auto'>
                                <Line>
                                    curl -v https://sudoku-api.vercel.app/api/dosuku
                                </Line>
                            </Code>
                        </li>
                    </ul>
                    <InfoSubTitle>Direct access through URL bar</InfoSubTitle>
                    <ul>
                        <li>
                            <Code width='auto'>
                                <Line>
                                    https://sudoku-api.vercel.app/api/dosuku
                                </Line>
                            </Code>
                        </li>
                    </ul>
                    <InfoSubTitle>Use a client</InfoSubTitle>
                    <ul>
                        <li>
                            <Code width='auto'>
                                <Line>
                                    Request from a client like Postman or Thunder Client.
                                </Line>
                            </Code>
                        </li>
                    </ul>
                </Info>
                <LogoBox>
                    <SetupLogo src='/features.svg' loading='lazy' alt='installlogo' />
                </LogoBox>
            </InfoBox>
            <InfoBoxo>
                <LogoBox>
                    <SetupLogo src='/query.svg' loading='lazy' alt='nodeslogo' />
                </LogoBox>
                <Info>
                    <InfoTitle>Query various parameters</InfoTitle>
                    <InfoP>
                        The API is made using <a href="https://graphql.org/">graphql</a>.<br />
                        So you can just query a specified parameter.<br />
                        You can ask for what you need and get excactly that.
                    </InfoP>
                    <InfoSubTitle>Send a request to get a new grid only</InfoSubTitle>
                    <ul>
                        <li>
                            <Code width='auto'>
                                <Line>{query1}</Line>
                            </Code>
                        </li>
                    </ul>
                    <InfoSubTitle>Send a request to get the solution of grid only</InfoSubTitle>
                    <ul>
                        <li>
                            <Code width='auto'>
                                <Line>{'https://sudoku-api.vercel.app/api/dosuku?query={newboard(limit:1){grids{solution}}}'}</Line>
                            </Code>
                        </li>
                    </ul>
                    <InfoSubTitle>Send a request to get the difficulty</InfoSubTitle>
                    <ul>
                        <li>
                            <Code width='auto'>
                                <Line>{'https://sudoku-api.vercel.app/api/dosuku?query={newboard(limit:1){grids{difficulty}}}'}</Line>
                            </Code>
                        </li>
                    </ul>
                    <InfoSubTitle>Get Multiple results by changing the limit</InfoSubTitle>
                    <ul>
                        <li>
                            <Code width='auto'>
                                <Line>{'https://sudoku-api.vercel.app/api/dosuku?query={newboard(limit:5){grids{value,solution,difficulty},results,message}}'}</Line>
                            </Code>
                        </li>
                    </ul>
                </Info>
            </InfoBoxo>
        </Container>
    )
}

export const Container = styled.section`
    padding-top: 6rem;
    padding-bottom: 5rem;
    text-align: center;
    overflow: hidden;
    font-weight: 500;
    color: #303030;
    background-color: #e5f0f1
`;

export const TextBox = styled.div`
    width: auto;
    
`;
export const Title = styled.h1`
    margin-bottom: 4rem;
    font-size: 3rem;
    
`;
export const Paragraph = styled.p`
    display: flex;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    word-wrap: break-word;
    font-size: 1.25rem;
`;

export const InfoBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1rem;
    height: auto;
    margin-top:2.5rem;
    margin-bottom: 2.5rem;
    @media(max-width:550px) {
        font-size: .8rem;
    }
`;

const InfoBoxo = styled(InfoBox)`
    flex-wrap: wrap;
`;
export const Info = styled.div`
    text-align: left;
    h3 {
        font-weight: 400
    }
    @media(max-width:850px) {
        text-align: center
    }
`;
const Code = styled.pre`
    user-select: all;
    vertical-align: baseline;
    border-left: .5rem solid orange;
    margin: 0;
    width: ${props => props.width};
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left:.5rem;
    padding-right:.5rem;
    background: hsla(0,0%,4%,.8);
    font-family: Courier;
    color: white;
    border-radius: .25rem;
    text-align: start;
    word-break: break-all;
    
    @media (max-width:680px) {
        width: auto;
        font-size: .6rem;
    }
    @media(max-width:600px) {
        width: 16rem;
        overflow-x: scroll;
        overflow-y: hidden;
    }
`;

export const InfoTitle = styled.h1`
`;
export const InfoP = styled.p``;
export const InfoSubTitle = styled.h3`
`;
const Line = styled.code`
    margin: auto
`;

export const LogoBox = styled.div`
    padding: 1rem;
    width: 50rem;
`;

export const SetupLogo = styled.img`
    background-image: url('${props => props.src}');
    width: 60%;
    height: 60%;
    background-size: cover;
    @media(max-width:550px) {
        width: 80%;
        height: 80%;
    }
`;
export default GetStarted;
