import React from 'react';
import { useMoralis, useNFTBalances } from "react-moralis";



const TestNFTBalancesDeleteMe = () => {
    const { getNFTBalances, data, error, isLoading, isFetching } = useNFTBalances();

    console.log('herelkrjashfldjsdflksj');
    return (
        <div style={{marginTop:'100px'}}>
            {error && <>{JSON.stringify(error)}</>}
            <div style={{marginTop:'100px', color:'#000'}}><button onClick={() => getNFTBalances({ params: { chain: "0x89" } })}>Refetch NFTBalances</button></div>
            <pre>{JSON.stringify(data, null, 2)}</pre>                      
        </div>
    );
};

export default TestNFTBalancesDeleteMe;



//chain 0x1 ethereum
//chain 0x89 polygon

// MCP Citizen contract: 0x726e1b4841968c0c3eebeef880e60875b745b3c0