/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { Link } from "gatsby"

const PostLink = ({ title, slug, excerpt }) => (
  <article>
    <header>
      <Styled.h2
        sx={{
          mb: 1,
        }}
      >
        <Styled.a
          as={Link}
          sx={{
            textDecoration: `none`,
          }}
          to={slug}
        >
          {title || slug}
        </Styled.a>
      </Styled.h2>
    </header>
    <section>
      <Styled.p>{excerpt}</Styled.p>
    </section>
  </article>
)

export default PostLink
