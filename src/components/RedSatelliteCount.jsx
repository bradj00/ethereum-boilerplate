import { useMoralis } from "react-moralis";
import React, { useMemo, useEffect, useState } from "react";
import useRedSatelliteCount from "hooks/useRedSatelliteCount";

// export default function RedSatelliteCount({ isServerInfo }) {
//     console.log('COOL BEANS THAT ARE COOL')
//     return(
//         <>
//         <h1>COOL BEANS THAT ARE COOL</h1>
//         </>
//     )

// }
const styles = {

    redSatCounter: {
        fontSize: 20,
        marginRight: 80
    }


}


export default function RedSatelliteCount({ isServerInfo }) {
    const { account, Moralis } = useMoralis();
    const isInchDex = useMemo(() => (Moralis.Plugins?.oneInch ? true : false), [Moralis.Plugins?.oneInch]);
  
 
    const {RedSatelliteCount, data, error, isLoading} = 
    useRedSatelliteCount({
        chain: 'polygon', 
        address: '0x0000000000000000000000000000000000000000', //replace with address 
        token_address: '0xfa17a2751576277176627c1f525f1eda94575555'}) //MCPA contract. Red Satellite tokenID: 12204
    
    // console.log('<data>\t\t\t\t\ttypeof: '+typeof data);
    if (data && data.result){
        var redSatCounter = 0;
        const parsedData = JSON.parse(JSON.stringify(data))

        const redSatsCount = parsedData.result.map((coolItem) => {
            if (coolItem.metadata){
                coolItem.metadata = JSON.parse(coolItem.metadata);
                if (coolItem.metadata.name == 'Red Satellite Antenna'){
                    // console.log(coolItem.metadata)
                    redSatCounter++;
                }
                // }
            }
        })



        return (
            <div style={styles.redSatCounter}>
            {redSatCounter}
            </div>  
        )

    }
    else {
        return (
          <div style={{ display: "flex", gap: "0px", color: "#fff" }}>
            ...
          </div>
        )
      }


    }