import React from "react"
import ProjectCard from "../@lekoarts/gatsby-theme-cara/components/project-card"

const components = {
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ link, title, bgImage, bgColor, children, stack}) => (
    <ProjectCard link={link} title={title} bgImage={bgImage} bgColor={bgColor} stack={stack} >
      {children}
    </ProjectCard>
  ),
}

export default components
