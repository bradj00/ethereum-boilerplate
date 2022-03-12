import React, { useMemo, useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import PropTypes from 'prop-types';
import styled from "styled-components";

const styles = {
    card: {
        // backgroundImage: 'linear-gradient(to top, rgba(0,255,0,0), rgba(0,255,0,1) 25%, rgba(0,255,0,1) 75%, rgba(0,255,0,0) 100%)',
        // WebkitFilter: `linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`,
        
        padding: '20px',
        userSelect: 'none',
        // boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 80%)",
        // border: "1px solid #00ff00",
        borderRadius: '20px',
        // backgroundColor:"#111",
        width: 440,
        height: 310,
        display: 'flex',
        // margin: '35px',
        marginTop: '15px',
        overflow: 'auto',
        cursor: 'pointer'
    },
    citizenCardAvatar:{
        paddingLeft: "5px",
        height: 250, 
        width: 200,
        border: "0px solid #000",
        float: 'left',
        
      },
      citizenCardStats: {
    
        float: 'right',
        width: '50%',
        marginLeft: '25px',
        color: "#0000ff",
       },
       citizenCardStatLabels: {
        float: 'left',
        display:"flex",
        // justifyContent: "center",
        width: "95%",
        marginLeft: "-90%",
        marginTop: "10px",
        fontSize: "25px",
        color: "#fff",
       }

}

const Page = styled.div`
    background-color: ${props => props.theme.pageBackground};
    transition: all .5s ease;
`;



export default function CitizenCard(citizen) {
    if (citizen && (citizen.citizen.metadata)){
        console.log(citizen.citizen);
        const onDeleteClick = () => {
            this.props.deleteClickHandler();
        }

        return (
            <Page>
            <div style={styles.card}>
                  {/* <span style={{fontSize: '25px'}} onClick={onDeleteClick}>✖️</span> */}
                <div>{citizen.citizen.token_id}</div>
                <div style={styles.citizenCardAvatar}>
                    <img src={JSON.parse(citizen.citizen.metadata).image}   alt="Logo" />
                    {/* <img src='https://i.imgur.com/Klx7SIr.png'  alt="Logo" /> */}
                </div>
                
                <div style={styles.citizenCardStats}>
                    <ProgressBar bgcolor={"#55ff55"} completed={JSON.parse(citizen.citizen.metadata).attributes[3].value * 10} preText={'INT'} />
                    <ProgressBar bgcolor={"#55ff55"} completed={JSON.parse(citizen.citizen.metadata).attributes[4].value * 10} preText={'STR'} />
                    <ProgressBar bgcolor={"#55ff55"} completed={JSON.parse(citizen.citizen.metadata).attributes[5].value * 10} preText={'CHA'} />
                    <ProgressBar bgcolor={"#55ff55"} completed={JSON.parse(citizen.citizen.metadata).attributes[6].value * 10} preText={'AGI'} />
                    <ProgressBar bgcolor={"#55ff55"} completed={JSON.parse(citizen.citizen.metadata).attributes[7].value * 10} preText={'LUC'} />
                    <ProgressBar bgcolor={"#55ff55"} completed={JSON.parse(citizen.citizen.metadata).attributes[8].value * 10} preText={'END'} />
                    <ProgressBar bgcolor={"#5555ff"} completed={JSON.parse(citizen.citizen.metadata).attributes[8].value * 10} preText={'WIS'} />
                  <div style={styles.citizenCardStatLabels}>{JSON.parse(citizen.citizen.metadata).attributes[0].value} </div>  
                  

                </div>
            </div>
            </Page>
        )

    }
    else{
        return(
            <>
            
            </>
        )
    }

}
