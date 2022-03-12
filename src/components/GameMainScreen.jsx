import { useMoralis } from "react-moralis";


const styles = {

    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        marginTop: 100,
        
    },
    gameMainScreen: {
        width: 1800,
        height: 700,
        backgroundColor: "#111",
        border: "1px solid #fff",
        color: "#00ff00",
        padding: 30,
    },


}


export default function GameMainScreen({ isServerInfo }) {
    //user has agreed to terms and connected web3 wallet at this point
    //main screen with default layout to begin enjoying the app

    return(
        <>
            <div style={styles.gameMainScreen}>
                SOME COOL TEXT AND H'WHAT NOT 
            </div>
        </>
    )
   
}