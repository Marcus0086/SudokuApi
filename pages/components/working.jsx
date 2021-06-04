import styled from 'styled-components';
import { useState, useEffect } from 'react';
const Working = ({ id }) => {
    const [_document, setDocument] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (document != null) {
            const text = `\n-/ $ const data = await fetch('....url/api/dosuku')\n\n-/ $ console.log(await data.json())\n\n
-/ $ {
        'grid':{
            'value:[                      | 'solution:[
                    [0,8,0,0,0,2,4,0,0],  |            [7,8,9,6,5,2,4,3,1],
                    [0,0,0,0,0,8,0,0,0],  |            [4,3,6,1,9,8,5,7,2],
                    [0,0,0,0,0,0,6,9,0],  |            [5,1,2,7,4,3,6,9,8],
                    [0,0,0,0,0,0,2,0,7],  |            [3,5,1,8,6,9,2,4,7],
                    [0,0,0,0,0,0,0,0,9],  |            [6,4,8,2,7,1,3,5,9], 
                    [2,0,0,4,0,5,0,8,0],  |            [2,9,7,4,3,5,1,8,6],
                    [0,0,0,0,0,6,0,0,0],  |            [9,7,5,3,1,6,8,2,4],
                    [0,6,0,9,2,0,0,0,5],  |            [8,6,3,9,2,4,7,1,5],
                    [0,0,4,0,8,0,0,0,0]   |            [1,2,4,5,8,7,9,6,3]
                    ],                    |            ]
        },
        'difficulty':'Medium',
        'message': 'All Ok'
    }
            `;
            let i = 0;
            const boxCode = document.getElementById('commandText');
            const writetoBox = () => {
                if (i < text.length) {
                    if (text.charAt(i) === 'v') {
                        setLoading(true);
                    }
                    boxCode.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(writetoBox, 10);
                }
            }
            setTimeout(writetoBox, 0);
        }

    }, []);

    useEffect(() => {
        const ntext = `\n                   🔒 https://url...../api/dosuku\n
        {
            "grid": {
                "value": [
                    [
                        0,
                        0,
                        0,
                        2,
                        0,
                        0,
                        0,
                        0,
                        4
                    ],
                    [
                        7,
                        9,
                        0,
                        0,
                        0,
                        8,
                        3,
                        2,
                        0
                    ],
                    [
                        0,
                        1,
                        4,
                        5,
                        6,
                        3,
                        7,
                        0,
                        0
                    ],
                    [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        0,
                        0,
                        0,
                        3,
                        9,
                        0,
                        0,
                        0,
                        0
                    ],
                    [
                        9,
                        6,
                        0,
                        1,
                        0,
                        0,
                        0,
                        4,
                        7
                    ],
                    [
                        0,
                        2,
                        0,
                        8,
                        4,
                        0,
                        0,
                        6,
                        0
                    ],
                    [
                        0,
                        8,
                        9,
                        6,
                        3,
                        0,
                        0,
                        7,
                        0
                    ],
                    [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        8,
                        3
                    ]
                ],
                "solution": [
                    [
                        6,
                        3,
                        8,
                        2,
                        7,
                        9,
                        5,
                        1,
                        4
                    ],
                    [
                        7,
                        9,
                        5,
                        4,
                        1,
                        8,
                        3,
                        2,
                        6
                    ],
                    [
                        2,
                        1,
                        4,
                        5,
                        6,
                        3,
                        7,
                        9,
                        8
                    ],
                    [
                        5,
                        4,
                        1,
                        7,
                        8,
                        6,
                        2,
                        3,
                        9
                    ],
                    [
                        8,
                        7,
                        2,
                        3,
                        9,
                        4,
                        6,
                        5,
                        1
                    ],
                    [
                        9,
                        6,
                        3,
                        1,
                        5,
                        2,
                        8,
                        4,
                        7
                    ],
                    [
                        3,
                        2,
                        7,
                        8,
                        4,
                        1,
                        9,
                        6,
                        5
                    ],
                    [
                        1,
                        8,
                        9,
                        6,
                        3,
                        5,
                        4,
                        7,
                        2
                    ],
                    [
                        4,
                        5,
                        6,
                        9,
                        2,
                        7,
                        1,
                        8,
                        3
                    ]
                ]
            },
            "difficulty": "Medium",
            "message": "All Ok"
        }
        `
        let i = 0;
        const boxRes = document.getElementById('resultText');
        const writetoResult = () => {
            if (i < ntext.length) {
                boxRes.innerHTML += ntext.charAt(i);
                i++;
                setTimeout(writetoResult, 10);
            }
        }

        setTimeout(writetoResult, 0);
    }, []);
    return (
        <Container id={id}>
            <Background />
            <MediaBox>
                <BoxCode>
                    <CodeBox id='commandText'></CodeBox>
                </BoxCode>
                <BoxVideo>
                    <CodeBoxo id='resultText'></CodeBoxo>
                </BoxVideo>
            </MediaBox>
        </Container>
    )
}

const Container = styled.section`
    padding-top: 6rem;
    padding-bottom: 6rem;
    height: 55rem;
    position: relative;
    color: #fff;
    transition: all .25s ease-in-out;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1rem;
    @media(max-width:780px) {
        font-size: .8rem;
    }
    @media(max-width: 330px) {
        font-size: .6rem;
    }
   
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
const MediaBox = styled.div`
    display: grid;
    position: relative;
    height: 100%;
    padding-left: 5rem;
    padding-right: 5rem;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: 1fr;
    grid-template-areas:
    'box1 box2 ';
    grid-gap: 0;
    @media(max-width:1250px) {
        grid-template-columns: 2fr;
        grid-template-rows: repeat(2,1fr);
        grid-template-areas:
            'box1'
            'box2';
    }
    @media(max-width:850px) {
        padding: 1rem;
    }
`;
const BoxCode = styled.div`
    padding: 1.25rem;
    background: hsla(0,0%,4%,.8);
    border-radius: .5rem 0 0 .5rem;
    border-right: 2px dashed grey;
    grid-area: box1;
    @media(max-width:1250px) {
        border-right: none;
        border-bottom: 1px dashed grey;
        border-radius: .5rem .5rem 0 0;
    }
`;
const BoxVideo = styled(BoxCode)`
    grid-area: box2;
    border-radius: 0 .5rem .5rem 0;
    border: none;
    @media(max-width:1250px) {
        border-radius: 0 0 .5rem .5rem;
    }
`;

const CodeBox = styled.pre`
    
    @media(max-width:1250px) {
        height: 15rem;
        overflow-x: hidden;
        overflow-y: scroll;
    }
    @media(max-width:630px) {
        width: 25rem;
        overflow-x: scroll;
    }
    @media(max-width:450px) {
        width: 18rem;
        
    }
    @media(max-width: 330px) {
        width: 14rem;
    }
    @media(max-width: 270px) {
        width: 12rem;
    }
`;

const CodeBoxo = styled(CodeBox)`
    overflow-y: scroll;
    height: 30rem;
    @media(max-width: 1250px) {
        height: 15rem;
    }
`;
export default Working;
