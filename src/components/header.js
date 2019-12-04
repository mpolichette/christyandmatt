import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Root = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
  color: #4b5840;
  z-index: 5;
`

const Content = styled.div`
  height: 50px;
  margin: 0 auto;
  padding: 0 3rem;
  max-width: 960px;

  display: flex;
  align-items: center;
`

const HomeLink = styled(Link)`
  /* color: #3b3b3b; */
  color: #4b5840;
  text-decoration: none;
  h1 {
    margin: 0;
    font-size: 24px;
  }
`

const Nav = styled.ul`
  margin-left: auto;
`

const Links = styled.ul`
  li {
    display: inline-block;
    padding: 8px;
  }
`

const Route = styled(Link)`
  /* color: #3b3b3b; */
  color: #4b5840;
  text-decoration: none;
`

const RSVPLink = styled(Link)`
  /* color: #3b3b3b; */
  color: #4b5840;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <Root>
    <Content>
      <HomeLink to="/">
        <h1>{siteTitle}</h1>
      </HomeLink>
      <Nav>
        <Links>
          <li>
            <Route to="#OurStory">Our Story</Route>
          </li>
          <li>
            <Route to="#venue">Venue</Route>
          </li>
          <li>
            <RSVPLink to="/rsvp">RSVP</RSVPLink>
          </li>
        </Links>
      </Nav>
    </Content>
  </Root>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
