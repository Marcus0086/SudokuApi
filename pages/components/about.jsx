import { Container, TextBox, Title, Paragraph, InfoBox, Info, InfoTitle, InfoSubTitle, LogoBox, SetupLogo } from './getStarted';
import styled from 'styled-components';
const About = ({ id }) => {
    return (
        <Container id={id}>
            <TextBox>
                <Title>
                    About
                </Title>
                <Paragraph>
                    Dosuku is an open source API made solely for sudoku games and puzzles.<br />
                    Make games and puzzle your friends.<br />
                    Hope it will be of any help.
                </Paragraph>
            </TextBox>
            <Box>
                <Info>
                    <InfoTitle>Who's using this API?</InfoTitle>
                    <InfoSubTitle>Doskuku is being used in a game made by AdditcoX "Puzzle.It"</InfoSubTitle>
                </Info>
                <LogoBox>
                    <Logo src='/logo.png' loading='lazy' alt='Logo' />
                </LogoBox>
            </Box>
        </Container>
    )
}

const Box = styled(InfoBox)`
    flex-wrap: wrap
`;
const Logo = styled.img`
    background-image: url('${props => props.src}');
    width: 35%;
    height: 35%;
    border: 4px solid orange;
    border-radius: 8%;
    background-size: cover;
    @media(max-width:550px) {
        width: 50%;
        height: 50%;
    }
`;
export default About;
