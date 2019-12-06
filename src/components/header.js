import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Root = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 20px;
  background: transparent;
  color: #4b5840;
  z-index: 5;
`

const Content = styled.div`
  margin: 0 auto;
  padding: 20px 0;

  display: flex;
  align-items: center;
`

const HomeLink = styled(Link)`
  padding: 0.5rem 1rem;
  color: #4b5840;
  text-decoration: none;
  h1 {
    margin: 0;
    font-size: 18px;

    @media (min-width: 768px) {
      font-size: 24px;
    }
  }
`

const Nav = styled.nav`
  margin-left: auto;
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`

const Links = styled.ul`
  li {
    display: inline-block;
    padding: 8px;
  }
`

const Route = styled(Link)`
  color: #4b5840;
  text-decoration: none;
`

const RSVPLink = styled(Link)`
  padding: 4px 12px;
  color: #4b5840;
  text-decoration: none;
  border: 1px solid #4b5840;
  border-radius: 3px;
`

const Header = ({ siteTitle }) => (
  <Root>
    <Content>
      <HomeLink to="/">
        <h1>{siteTitle}</h1>
      </HomeLink>
      {/* <Nav>
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
      </Nav> */}
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
