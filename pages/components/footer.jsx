import styled from 'styled-components';
import { Twitter, LinkedIn, ContactMail } from "@material-ui/icons";
import { IconButton, Button } from "@material-ui/core";
import { useState } from 'react';
import Link from 'next/link';
import Form from './form';
const Footer = () => {
    const [ContactForm, setFrom] = useState([<div></div>]);
    const contactForm = () => {
        const form = (
            <Form id='form' />
        );
        setFrom([...ContactForm, form]);
        if (document != null) {
            document.body.style.overflow = 'hidden';
        }
    }
    return (
        <Container>
            <Background />
            <TitleBox>
                <Title>dosuku</Title>
                <SubTitle>Find me on</SubTitle>
                <IconBox>
                    <Link href='https://twitter.com/RaghavG54140751'>
                        <TweetButton aria-label="tweet">
                            <Twitter />
                        </TweetButton>
                    </Link>
                    <Link href='https://www.linkedin.com/in/raghav-gupta-4a63341b5/'>
                        <LinkedButton aria-label="linkedin">
                            <LinkedIn />
                        </LinkedButton>
                    </Link>
                    <ContactButton aria-label='Contact_me' title='Contact me' onClick={contactForm}>
                        <ContactMail />
                    </ContactButton>
                </IconBox>
                <Paragraph>
                    Dosuku is an open source Sudoku API made with &#129505; by Raghav Gupta.
                </Paragraph>
            </TitleBox>
            {ContactForm.map((val, idx) => (
                <div key={idx}>
                    {val}
                </div>
            ))}
        </Container>
    )
}
const Container = styled.footer`
    padding-top: 8rem;
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

const SubTitle = styled.h3`
    position: absolute;
    top: 25%;
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
        :hover {
            color: orange;
        }
    }
`;

const LinkedButton = styled(TweetButton)``;
const ContactButton = styled(TweetButton)`
`;



export default Footer;
