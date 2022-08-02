import styled from "styled-components";
import React from "react";

const Header = (props) => {
    return(
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="" />
            </Logo>
        </Nav>
    )
};

const Nav = styled.nav`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   height: 60px;
   background-color: rgb(1, 1, 9);
   background-color: rgb(1, 1, 9);
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 35px;
   letter-spacing: 16px;
   z-index: 3;
`;

const Logo = styled.a`
padding: 0;
width: 80px;
margin-top: 4px;
max-height: 60px;
font-size: 0;
display: inline-block;

img{
    display: block;
    width: 100%;
}
`;

export default Header;