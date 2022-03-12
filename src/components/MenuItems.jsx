import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Page = styled.div`
    color:            ${props => props.theme.textColor};
    transition: all .5s ease;
`;



const  MenuItems = (props) => {
  const { pathname } = useLocation();


  return (
    
      <Menu

        mode="horizontal"
        style={{
          display: "flex",
          fontSize: "17px",
          fontWeight: "500",
          width: "100%",
          justifyContent: "center",
          backgroundColor: props.theme.dark.pageBackground,
          color: props.theme.dark.textColor,
        }}
        defaultSelectedKeys={[pathname]}
      >
      {/* <Page> */}
        <Menu.Item key="/buildbattleteam">
          <NavLink to="/buildbattleteam"><Page>🚀Team Builder</Page></NavLink>
        </Menu.Item>
        <Menu.Item key="/wallet">
          <NavLink to="/wallet"><Page>👛 Match History</Page></NavLink>
        </Menu.Item>
        <Menu.Item key="/TestNFTBalancesDeleteMe">
          <NavLink to="/TestNFTBalancesDeleteMe"><Page>🏦 Barter+(test)</Page></NavLink>
        </Menu.Item>
        <Menu.Item key="/MagicItems">
          <NavLink to="/RedSatelliteCount"><Page>🧙‍♂️ Magic Items</Page></NavLink>
        </Menu.Item>
        <Menu.Item key="/PolyBridge">
          <NavLink to="/RedSatelliteCount"><Page>🌉 PolyBridge</Page></NavLink>
        </Menu.Item>
        <Menu.Item key="/Messages">
          <NavLink to="/RedSatelliteCount"><Page>💬 Messages</Page></NavLink>
        </Menu.Item>
        <Menu.Item key="/Whitepaper">
          <NavLink to="/RedSatelliteCount"><Page>🕮 WhitePaper</Page></NavLink>
        </Menu.Item>
      {/* </Page> */}
      </Menu>
    
  );
}

export default MenuItems;
