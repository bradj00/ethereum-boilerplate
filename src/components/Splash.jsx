import EULAterms from './bulkText/EULAterms'
import GameMainScreen from './GameMainScreen'
import { useMoralis } from "react-moralis";
import { useState, useEffect } from 'react';
import Font, { Text } from 'react-font'
import styled from "styled-components";


const Page = styled.div`
    width: 1800;
    height: 700;
    border: 1px solid #fff;
    color: #00ff00;
    padding: 30;
    margin-top: 100px;
    background-color: ${props => props.theme.pageBackground};
    transition: all .5s ease;
`;

const styles = {
    // content: {
    //     margin: 'auto',
    //     // display: 'flex',
    //     // alignItems: 'center',
    //     width: 1800,
    //     height: 700,
    //     border: "1px solid #fff",
    //     color: "#00ff00",
    //     padding: 30,
    //     marginTop: '100px'
    // },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        marginTop: 100,
        
    },



}

const Splash = (props) => {
// export default function SplashPage({ isServerInfo, props } ) {

    //purpose of this page is a landing when page first loads. 
    //if not authenticated, get web3 authentication
    //once authenticated, if user has not agreed to terms, get them to sign terms
    //finally, forward to MainGameScreen() where we set up basic options to play

    const {authenticate, isAuthenticated, user}   = useMoralis();
    const [userAgreedToEULA, setuserAgreedToEULA] = useState(false);


    useEffect(()=>{
        // console.log(props)
        // console.log(props.theme.pageBackground)

    }, )
    useEffect(()=>{
        console.log(userAgreedToEULA)

    }, [userAgreedToEULA])

    if (!userAgreedToEULA){
        return(
            <>
                {/* <div style={styles.content}> */}
                <Page>
                    <div>
                        <Font family='Inconsolata'>
                         <EULAterms />
                        </Font>
                    </div>
                    <div style={styles.button}>
                        {/* <button onClick={()=>{setuserAgreedToEULA(true)}}>OKIE DOKIE</button> */}
                        <button onClick={() => authenticate({signingMessage:"ayyyy"})}>Authenticate</button>
                    </div>
                </Page>
                {/* </div> */}
            </>
        )
    }else {
        return(
            <>
                <GameMainScreen />
            </>
        )
    }
};
// }

export default Splash;