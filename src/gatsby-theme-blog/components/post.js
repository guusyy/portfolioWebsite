import React from "react"

import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "./layout"
import SEO from "./seo"
import PostTitle from "./post-title"
import PostFooter from "./post-footer"
import PostHero from "./post-hero"

import "./imgStyle.css"

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => (
  <Layout location={location} title={title}>
    <SEO
      title={post.title}
      description={post.excerpt}
      imageSource={
        post.socialImage
          ? post.socialImage?.childImageSharp?.fluid.src
          : post.image?.childImageSharp?.fluid.src
      }
      imageAlt={post.imageAlt}
    />
    <main>
      <article>
        <header>
          <PostHero post={post} />
          <PostTitle>{post.title}</PostTitle>
        </header>
        <section>
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>
      </article>
    </main>
    <PostFooter {...{ previous, next }} />
  </Layout>
)

export default Post
