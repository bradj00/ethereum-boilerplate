import React, { useMemo, useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import PropTypes from 'prop-types';
import styled from "styled-components";



const Page = styled.div`
    background-color: ${props => props.theme.citizenCardBG};
    color: ${props => props.theme.textColor};
    transition: all .5s ease;
`;


const styles = {
    card: {
        // backgroundImage: 'linear-gradient(to top, rgba(0,255,0,0), rgba(0,255,0,1) 25%, rgba(0,255,0,1) 75%, rgba(0,255,0,0) 100%)',
        // WebkitFilter: `linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`,
        
        padding: '20px',
        userSelect: 'none',
        // boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 80%)",
        border: "2px solid #222",
        // borderRadius: '20px',

        width: 300,
        height: 200,
        // margin: '18px',
        marginBottom:'10px',
        overflow:'hidden',
        display: 'flex',
        justifyContent: 'center',
        textAlign: "center",
        
    },
    citizenCardAvatar:{
        paddingLeft: "5px",
        height: 250, 
        width: 200,
        border: "0px solid #000",
        float: 'left',
        marginTop: "-5%",
        marginLeft: "-5%",
        
      }, 
      citizenCardStats: {
        transform: `scale(0.6)`,
        float: 'right',
        width: '100%',
        position: "relative",
        marginRight: "2%",
        marginTop: "-12%"

       },
       citizenCardStatLabels: {
        float: 'left',
        width: "95%",
        marginLeft: "-65%",
        marginTop: "55%",
        fontSize: "15px",
        position: 'relative',
       }

}

export default function CitizenCard(citizen) {
    if (citizen && (citizen.citizen.metadata)){

        const onDeleteClick = () => {
            this.props.deleteClickHandler();
        }

        return (
            <Page>
            <div style={styles.card}>
                  {/* <span style={{fontSize: '25px'}} onClick={onDeleteClick}>✖️</span> */}
                <div style={{position:'absolute',marginTop:'-15px'}}>id {citizen.citizen.token_id}</div>  
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
                </div>
                <div style={styles.citizenCardStatLabels}>
                    {JSON.parse(citizen.citizen.metadata).attributes[0].value} </div>  
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

CitizenCard.propTypes = {
    // deleteClickHandler: PropTypes.func.isRequired
}