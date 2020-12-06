import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Hero from "@lekoarts/gatsby-theme-cara/src/components/hero"
import Projects from "@lekoarts/gatsby-theme-cara/src/components/projects"
import About from "@lekoarts/gatsby-theme-cara/src/components/about"
import Contact from "@lekoarts/gatsby-theme-cara/src/components/contact"

const Cara = () => {
  const size = useWindowSize();

  return (
    <Layout>
      <Parallax pages={ 601 < size.width ? 5 : 6.2 }>
        <Hero offset={ 601 < size.width ? 0 : 0 } factor={ 601 < size.width ? 1 : 1 } />
        <Projects offset={ 601 < size.width ? 1 : 1.5 } factor={ 601 < size.width ? 2 : 2 } />
        <About offset={ 601 < size.width ? 3 : 4.25 } factor={ 601 < size.width ? 1 : 1 } />
        <Contact offset={ 601 < size.width ? 4 : 5.25 } factor={ 601 < size.width ? 1 : 1 } />
      </Parallax>
    </Layout>
  )
}

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = React.useState({
    width: undefined,
    height: undefined,
  });

  React.useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

export default Cara