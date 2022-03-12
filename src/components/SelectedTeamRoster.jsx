import React, { useMemo, useEffect, useState, useContext } from "react";
import {attachItemsContext} from '../contexts/attachItemsContext';

import CitizenCard_Selected from './CitizenCard_Selected';
import EmptyPlaceHolder from './EmptyPlaceHolder';
import './styles/animatedDivBorder.css';
import styled from "styled-components";


const styles = {
    selectedTeamDiv: {
        
        // display:'flex',
        // flex: 1,
        marginTop:'50px',
        width: 410,
        height: 720, 
        // border: '1px dashed #00ff00',
        // backgroundColor: '#444',  
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: "center",
        
    },
    selectedTeamFooter: { //center a div WALRUS
        display:"flex",
        justifyContent: "center",
        width: "93%",
        fontSize: "20px"
        
    },
    afterCardItemSlot:{
        position:"relative",
        top: '0%',
        right: '0%',
        width: '20%',
        height: '80px',
        // borderRadius:'50%',
        fontSize: "45px",
        border: '1px solid #00ff00',
        zIndex: '10',
        justifyContent: 'center',
        textAlign: "center",
        display:'flex',
        margin: 'auto',
        paddingTop: '-50px',
    }
   

}


const Page = styled.div`
    background-color: ${props => props.theme.pageBackground};
    color: ${props => props.theme.textColor};
    
    transition: all .5s ease;
`;

    

const deleteCitizenFromTeam = () => {
    console.log('123')
}

const SelectedTeamRoster    = (selectedCitizensArray) => { 
    
    
    const {attachItemsToIndex}      = useContext(attachItemsContext);    //number, 0-3
    const {setAttachItemsToIndex}   = useContext(attachItemsContext);

    const {showAttachItems}         = useContext(attachItemsContext);   //true||false
    const {setShowAttachItems}      = useContext(attachItemsContext);
    
    const {selectedItem}         = useContext(attachItemsContext);   //array[index]  {0:'', 1:'', 2:''}
    const {setSelectedItem}      = useContext(attachItemsContext);

    const {plusDivBorder}         = useContext(attachItemsContext);   //flex when showing. none by default
    const {setPlusDivBorder}      = useContext(attachItemsContext);

    const {divBgColor}              = useContext(attachItemsContext);   //#green or ''  (background of ADD ITEM BUTTON)
    const {setDivBgColor}           = useContext(attachItemsContext);
    
    

    useEffect(()=>{

    },[plusDivBorder]);

    useEffect(()=>{

    },[selectedCitizensArray])
    useEffect(()=>{
        console.log('SELECTED ITEM OBJECT CHANGED:');
        console.log(selectedItem);
    },[selectedItem])

    
    function turnDivSolidGreen(index){
        setAttachItemsToIndex(index);
        if (divBgColor[index] !== ''){
            console.log('disabling colored background..');
            setShowAttachItems(false);
            setDivBgColor({...divBgColor, [index]:''});
            return;
        }


        if      (index == 0){
            setDivBgColor({0:'#00ffa8', 1:'', 2:''});
        }
        else if (index == 1){
            setDivBgColor({0:'', 1:'#00ffa8', 2:''});
        }
        else if (index == 2){
            setDivBgColor({0:'', 1:'', 2:'#00ffa8'});
        }
        setShowAttachItems(true);
    }

    var obj = Object.values(selectedCitizensArray);
    var arr = Object.keys(obj).map(function(k) { return obj[k] });

    
    // if (arr[0]){
    if (arr[0].length == 1){
        var cool = Object.keys(arr[0]);
        return(
            <Page>
                <div >
                    <div style={styles.selectedTeamDiv}>
                        {cool.map( (thisGuy, index) => (
                            <div key={index} style={{display:'flex'}} >
                                <CitizenCard_Selected   citizen={arr[0][thisGuy]} />
                                <div style={styles.afterCardItemSlot}>+</div>
                            </div>
                        ))}
                        <div style={{display:'flex'}}>
                            <EmptyPlaceHolder />
                            <div style={styles.afterCardItemSlot}>
                                +
                            </div>
                        </div>

                        <div style={{display:'flex'}}>
                            <EmptyPlaceHolder />
                            <div style={styles.afterCardItemSlot}>
                                +
                            </div>
                        </div>
                    </div>
                    <div style={styles.selectedTeamFooter}>
                        
                    </div>
                </div>
            </Page>
        )
    }
    else if (arr[0].length == 2){
        var cool = Object.keys(arr[0]);
        return(
            <Page>
                <div>
                    <div style={styles.selectedTeamDiv}>
                        {cool.map( (thisGuy, index) => (
                            <div key={index} style={{display:'flex'}} >
                                <CitizenCard_Selected   citizen={arr[0][thisGuy]} />
                                <div style={styles.afterCardItemSlot}>+</div>
                            </div>
                        ))}
                        <div style={{display:'flex'}}>
                            <EmptyPlaceHolder />
                            <div style={styles.afterCardItemSlot}>
                                +
                            </div>
                        </div>
                        
                    </div>
                    <div style={styles.selectedTeamFooter}>
                        
                    </div>
                </div>
            </Page>
        )
    }
    else if (arr[0].length == 3){
        var cool = Object.keys(arr[0]);
        // setPlusDivBorder({0:'flex',1:'flex',2:'flex'});

        return(
            <Page>        
                <div>
                    <div style={styles.selectedTeamDiv}>
                        {cool.map( (thisGuy, index) => (
                            <div key={index} style={{display:'flex'}}>
                                <div>
                                    <CitizenCard_Selected   citizen={arr[0][thisGuy]} />
                                </div>
                                <div onClick={()=>{turnDivSolidGreen(index)}} style={{ display:'flex', userSelect: 'none', backgroundColor: divBgColor[index], position:"relative",top: '0%',right: '0%',width: '50%',height: '80px',fontSize: "45px",border: plusDivBorder[index], zIndex: '10',justifyContent: 'center',textAlign: "center", margin: 'auto',paddingTop: '-50px',}}>
                                    {selectedItem[index] ? <div style={{fontSize:'15px'}}> <img src={selectedItem[index].url}></img> </div> : '+'}
                                </div>
                            </div>
                        ))}
                        
                    </div>
                    <div style={styles.selectedTeamFooter}>
                        
                    </div>
                </div>
            </Page>
        )
    }
    
    // }
    else {
        return(

            <Page>
            <div>
                {/* <div className='box' style={styles.selectedTeamDiv}> */}
            <div style={styles.selectedTeamDiv}>
                <div style={{display:'flex'}}>
                    <EmptyPlaceHolder />
                    <div style={styles.afterCardItemSlot}>+</div>
                </div>
                <div style={{display:'flex'}}>
                    <EmptyPlaceHolder />
                    <div style={styles.afterCardItemSlot}>+</div>
                </div>
                <div style={{display:'flex'}}>
                    <EmptyPlaceHolder />
                    <div style={styles.afterCardItemSlot}>+</div>
                </div>

                
            </div>
            </div>
            </Page>
        )
    }
}
export default SelectedTeamRoster;