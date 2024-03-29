import React from "react";
import {
  FooterContainer,
  FooterContent,
  FooterCol,
  FooterText,
  FooterLinks,
  FooterLink,
  FooterSocials,
  FooterSocial,
  FooterCopyright,
  FooterLinksSection,
  ContactSection,
  ConnectSection,
  StayInTouch,
  PrivacyPolicy,
  PrivacyPolicyMobile,
  FooterImage,
} from "./Footer.styles";
import MobileImage from "../../images/mobileimage.png";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterCol>
          <StayInTouch>
            <FooterText>STAY IN TOUCH</FooterText>
          </StayInTouch>

          <input
            type="text"
            placeholder="you@mail.com"
            id="fname"
            name="fname"
          />

          <PrivacyPolicyMobile>
            <FooterText>PRIVACY POLICY</FooterText>
          </PrivacyPolicyMobile>

          <ContactSection>
            <FooterText>CONTACT</FooterText>
            <FooterText>EMAIL@ENVISIONACCELERATOR.COM</FooterText>
          </ContactSection>
        </FooterCol>
        <FooterCol>
          <ConnectSection>
            <FooterText>CONNECT</FooterText>
          </ConnectSection>

          <FooterSocials>
            <FooterSocial />
            <FooterSocial />
            <FooterSocial />
          </FooterSocials>
          <PrivacyPolicy>
            <FooterText>PRIVACY POLICY</FooterText>
          </PrivacyPolicy>
        </FooterCol>
        <FooterLinksSection>
          <div>
            <FooterImage src={MobileImage} />
            <FooterLinks>
              <FooterLink>
                <a href="#">WALL OF LOVE</a>
              </FooterLink>
              <FooterLink>
                <a href="/about">ABOUT</a>
              </FooterLink>
              <FooterLink>
                <a href="/portfolio">PORTFOLIO</a>
              </FooterLink>
              <FooterLink>
                <a href="/partners">PARTNERS</a>
              </FooterLink>
              <FooterLink>
                <a href="/accelerator">ACCELERATOR</a>
              </FooterLink>
              <FooterLink>
                <a href="/team">THE TEAM</a>
              </FooterLink>
            </FooterLinks>
          </div>
        </FooterLinksSection>
      </FooterContent>

      <FooterCopyright>
        Copyright © 2021 Envision Accelerator. All rights reserved.
      </FooterCopyright>
    </FooterContainer>
  );
}
