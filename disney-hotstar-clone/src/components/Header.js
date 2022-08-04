import styled from "styled-components";
import React from "react";
import { provider } from "../firebase";
import { getAuth, signInWithPopup} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserName, 
         selectUserPhoto, 
         setUserLoginDetails, 
} from "../features/users/userSlice";

const Header = (props) => {
    const auth = getAuth();
    const dispatch = useDispatch();
    const history = useNavigate();
    const username = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const handleAuth = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            setUser(result.user);
        })
        .catch(error => {
            alert(error.message);
        });
    };

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        );
    };

    return(
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt= "" />
            </Logo>
            
            {!username ? (<Login onClick={handleAuth}>Login</Login>): (
            <>
            <NavMenu>
                <a href="/home">
                    <img src="/images/home-icon.svg" alt="" />
                    <span>HOME</span>
                </a>
                <a href="/search">
                    <img src="/images/search-icon.svg" alt="" />
                    <span>SEARCH</span>
                </a>
                <a href="/watchlist">
                    <img src="/images/watchlist-icon.svg" alt="" />
                    <span>WATCHLIST</span>
                </a>
                <a href="/originals">
                    <img src="/images/original-icon.svg" alt="" />
                    <span>ORIGINALS</span>
                </a>
                <a href="/movies">
                    <img src="/images/movie-icon.svg" alt="" />
                    <span>MOVIES</span>
                </a>
                <a href="/series">
                    <img src="/images/series-icon.svg" alt="" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            
            </>
)}     
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
cursor: pointer;

img{
    display: block;
    width: 100%;
}
`;

const NavMenu = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
flex-flow: row nowrap;
height: 100%;
margin: 0;
padding: 0;
position: relative;
margin-right: auto;
margin-left: 25px;

@media (max-width: 768px){
    display: none;
}

a{
    display: flex;
    padding: 0 12px;
    align-items: center;

    img{
        height: 20px;
        min-width: 20px;
        width: 20px;
        z-index: auto;
    }

    span{
        color: rgb(249,249,249);
        font-size: 13px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;

        &:before{
            background-color: rgb(249,249,249);
            border-readius: 0 0 4px 4px;
            bottom: -6px;
            content: "";
            opacity: 0;
            height: 2px;
            position: absolute;
            right: 0px;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            visibility: hidden;
            width: auto;
            left: 0px;
        } 
    }
    &:hover{
      span:before{
        visibility: visible;
        opacity: 1 !important;
        transform: scaleX(1);
       }
    }
}
`;

const Login = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid rgb(249,249,249);
    border-radius: 4px;
    transition: all 200ms ease 0s;
    cursor: pointer;

    &:hover{
        background-color: rgb(249,249,249);
        color: rgb(1, 1, 9);
    }
`;

const UserImg = styled.div`
height: 100%;
`;

export default Header;