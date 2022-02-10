import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <MainContainer>
        <main>{children}</main>
        <Footer />
      </MainContainer>
    </>
  )
}

const MainContainer = styled.div`
  max-width: 64.5rem;  
  margin: 0 auto;
  padding: 0 1rem 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
