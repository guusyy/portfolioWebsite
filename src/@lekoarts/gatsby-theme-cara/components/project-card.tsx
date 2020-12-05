/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bgImage: string
  bgColor: string
  stack: string
}

const ProjectCard = ({ link, title, children, bgImage, bgColor, stack }: ProjectCardProps) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderColor: `cardColor`,
      borderStyle: `solid`,
      borderWidth: `1px`,
      borderRadius: `lg`,
      px: 4,
      py: [4, 5],
      color: `cardColor`,
      backgroundColor: `background` || `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `cardColorHover`,
        background: `${bgColor}`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
        // transform: `scale(0.8) rotate(-16deg)`,
        // borderRadius: `20px`,
        // boxShadow: `rgba(68, 77, 136, 0.2) 0px 32px 74px`,
        // overflow: `hidden`
      },
    }}
  >
    <div sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`, color: `textMuted` }}> { stack } </div>
    <div
      sx={{
        letterSpacing: `wide`,
        pt: 4,
        fontSize: [4, 5],
        fontWeight: `medium`,
        lineHeight: 1,
        fontFamily: `Playfair Display`
      }}
    >
      {title}
    </div>
    <div sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`, pt: `3` }}>{children}</div>
    <div sx={{ 
              opacity: 0, 
              backgroundImage: `url(${bgImage})`,
              backgroundRepeat: `no-repeat`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
              position: `absolute`, 
              width: `100%`,
              height: `100%`,
              top: `0`,
              left: `0`,
              borderRadius: `inherit`,
              transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
              "&:hover": {
                opacity: 0.1
              }
            }} ></div>
  </a>
)

export default ProjectCard
