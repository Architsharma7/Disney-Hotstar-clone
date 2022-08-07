import styled from "styled-components";
import React, { useEffect } from "react";
import { provider } from "../firebase";
import { getAuth, signInWithPopup} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { selectUserName, 
         selectUserPhoto, 
         setSignoutState, 
         setUserLoginDetails, 
} from "../features/users/userSlice";

const Header = (props) => {
        const auth = getAuth();
    const dispatch = useDispatch();
    const username = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    const navigate = useNavigate();

    useEffect(() => {
      auth.onAuthStateChanged(async (user) => {
        if(user){
            setUser(user)
            navigate('./home');
        }
      });
    }, [username]);
    

    const auth = getAuth();
    const dispatch = useDispatch();
    const history = useNavigate();
    const username = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    
    const handleAuth = () => {
        if (!username){
        signInWithPopup(auth, provider)
        .then((result) => {
            setUser(result.user);
        })
        .catch(error => {
            alert(error.message);
        });
    }   else if (username){
        auth.signOut().then(() => {
            dispatch(setSignoutState())
            navigate('/');
        }).catch((err) => alert(err.message));
    }
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
            <SignOut>
                <UserImg src = {userPhoto} alt= {username} />
            </SignOut>
            <DropDown>
                <span onClick={handleAuth}>Sign Out</span>
            </DropDown>
            
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

const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 0;
    background-color: rgb(19, 19, 19);
    border: 1px solid rgba(151,151,151,0.34);
    border-radius: 5px;
    box-shadow: rgb(0 0 0 /50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 1px;
    width: 90px;
    opacity: 1;
    cursor: pointer;
`;

const SignOut = styled.div`
    position: relative;
    height: 48px;
    display: flex;
    width: 48px;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    ${UserImg}{
       border-radius: 50%;
       width: 100%;
       height: 100%;
    }

    &:hover {
        ${DropDown} {
            opacity: 1;
            transition-duration: 1s;
        }
    }
`;

export default Header;