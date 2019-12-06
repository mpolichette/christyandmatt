import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import SEO from "../components/seo"

const Body = styled.article`
  margin: 1rem auto 0;
  padding: 2rem 3rem;
  width: 80vw;
  max-width: 960px;
  background: #fffff8;
  border-radius: 4px;
`

const TheDate = styled.div`
  font-size: 18px;
`

const Message = styled.div`
  padding: 24px 0;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before,
  &:after {
    content: "🎉";
    font-size: 28px;
    margin: 8px;
  }
`

const SaveTheDate = styled.section`
  text-align: center;
`

const MoreToCome = styled.div`
  font-size: 18px;
  font-weight: bold;
`

const IndexPage = () => (
  <Layout>
    <SEO title="❤️" />
    <Hero />
    <Body>
      <SaveTheDate>
        <h2>Save the date!</h2>
        <TheDate>
          June 27th 2020 <br /> Alta, Utah
        </TheDate>
        <Message>
          <span>We are so exited to get married!</span>
        </Message>
        <MoreToCome>
          We will be adding more info here, check back again soon!
        </MoreToCome>
      </SaveTheDate>
      {/* <h1 id="OurStory">Us</h1> */}
      {/* <h2>Christine Lasher</h2> */}
      {/* <h2>Matt Polichette</h2> */}
    </Body>
  </Layout>
)

export default IndexPage
