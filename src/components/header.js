import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'
import QuillImage from '../images/quill.png'

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderText>
      <Link
        to="/"
        style={{
          textDecoration: `none`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image 
          src={QuillImage} 
          alt='Icon of person using laptop'
        />
        {siteTitle}
      </Link>
    </HeaderText>
  </HeaderContainer>
)

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;    
  align-items: center;
  background-color: #2C2D30;
  padding: 1.5rem 0;
  margin: 0 0 2rem;
  position: sticky;
  top: 0;
  z-index: 2;
`;

const HeaderText = styled.h1`
  font-size: 1.25rem;
  font-weight: 800;
  margin: 0;
  color: #FFF;
`;

const Image = styled.img`
  height: 1.75rem;
  width: 1.75rem;
  margin-right: .5rem;
`;

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header