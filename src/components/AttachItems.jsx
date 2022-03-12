import React, { useMemo, useEffect, useState, useContext } from "react";
import PropTypes from 'prop-types';
import './styles/animatedDivBorder.css';
import Draggable from 'react-draggable';
import styled from "styled-components";
import Font, { Text } from 'react-font'
import {attachItemsContext} from '../contexts/attachItemsContext';

const Page = styled.div`
    background-color: ${props => props.theme.pageBackground};
    color: ${props => props.theme.textColor};
    transition: all 0.5s ease;
`;

const styles = { 

    itemDiv: {
        width: '100%',
        height: '30%',
        border: '1px solid #00ff00',
        margin:'auto',
        textAlign: 'center',
        justifyContent: 'center',
        userSelect: 'none',
        zIndex:'0',
        

    }
}

const AttachItems = (props)=> {
 
    const {attachItemsToIndex}      = useContext(attachItemsContext);    //number, 0-3
    const {setAttachItemsToIndex}   = useContext(attachItemsContext);

    const {showAttachItems}         = useContext(attachItemsContext);   //true||false
    const {setShowAttachItems}      = useContext(attachItemsContext);
    
    const {selectedItem}            = useContext(attachItemsContext);   //array[index]  {0:'', 1:'', 2:''} 
    const {setSelectedItem}         = useContext(attachItemsContext);   
    
    
    const {itemDisplay}             = useContext(attachItemsContext);   //grid by default
    const {setItemDisplay}          = useContext(attachItemsContext);   
    
    const {itemOpacity}             = useContext(attachItemsContext);   //1 by default
    const {setItemOpacity}          = useContext(attachItemsContext);   
    
    const {plusDivBorder}          = useContext(attachItemsContext);   //flex when showing. none by default
    const {setPlusDivBorder}       = useContext(attachItemsContext);

    const {divBgColor}              = useContext(attachItemsContext);   //#green or ''  (background of ADD ITEM BUTTON)
    const {setDivBgColor}           = useContext(attachItemsContext);


    // console.log('showAttachItems starts out as: '+showAttachItems);
    // useEffect( () => {
    //     console.log('showAttachItems is now: '+showAttachItems);
    //     },[showAttachItems])

    // useEffect( () => {
    //     console.log('attachItemsToIndex is now: '+attachItemsToIndex);
    //     },[attachItemsToIndex])
        
    useEffect( () => {
        console.log('selectedItem is now: ');
        console.log(selectedItem);
        },[selectedItem])

    function confirmSelectedItem(object){
        console.log('item url: '+object.url);
        setSelectedItem({...selectedItem, [attachItemsToIndex]: object})

    }

    function makeAdjustments(index){
        console.log('DOING THE NEEDFUL')
        confirmSelectedItem({index: 0, url:'https://i.redd.it/1qx0cbvqjcf61.gif'});
        setItemOpacity({...itemOpacity, [index]:0});
        {setTimeout(function(){setItemDisplay('none')},500)};
        setPlusDivBorder({...plusDivBorder, [index]:'none'});
        setDivBgColor({...divBgColor, [index]:'' });

        
    }

    // console.log('itemDisplay: '+JSON.stringify(props.display));
    return(
        <div style={{display: props.display,position:'absolute', width: '650px', textAlign: 'center'}}>
        
            <div style={{color: "#fff", justifyContent: 'center', display:"flex",   }}>
                <h2 style={{color: "#fff",}}>CLICK AN ITEM TO EQUIP TO CITIZEN {attachItemsToIndex+1}</h2>
            </div>
            <Page>
            <div className={props.boxClass} style={{backgroundColor: '#000c36', transition:'all .5s ease', marginTop: '5%', width: '650px', height: '600px',}}>
            
                <div style={{ display: 'grid', gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20,  position: 'absolute', left: '0%', top:'0%', width: '600px', height: '600px', margin: '20px'}}>

                    <div onClick={()=>{makeAdjustments(0); }}  style={{opacity: itemOpacity, display: itemDisplay[0], transition:'all 0.2s ease', userSelect:'none'}}>
                        <img src='https://i.redd.it/1qx0cbvqjcf61.gif' style={{filter: 'hue-rotate(20deg)'}} height='150px' width='150px' alt="Logo" />
                        <Font family='Fira Sans'>
                            <div style={{fontSize:'10px'}}>
                                Magical Sword of Agility
                            </div>
                        </Font>
                    </div>
                   
                   

                    <div onClick={()=>{makeAdjustments(1); }}  style={{opacity: itemOpacity, display: itemDisplay[1], transition:'all 0.2s ease', userSelect:'none'}}>
                        <img src='https://i.redd.it/1qx0cbvqjcf61.gif' style={{filter: 'hue-rotate(90deg)'}} height='150px' width='150px' alt="Logo" />
                        <Font family='Fira Sans'>
                            <div style={{fontSize:'10px'}}>
                                Magical Sword of Agility
                            </div>
                        </Font>
                    </div>
                   
                   

                    <div onClick={()=>{makeAdjustments(2); }}  style={{opacity: itemOpacity, display: itemDisplay[2], transition:'all 0.2s ease', userSelect:'none'}}>
                        <img src='https://i.redd.it/1qx0cbvqjcf61.gif' height='150px' style={{filter: 'hue-rotate(270deg)'}}width='150px' alt="Logo" />
                        <Font family='Fira Sans'>
                            <div style={{fontSize:'10px'}}>
                                Magical Sword of Agility
                            </div>
                        </Font>
                    </div>
                   
                   

                    <div style={{userSelect:'none'}}>
                        <img src='https://i.redd.it/1qx0cbvqjcf61.gif' style={{transform: 'scaleX(-1)'}} height='150px' width='150px' alt="Logo" />
                        <Font family='Fira Sans'>
                            <div style={{fontSize:'10px'}}>
                                Magical Sword of Agility
                            </div>
                        </Font>
                    </div>
                   
                   

                    <div style={{userSelect:'none'}}>
                    <img src='https://i.redd.it/1qx0cbvqjcf61.gif' style={{transform: 'scaleX(-1)'}} height='150px' width='150px' alt="Logo" />
                    <Font family='Fira Sans'>
                            <div style={{fontSize:'10px', textDecoration:'underline dotted', }}>
                                Magical Sword of Agility
                            </div>
                        </Font>
                    </div>
                   
                   

                    <div style={{userSelect:'none'}}>
                    <img src='https://i.redd.it/1qx0cbvqjcf61.gif' style={{transform: 'scaleX(-1)'}} height='150px' width='150px' alt="Logo" />
                    <Font family='Fira Sans'>
                            <div style={{fontSize:'10px'}}>
                                Magical Sword of Agility
                            </div>
                        </Font>
                    </div>
                   
                   

                    <div style={{userSelect:'none'}}>
                        <img src='https://i.redd.it/1qx0cbvqjcf61.gif' style={{filter: 'hue-rotate(90deg)'}} height='150px' width='150px' alt="Logo" />
                        <Font family='Fira Sans'>
                            <div style={{fontSize:'10px'}}>
                                Magical Sword of Agility
                            </div>
                        </Font>
                    </div>
                   
                   

                    <div style={{userSelect:'none'}}>
                        <img src='https://i.redd.it/1qx0cbvqjcf61.gif' style={{filter: 'hue-rotate(120deg)'}} height='150px' width='150px' alt="Logo" />
                        <Font family='Fira Sans'>
                            <div style={{fontSize:'10px', }}>
                                Magical Sword of Agility
                            </div>
                        </Font>
                    </div>
                   
                   

                    <div style={{userSelect:'none'}}>
                        <img src='https://i.redd.it/1qx0cbvqjcf61.gif' style={{filter: 'hue-rotate(270deg)'}} height='150px' width='150px' alt="Logo" />
                        <Font family='Fira Sans'>
                            <div style={{fontSize:'10px'}}>
                                Magical Sword of Agility
                            </div>
                        </Font>
                    </div>
                   
                   
                </div>
                

            

            </div>
            </Page>  
        </div>
    )

}

export default AttachItems;


