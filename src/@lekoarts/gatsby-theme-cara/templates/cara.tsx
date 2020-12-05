import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Hero from "@lekoarts/gatsby-theme-cara/src/components/hero"
import Projects from "@lekoarts/gatsby-theme-cara/src/components/projects"
import About from "@lekoarts/gatsby-theme-cara/src/components/about"
import Contact from "@lekoarts/gatsby-theme-cara/src/components/contact"

console.log(window.screen.width)

const Cara = () => (
  <Layout>
    <Parallax pages={ 601 < window.screen.width ? 5 : 6.2 }>
      <Hero offset={ 601 < window.screen.width ? 0 : 0 } factor={ 601 < window.screen.width ? 1 : 1 } />
      <Projects offset={ 601 < window.screen.width ? 1 : 1.5 } factor={ 601 < window.screen.width ? 2 : 2 } />
      <About offset={ 601 < window.screen.width ? 3 : 4.25 } factor={ 601 < window.screen.width ? 1 : 1 } />
      <Contact offset={ 601 < window.screen.width ? 4 : 5.25 } factor={ 601 < window.screen.width ? 1 : 1 } />
    </Parallax>
  </Layout>
)


export default Cara
