import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Root = styled.div`
  position: relative;
  height: 100vh;
`

const SaveTheDate = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  padding: 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`

const TheDate = styled.h1`
  font-size: 40px;
  margin: 0;
  color: #fdfdfd;
`

const RSVPButton = styled.a`
  padding: 0 8px;
  font-size: 32px;
  color: #fdfdfd;

  border: 2px solid #fdfdfd;
  border-radius: 3px;

  text-decoration: none;
  &:visited {
    color: #fdfdfd;
  }
`

const Hero = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "ChristyMatt-Hero.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1800) {
            aspectRatio
            sizes
            srcSetWebp
            srcWebp
            src
            srcSet
          }
        }
      }
    }
  `)

  return (
    <Root>
      <Img
        fluid={data.file.childImageSharp.fluid}
        style={{
          height: "100%",
          // maxHeight: "70vh",
          // minHeight: "500px",
        }}
        imgStyle={{ objectPosition: "65% 70%" }}
      />
      <SaveTheDate>
        <TheDate>June 27th, 2020</TheDate>
        <RSVPButton href="/rsvp">RSVP</RSVPButton>
      </SaveTheDate>
    </Root>
  )
}

export default Hero
