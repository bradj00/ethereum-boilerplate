import React, { useMemo, useEffect, useState, useContext } from "react";
import { useMoralis, useNFTBalances } from "react-moralis";
import Account from "components/Account/Account";
import useNFTsByOwnerAndContract from "hooks/useNFTsByOwnerAndContract";
import useFetch from "hooks/useFetch";
import ProgressBar from "./ProgressBar"
import HorizontalScroll from 'react-scroll-horizontal'
import { CryptoCards, Card, Illustration } from 'web3uikit';
import Button from 'react-bootstrap/Button'

import SelectedTeamRoster from './SelectedTeamRoster';
import CitizenCard from './CitizenCard';
import AttachItems from './AttachItems.jsx';
import SetBattleOptions from './SetBattleOptions.jsx';

import './styles/animatedDivBorder.css';
import './styles/animatedTransitionLeft.css';
import './styles/animatedTransitionTop.css';
import './styles/animatedDisappear.css';
import './styles/animatedAppear.css';
import './styles/animatedDivBorder.css';
import './styles/rosterCard.css';
import styled from "styled-components";

import { Transition } from "@headlessui/react";
import { NavLink  } from "react-router-dom";

import {attachItemsContext} from '../contexts/attachItemsContext';

var styles = { 
  title: {
    fontSize: "20px",
    fontWeight: "700",
  },
  text: {
    fontSize: "16px",
  },
  CitizenSelection: {
    
  },
};

const Page = styled.div`

    border: 1px solid #fff;
    padding: 30;
    margin-top: 0px;
    background-color: ${props => props.theme.pageBackground};
    color:            ${props => props.theme.textColor};
    transition: all .5s ease;
`;




