import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink,
} from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';

import Account from "components/Account/Account";
import Chains from "components/Chains";
import TokenPrice from "components/TokenPrice";
import ERC20Balance from "components/ERC20Balance";
import ERC20Transfers from "components/ERC20Transfers";
import DEX from "components/DEX";
import NFTBalance from "components/NFTBalance";
import Wallet from "components/Wallet";
import { Layout, Tabs } from "antd";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";

import "./style.css";
import "./components/styles/RouterSwitchAnimation.css";

import TestNFTBalancesDeleteMe from "components/TestNFTBalancesDeleteMe";
import BuildBattleTeam from "components/BuildBattleTeam";
import Splash from "components/Splash";
import RedSatelliteCount from "components/RedSatelliteCount";
import Contract from "components/Contract/Contract";
import Text from "antd/lib/typography/Text";
import Ramper from "components/Ramper";
import MenuItems from "./components/MenuItems";

import {Illustration} from 'web3uikit';

import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import { ToggleSlider } from "react-toggle-slider";

import { ThemeProvider } from "styled-components";



const { Header, Footer } = Layout;

const LightTheme = {
  pageBackground: "white",
  titleColor: "#dc658b",
  tagLineColor: "black",
  textColor: "#000",
  citizenCardBG: "#ccc",
} 

const DarkTheme = {
  pageBackground: "#242a36",
  titleColor: "lightpink",
  tagLineColor: "lavender",
  textColor: "#fff",
  citizenCardBG: "#353b47",
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#00ff00",
    padding: "10px",
    // backgroundColor: '#333',
    overflowY: 'visible'
  },


  redSatImage: {
    height: 35
  }
}



