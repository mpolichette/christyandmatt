import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import SEO from "../components/seo"

const Body = styled.section`
  margin: 1rem auto 0;
  padding: 2rem 3rem;
  width: 80vw;
  max-width: 960px;
  background: white;
`

const IndexPage = () => (
  <Layout>
    <SEO title="❤️" />
    <Hero />
    <Body>
      <h1 id="OurStory">Us</h1>
      <h2>Christine Lasher</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et error ea
        vel? Tempore fuga voluptates excepturi officiis quidem esse, voluptatum
        quasi cum, tenetur at, accusamus recusandae distinctio neque cumque nam
        quos itaque quis. Voluptas error consectetur sit doloribus nam quam
        architecto aspernatur ipsum consequuntur nesciunt dignissimos maiores
        eos itaque repudiandae totam dolorum recusandae, quia minima impedit
        omnis laudantium, ullam facere accusamus! Sapiente magnam perspiciatis
        illo beatae pariatur. Fugit sunt et laudantium velit exercitationem
        facilis reiciendis aliquam blanditiis sequi veniam! Aperiam, porro autem
        amet veniam nesciunt necessitatibus officiis distinctio eum saepe,
        dolorum eaque unde vel in ratione possimus hic labore corporis!
      </p>
      <h2>Matt Polichette</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et error ea
        vel? Tempore fuga voluptates excepturi officiis quidem esse, voluptatum
        quasi cum, tenetur at, accusamus recusandae distinctio neque cumque nam
        quos itaque quis. Voluptas error consectetur sit doloribus nam quam
        architecto aspernatur ipsum consequuntur nesciunt dignissimos maiores
        eos itaque repudiandae totam dolorum recusandae, quia minima impedit
        omnis laudantium, ullam facere accusamus! Sapiente magnam perspiciatis
        illo beatae pariatur. Fugit sunt et laudantium velit exercitationem
        facilis reiciendis aliquam blanditiis sequi veniam! Aperiam, porro autem
        amet veniam nesciunt necessitatibus officiis distinctio eum saepe,
        dolorum eaque unde vel in ratione possimus hic labore corporis!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et error ea
        vel? Tempore fuga voluptates excepturi officiis quidem esse, voluptatum
        quasi cum, tenetur at, accusamus recusandae distinctio neque cumque nam
        quos itaque quis. Voluptas error consectetur sit doloribus nam quam
        architecto aspernatur ipsum consequuntur nesciunt dignissimos maiores
        eos itaque repudiandae totam dolorum recusandae, quia minima impedit
        omnis laudantium, ullam facere accusamus! Sapiente magnam perspiciatis
        illo beatae pariatur. Fugit sunt et laudantium velit exercitationem
        facilis reiciendis aliquam blanditiis sequi veniam! Aperiam, porro autem
        amet veniam nesciunt necessitatibus officiis distinctio eum saepe,
        dolorum eaque unde vel in ratione possimus hic labore corporis!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et error ea
        vel? Tempore fuga voluptates excepturi officiis quidem esse, voluptatum
        quasi cum, tenetur at, accusamus recusandae distinctio neque cumque nam
        quos itaque quis. Voluptas error consectetur sit doloribus nam quam
        architecto aspernatur ipsum consequuntur nesciunt dignissimos maiores
        eos itaque repudiandae totam dolorum recusandae, quia minima impedit
        omnis laudantium, ullam facere accusamus! Sapiente magnam perspiciatis
        illo beatae pariatur. Fugit sunt et laudantium velit exercitationem
        facilis reiciendis aliquam blanditiis sequi veniam! Aperiam, porro autem
        amet veniam nesciunt necessitatibus officiis distinctio eum saepe,
        dolorum eaque unde vel in ratione possimus hic labore corporis!
      </p>
    </Body>
  </Layout>
)

export default IndexPage