const BuildBattleTeam = (props) => {

  const [showAttachItems, setShowAttachItems] = useState(false);
  const [attachItemsToIndex, setAttachItemsToIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState({0:'',1:'',2:''});
  const [itemDisplay, setItemDisplay] = useState('grid');
  const [itemOpacity, setItemOpacity] = useState({0:'', 1:'',2:''});
  const [plusDivBorder, setPlusDivBorder] = useState({0:'', 1:'',2:''}); //flex when showing. none by default
  const [divBgColor, setDivBgColor] = useState({0: '', 1:'',2:''});
  const { account, Moralis } = useMoralis();
  const isInchDex = useMemo(() => (Moralis.Plugins?.oneInch ? true : false), [Moralis.Plugins?.oneInch]);
  const [NFTsLoaded, setNFTsLoaded] = useState(false);
  const [SelectedItemsArray, setSelectedItemsArray] = useState({thisArray: []});
  const [CardMaxOpacity, setCardMaxOpacity] = useState('1');
  const [CardMaxFilter, setCardMaxFilter] = useState('');
  const [divDisplay, setDisplay] = useState('block');
  const [selectedRosterLeft, setSelectedRosterLeft] = useState('40%');
  const [rosterAnimation, setRosterAnimation ] = useState('');
  const [availableRosterAnimation, setAvailableRosterAnimation ] = useState('');
  const [availableRosterClass, setAvailableRosterClass ] = useState('box');
   const [rosterClass, setRosterClass]             = useState('box'); //for big list of citizens
  const [selectedTeamClass, setSelectedTeamClass] = useState('boxNoAnimation'); //for selected citizens
  // const [CardsBorder, setCardsBorder] = useState('1px solid #00ff00');
  const [attachItemsClass, setAttachItemsClass]     = useState('');
  const [attachItemsDisplay, setAttachItemsDisplay] = useState('grid');
  const [attachItemsAnimation, setAttachItemsAnimation] = useState('');
  const [buildBattleTeamDivAnimation, setBuildBattleTeamDivAnimation] = useState('');
  const [buildBattleTeamDivOpacity, setBuildBattleTeamDivOpacity] = useState('1');
  const [buildBattleTeamDivDisplay, setBuildBattleTeamDivDisplay] = useState('block');
  const [battleOptionsDisplay, setBattleOptionsDisplay ] = useState('none');



  console.log('account: '+account);
  const {NFTsForContract, data, error, isLoading} = useNFTsByOwnerAndContract({chain: 'polygon', address: account, token_address: '0x726e1b4841968c0c3eebeef880e60875b745b3c0'})  

 

  useEffect(()=>{

  },[SelectedItemsArray])

  useEffect( () => {

},)
  

  function toggleSelected(citizen){
    if (SelectedItemsArray.thisArray.length < 2){
      if (SelectedItemsArray.thisArray.includes(citizen) ){
        console.log('removing citizen');
        const filteredArr = SelectedItemsArray.thisArray.filter(function(entry){ if (entry !== citizen){return entry;}});
     
          setSelectedItemsArray({ thisArray: [filteredArr] })
          console.log(SelectedItemsArray.SelectedItemsArray)
        
      }
      else {
        // console.log('adding citizen');
        setSelectedItemsArray({ thisArray: [...SelectedItemsArray.thisArray, citizen] })
        // console.log(SelectedItemsArray.SelectedItemsArray)
      }
   }
    else if (SelectedItemsArray.thisArray.length == 2){
      // console.log('adding citizen');
      setSelectedItemsArray({ thisArray: [...SelectedItemsArray.thisArray, citizen] })
      console.log(SelectedItemsArray.SelectedItemsArray)
      // setCardMaxOpacity('0.4');
      // setCardMaxFilter('blur(5px');
    
      setSelectedRosterLeft('3%');
      setRosterAnimation('animateTransitionLeft 0.5s');
      
      setAvailableRosterAnimation('animateDisappear 0.2s forwards');
      
      
      

      setSelectedTeamClass('boxNoAnimation');

      setAttachItemsAnimation('animateAppear 0.3s forwards');
      // setAttachItemsDisplay('grid'); //set "Attach Items" div to visible
      setAttachItemsClass('box');     //set "Attach Items" div to box highlight animation
      

      // setCardsBorder('5px solid #fff');
    }
    else {
      console.log('MAX AMOUNT REACHED: '+CardMaxOpacity);
    }
    
  } 

  function setBattleOptions(){
    //take whole div, whisk it away
    //then Route navigate to BattleStage.jsx component
    console.log('COOL HERE WE GO')
    setBuildBattleTeamDivAnimation('animateTransitionUp 3s forwards');
    setBuildBattleTeamDivOpacity('0');
    setTimeout(function(){
      setBuildBattleTeamDivDisplay('none');
      setBattleOptionsDisplay('flex');
      // history.push("/SetBattleOptions"); 
      
    },500)
    // setBuildBattleTeamDivAnimation('animateTransitionUp 0.5s forwards');
  }


  if (data && data.result){
      // console.log(data.result);
      
      return (
      <attachItemsContext.Provider value={{attachItemsToIndex, setAttachItemsToIndex, showAttachItems, setShowAttachItems, selectedItem, setSelectedItem, itemDisplay, setItemDisplay, itemOpacity, setItemOpacity, plusDivBorder, setPlusDivBorder, divBgColor, setDivBgColor}}>
      <Page>
      <div style={{position:'absolute', display: battleOptionsDisplay, alignContent:'center', justifyContent:'center', width: '95%', height: '800px', top:'100px', left:'50px', border:'1px solid #00ff00', transition:'all .5s ease'}}>
        <SetBattleOptions  />
      </div>
      <div style={{position:'relative', opacity: buildBattleTeamDivOpacity, display:  buildBattleTeamDivDisplay, animation: buildBattleTeamDivAnimation, transition:'all .5s ease'}}>
      
        <div className={availableRosterClass} style={{ border: '2px solid #0000ff', animation: availableRosterAnimation, display: 'flex',  filter: CardMaxFilter, opacity: CardMaxOpacity,  position:'absolute', left: '10px',top: '140px',height: '710px',overflowY:'scroll'}}>   
          <div  style={{ paddingTop:'300px',  }}>
            {
              data.result.map( (citizen, index) => (
                <div   key={index} onClick={()=>{toggleSelected(citizen)}}>
                  <CitizenCard deleteClickHandler={()=>{}} {...props}  citizen={citizen} />
                  
                </div>
              ))
            }
          </div>
        </div> 
        


        <div >
          <div className={selectedTeamClass} style={{ animation: rosterAnimation, marginTop: '5%', position: 'absolute', left: selectedRosterLeft}}>
              <SelectedTeamRoster selectedCitizensArray={SelectedItemsArray.thisArray} said={setAttachItemsDisplay}/>
              {/* <SelectedTeamRoster {...selectedTeamRosterProps}/> */}
              
          </div>
        </div>


        <div style={{ animation: attachItemsAnimation, position: 'absolute',marginTop: '5%', left: '35%',}}>
            {showAttachItems ? <AttachItems {...props} boxClass={attachItemsClass} display={attachItemsDisplay}  /> : `Select Something`}
        </div>
        
        <div style={{position:'absolute', right:'1%', width: '500px', height:'900px', display:'flex', float:'right', }}>
            <SetBattleOptions />
        </div>
        
        <div  style={{position:'absolute',right:'9%', top:'700px' }}> 
          {/* <NavLink  to="/Splash"> style={{display: 'flex', justifyContent:'center', paddingTop: '15%', borderRadius: '25px', width: 200, height: 100, fontSize: '25px', backgroundColor:'#0066a0'}}>Battle Options</NavLink> */}
          <Button onClick={()=>{setBattleOptions()} } style={{ display: 'flex', justifyContent:'center', paddingTop: '15%', borderRadius: '25px', width: 200, height: 100, fontSize: '25px', backgroundColor:'#0066a0'}}> CONFIRM</Button>
        </div>


      </div>
      </Page>
      </attachItemsContext.Provider>
      ) 

    

  }else {
    return (
      <Page>
        <div style={{ display: "flex", gap: "0px", color: "#fff" }}>
          L O A D I N G   N F T   D A T A . . .
        </div>
      </Page>
    )
  }
}

export default BuildBattleTeam;