import styled from 'styled-components';
import { IconButton, Button, TextField } from "@material-ui/core"
import { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as EmailValidator from 'email-validator';

const Form = ({ id }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isEmptyName, setIsEmptyname] = useState(false);
    const [isEmptyEmail, setIsEmptyemail] = useState(false);
    const [isEmptyMessage, setIsEmptymessage] = useState(false);
    const [nameText, setNameText] = useState('');
    const [emailText, setEmailText] = useState('');
    const [messageText, setMessageText] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const sendMail = async () => {

        if (name.length === 0 && email.length === 0 && message.length === 0) {
            setIsEmptyname(true);
            setIsEmptyemail(true);
            setIsEmptymessage(true);
            setNameText('Name is required');
            setEmailText('Email is required');
            setMessageText('Message is required');

        } else if (name.length === 0 || email.length === 0 || message.length === 0) {
            if (name.length === 0) {
                setIsEmptyname(true);
                setNameText('Name is required');
            } else if (email.length === 0) {
                setIsEmptyemail(true);
                setEmailText('Email is required');
            } else if (message.length === 0) {
                setIsEmptymessage(true);
                setMessageText('Message is required');

            }
        } else {
            if (EmailValidator.validate(email)) {
                setIsLoading(true);
                const data = { name: name, email: email, message: message };
                await fetch('/api/mail', {
                    method: 'POST',
                    body: JSON.stringify(data),
                }).then((resp) => {
                    setIsSent(true);
                    setIsLoading(false);
                });
                setIsDisabled(true);
            } else {
                setIsEmptyemail(true);
                setEmailText('Email is not valid');
            }
        }
    }
    const getName = val => {
        setName(val);
        setIsEmptyname(false);
        setNameText('');
    }
    const getEmail = val => {
        setEmail(val);
        setIsEmptyemail(false);
        setEmailText('');
    }
    const getMessage = val => {
        setMessage(val);
        setIsEmptymessage(false);
        setMessageText('');
    }
    const closeForm = () => {
        if (document != null) {
            const form = document.getElementById('form');
            form.remove();
            document.body.style.overflow = 'visible';
        }
    }
    return (
        <FormContainer id={id} >
            <CardContainer>
                <CloseButton onClick={closeForm}>
                    <CloseIcon />
                </CloseButton>
                <Title>Get in Touch!</Title>
                <ContactForm>
                    <NameInput required id='standard-required' error={isEmptyName ? true : false} type='text' label='Your Name'
                        defaultValue={name} onChange={(e) => getName(e.target.value)} helperText={nameText} /><br />
                    <EmailInput required id='standard-required' error={isEmptyEmail ? true : false} type='email' label='Your Email'
                        defaultValue={email} onChange={(e) => getEmail(e.target.value)} helperText={emailText} /><br />
                    <MessageInput required id='standard-required' error={isEmptyMessage ? true : false} type='text' label='Your Message'
                        defaultValue={message} onChange={(e) => getMessage(e.target.value)} helperText={messageText} /><br />
                    <SendButton onClick={sendMail} variant='outlined' color={isSent ? 'primary' : 'secondary'}
                        disabled={isDisabled} aria-label='message-send'>{isLoading ? <Loading /> : <DoneIcon />}</SendButton>
                </ContactForm>
            </CardContainer>
        </FormContainer >
    )
}
const FormContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;    
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(6px);
    transition: all .25sec ease-in-out;
`;
const CardContainer = styled.div`
    background: white;
    padding: 1rem;
    width: 35%;
    height: 35rem;
    position: relative;
    color: #303030;
    font-weight: 500;
    border-radius: 1.5rem;
    border: 1px solid orange;
    transition: all .25s ease-in-out;
    text-align: center;
    z-index: 1;
    align-items: center;
    justify-content: center;
    @media(max-width:1200px) {
        width: 60%;

    }
    @media(max-width:800px) {
        width: 80%
    }
    @media(max-width:550px) {
        width: 95%;
        height: 30rem;
        font-weight: 300;
    }

`;
const Title = styled.h1`
    @media(max-width:550px) {
        font-size: 1.75rem;
    }
`;
const ContactForm = styled.form``;
const NameInput = styled(TextField)`
    && {
        width: 80%;
        height: 2.5rem;
        font-size: 1rem;
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;
        padding: .5rem;
        @media(max-width:550px) {
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;
            font-size: .8rem;
        }
    }
`;
const EmailInput = styled(NameInput)`
`;
const MessageInput = styled(NameInput)`
`;
const SendButton = styled(Button)`
    &&& {
        color: ${props => props.color === 'primary' ? 'green' : 'grey'};
        border-radius: 1.5rem;
        padding-left: 2.5rem;
        padding-right: 2.5rem;
        border: 1px solid grey;
        margin: 1rem;
  }
`;
const CloseButton = styled(IconButton)`
    && {
        position: absolute;
        top: 0;
        right: 0;
        margin: 1.5rem;
        @media(max-width:550px) {
            margin: 1rem;
        }
    }
`;

const Loading = styled(CircularProgress)`
`;
export default Form;
