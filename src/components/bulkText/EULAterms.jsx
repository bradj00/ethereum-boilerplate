import Typewriter from "typewriter-effect";
import {useState, useRef} from 'react';
import Font, { Text } from 'react-font'


const styles = {
    boilerText: {
        fontSize: 15,
        padding:50,
        width: "100%",
        textAlign: "center"
    },

    headerStyle: {
        flex:1,
        color: "#00ff00",
        textAlign: "center",
        fontSize: 30
    
    },

}

const theString = `
READ AND AGREE TO TERMS:<br>

To use this dApp you must connect your Web3 wallet and agree to the below terms:
`



const theSecondString = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet cursus sit amet dictum sit. Vestibulum lorem sed risus ultricies tristique nulla aliquet. Vitae tempus quam pellentesque nec nam. Amet venenatis urna cursus eget nunc scelerisque viverra mauris in. Lorem mollis aliquam ut porttitor leo. Duis ut diam quam nulla porttitor. Sociis natoque penatibus et magnis dis. Mauris sit amet massa vitae tortor. Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Sed augue lacus viverra vitae congue. Sem integer vitae justo eget magna fermentum. Vitae justo eget magna fermentum iaculis eu. Egestas sed sed risus pretium quam. Id ornare arcu odio ut sem nulla pharetra. Facilisis gravida neque convallis a cras semper auctor. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Neque convallis a cras semper auctor neque. At quis risus sed vulputate odio.

Sit amet venenatis urna cursus. Molestie nunc non blandit massa enim nec dui nunc. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Sed id semper risus in hendrerit gravida rutrum quisque. Eget felis eget nunc lobortis mattis aliquam. Condimentum vitae sapien pellentesque habitant. Laoreet id donec ultrices tincidunt arcu non sodales neque. Cursus mattis molestie a iaculis at erat pellentesque. Sed turpis tincidunt id aliquet risus feugiat in ante. Neque egestas congue quisque egestas diam in arcu.
`



export default function EULAterms({ isServerInfo }) {
    const [showSecondText, setShowSecondText] = useState(false);
    setTimeout(function(){
        setShowSecondText(true);
    },4000)

    if (!showSecondText){
        return (
            <>
            
            <div style={styles.headerStyle}>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.options.delay = 30
                        typewriter.options.cursor = '...'
                        typewriter.typeString(theString) 
                        
                        
                        .start()
                    }}
                />
            </div>
            
            
            </>
        )
    }else {
        return (  
            <div>
               <div style={styles.headerStyle}>
                    <p>READ AND AGREE TO TERMS:</p>
                     To use this service you must connect your Web3 wallet and agree to the below terms:
               </div>
               <div style={styles.boilerText}> 
                    {theSecondString}
               </div>
            </div>
        )
    }
}