import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { GitHub, Twitter } from 'react-feather'

const Footer = () => (
  <FooterContainer>
    <FooterLeftContainer>
      <FooterText>
        © {new Date().getFullYear()}, Built with
        {` `}
        <LinkText 
          href='https://www.gatsbyjs.com'
          target='_blank'
        >Gatsby</LinkText>
      </FooterText>
    </FooterLeftContainer>
    <FooterRightContainer>
      <SocialLink
        href='https://github.com/currytay'
        target='_blank'
      >
        <GitHub size={20} strokeWidth={2.5} />
      </SocialLink>
      <SocialLink twitter
        href='https://twitter.com/taylorcurry___'
        target='_blank'
      >
        <Twitter size={20} strokeWidth={2.5} />
      </SocialLink>
    </FooterRightContainer>
  </FooterContainer>
)

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;    
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid #EEEEEE;
`;

const FooterLeftContainer = styled.footer`
`;

const FooterRightContainer = styled.footer`
  display: flex;
  flex-direction: row;
  gap: .5rem;
`;


const FooterText = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const LinkText = styled.a`
  transition: all .2s ease;

  :hover {
    color: #26b37E;
    text-decoration: underline;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.25rem;
  width: 2.25rem;  
  border-radius: 2rem;
  cursor: pointer;
  color: #FFF;
  transition: all .2s ease;
  background-color: #35363A;
`;

export default Footer