const App = ({ isServerInfo }, props) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  const [theme, setTheme] = useState('dark');
  const [active, setActive] = useState(false);

  function changeTheme(state) {
    state ? setTheme('light') : setTheme('dark');
  }
 
  let theseProps = {
    theme: themes,
    setTheme: setTheme,
    isServerInfo: isServerInfo
  }



  return (
    <ThemeProvider theme={themes[theme]}>
    <Layout style={{ height: "97vh", overflow: "visible", backgroundColor: themes[theme].pageBackground, color: themes[theme].textColor, transition:'all .5s ease', }}>
      <Router>
     
        <Header style={{backgroundColor:themes[theme].pageBackground, color: themes[theme].textColor,position: "fixed",gap: "20px",zIndex: 1,width: "100%",display: "flex",justifyContent: "space-between",alignItems: "center",fontFamily: "Roboto, sans-serif",borderBottom: "2px solid rgba(0, 0, 0, 0.08)",padding: "0 10px",boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",}}>
          <Logo />

          <ToggleSlider onToggle={state => changeTheme(state)}>  </ToggleSlider>
             {/* {active ? <HiMoon size={40} /> : <CgSun size={40} />} */}
             

          <MenuItems {...theseProps} />
          <div style={{backgroundColor: themes[theme].pageBackground, color: themes[theme].textColor, transition:'all .5s ease',display: "flex",gap: "20px",alignItems: "center",fontSize: "15px",fontWeight: "600",}}>
            <img style={styles.redSatImage} src="https://lh3.googleusercontent.com/Xi_D1LVrGUpErn_GPngfN4r824vmlml_M6QRWsNl-MlDRGfzBk9TDASz6GVJZ4WDM9A-0hvCB8xnYilTcXhPPrgq2A=w600"></img>
            <RedSatelliteCount isServerInfo={isServerInfo} />

            {/* <Chains /> */}
            <TokenPrice
              address="0x3218A02F8F8B5c3894ce30EB255F10Bcba13E654"
              chain="eth"
              image="https://assets.coingecko.com/coins/images/12971/small/mcp_icon_200.png"
              size="40px"
            />
            <NativeBalance />

            <Account />
          </div>
        </Header>
        {/* theme={theme} setTheme={setTheme} */}
        <div >
          <Switch>
            <Route exact path="/">
              <Redirect to="/Splash" />
            </Route>

            <Route exact path="/Splash">
              <Splash {...theseProps} />
            </Route>

            <Route exact path="/BuildBattleTeam">
              <BuildBattleTeam {...theseProps} />
            </Route>
           
            <Route exact path="/TestNFTBalancesDeleteMe">
              <TestNFTBalancesDeleteMe  />
            </Route>

            <Route path="/wallet">
              <Wallet />
            </Route>

            <Route path="/RedSatelliteCount">
              <RedSatelliteCount isServerInfo={isServerInfo} />
            </Route>

            <Route path="/nonauthenticated">
              <>Please login using the "Connect Wallet" button</>
            </Route>

          </Switch>
        </div>
      
      </Router>



      <Footer style={{ textAlign: "center" }}>
        <Text style={{ display: "block" }}>

        </Text>
      </Footer>
    </Layout>
    </ThemeProvider>
  );
};

export const Logo = () => (
  <NavLink to="/Splash">
    <div style={{ display: "flex", color:"#fff" }} onClick={()=>{ }}>

      <img src='https://i.imgur.com/GHLANPC.png' />
      {/* <svg
        width="60"
        height="38"
        viewBox="0 0 50 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M43.6871 32.3986C43.5973 32.4884 43.53 32.5782 43.4402 32.6905C43.53 32.6007 43.5973 32.5109 43.6871 32.3986Z"
          fill="black"
        />
        <path
          d="M49.7037 14.3715C49.5241 6.2447 42.7891 -0.17592 34.6624 0.00367768C31.0031 0.0934765 27.4784 1.53026 24.8294 4.06708C22.113 1.46291 18.4986 0.00367768 14.727 0.00367768C6.71246 0.00367768 0.202047 6.49164 0 14.5511V14.6633C0 20.8146 2.24497 26.2698 4.26545 30.0189C5.11853 31.5904 6.08387 33.117 7.13901 34.5762C7.5431 35.115 7.8574 35.564 8.10435 35.8559L8.39619 36.2151L8.48599 36.3273L8.50844 36.3498L8.53089 36.3722C10.2146 38.3253 13.1555 38.5498 15.1087 36.8886C15.1311 36.8661 15.1536 36.8437 15.176 36.8212C17.1291 35.0701 17.3312 32.0843 15.625 30.1087L15.6026 30.0638L15.423 29.8618C15.2658 29.6597 15.0189 29.3455 14.727 28.9414C13.9188 27.8189 13.178 26.6515 12.5269 25.4392C10.8881 22.4309 9.42888 18.6145 9.42888 14.7531C9.49623 11.8347 11.9432 9.52236 14.8617 9.58971C17.7128 9.65705 19.9802 11.9694 20.0251 14.8205C20.0476 15.5389 20.2272 16.2348 20.5415 16.8859C21.4844 19.3104 24.2232 20.5227 26.6478 19.5798C28.4438 18.8839 29.6336 17.1553 29.6561 15.2246V14.596C29.7683 11.6775 32.2153 9.38766 35.1562 9.47746C37.94 9.56726 40.1625 11.8122 40.2748 14.596C40.2523 17.6941 39.2645 20.7472 38.1421 23.1718C37.6931 24.1371 37.1992 25.08 36.6379 25.978C36.4359 26.3147 36.2787 26.5617 36.1665 26.6964C36.1216 26.7862 36.0767 26.8311 36.0542 26.8535L36.0318 26.876L35.9869 26.9433C37.6033 24.9004 40.5442 24.5412 42.5871 26.1576C44.4953 27.6617 44.9443 30.3781 43.6198 32.4211L43.6422 32.4435V32.3986L43.6647 32.3762L43.732 32.2864C43.7769 32.1966 43.8667 32.1068 43.9565 31.9721C44.1361 31.7027 44.3606 31.3435 44.6525 30.8945C45.3933 29.6822 46.0668 28.4026 46.673 27.1229C48.1097 24.0249 49.6812 19.5349 49.6812 14.5286L49.7037 14.3715Z"
          fill="#041836"
        />
        <path
          d="M39.7135 25.1249C37.1094 25.1025 34.9991 27.2127 34.9766 29.8169C34.9542 32.4211 37.0645 34.5313 39.6686 34.5538C41.1503 34.5538 42.5647 33.8578 43.4626 32.6905C43.53 32.6007 43.5973 32.4884 43.6871 32.3986C45.1015 30.221 44.4729 27.3025 42.2953 25.9107C41.532 25.3943 40.634 25.1249 39.7135 25.1249Z"
          fill="#B7E803"
        />
      </svg> */}
    </div>
  </NavLink>
);

export default App;
