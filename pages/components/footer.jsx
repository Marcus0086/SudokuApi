import styled from 'styled-components';
import { GitHub, Twitter, LinkedIn } from "@material-ui/icons";
import { IconButton, Button } from "@material-ui/core";

const Footer = () => {
    return (
        <Container>
            <Background />
            <TitleBox>
                <Title>dosuku</Title>
                <IconBox>
                    <TweetButton>
                        <Twitter />
                    </TweetButton>
                    <GitButton>
                        <GitHub />
                    </GitButton>
                    <LinkedButton>
                        <LinkedIn />
                    </LinkedButton>
                </IconBox>
                <Paragraph>
                    Dosuku is an open source Sudoku API made in Graphql by Raghav Gupta.
                </Paragraph>
            </TitleBox>
        </Container>
    )
}
const Container = styled.footer`
    padding-top: 6rem;
    padding-bottom: 6rem;
    position: relative;
    color: #fff;
    font-weight: 500;
    transition: all .25s ease-in-out;
`;

const Background = styled.div`
    position: absolute;
    top: -15%;
    left: 0;
    width: 100%;
    height: calc(100% + 15%);
    background: linear-gradient(135deg,#0e5358,#e5b0a1);
    box-shadow: 0 0 50px rgb(60 117 162 / 40%);
`;

const TitleBox = styled.div`
    width: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    word-wrap: break-word;
    font-weight: 400;
`;
const IconBox = styled(TitleBox)`
    flex-direction: row;
    padding: .5rem;
`;
const Title = styled.h1`
    top: 0;
    position: absolute;
    display: inline;
`;
const Paragraph = styled.p`
    position: absolute;
    top: 65%;
    margin: 1rem;
    
`;
const TweetButton = styled(IconButton)`
    && {
        color: white;
        margin: .5rem;
    }
`;

const GitButton = styled(TweetButton)``;
const LinkedButton = styled(TweetButton)``;
export default Footer
