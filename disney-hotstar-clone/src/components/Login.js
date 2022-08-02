import styled from "styled-components";
import React from "react";

const Login = (props) => {
    return(
    <Container>
        <Content>
          <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" />
            <SignUp>GET ALL THERE</SignUp>
            <CTALogoTwo src="/images/cta-logo-two.png" />
          </CTA>
          <BgImage />
        </Content>
    </Container>
    );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;
  
const BgImage = styled.div`
  background-image: url("/images/login-background.jpeg");
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  text-align: center;
  width: 100%;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: white;
  background-color dodgerblue;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 5px;
  cursor: pointer;

  &:hover{
    background-color: deepskyblue;
  }
`;

const CTALogoTwo = styled.img`
margin-bottom: 20px;
max-width: 600px;
display: inline-block;
vertical-align: bottom;
margin-top: 20px;
width: 100%;
`;

export default Login;