import React, { useMemo, useEffect, useState } from "react";



const SetBattleOptions = () => {
    return(
        <div style={{display:'flex', alignContent: 'center', justifyContent:'center', width: '100%', height: '50%',border:'1px solid #0000ff', margin:"auto"}}>
            <div style={{alignContent: 'center', display:'block', textAlign:'left', fontSize:'25px', paddingTop:'20px'}}>

                
                <div style={{display:'grid', alignContent:'center', justifyContent:'center', borderBottom:'1px solid #ff0000', padding:'0px 0px 15px 0px', fontSize:'15px'}}>
                    <div style={{display:'grid', alignContent:'center', justifyContent:'center'}}>ONLY ACCEPT CHALLENGE FROM: </div>
                    <form>
                        <label>
                            <input style={{width: "340px"}} type="text" name="name" placeholder="Enter an opponent's Ethereum Address" />
                        </label>

                    </form>
                </div>

                <div style={{display:'grid', paddingLeft:'60px', paddingTop:'30px'}}>
                    <div ><input type="checkbox"/>  ACCEPT ANY CHALLENGER</div>
                    <div><input type="checkbox" />  ko'd CITIZENS GO TO PURGATORY</div>
                    <div><input type="checkbox" />  WINNER TAKES ALL</div>
                    <div><input type="checkbox" />  MINT TROPHY NFT</div>
                </div>    
            </div>
        </div>
    )
}
export default SetBattleOptions;