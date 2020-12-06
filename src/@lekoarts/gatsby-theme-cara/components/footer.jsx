/** @jsx jsx */
import { Box, useColorMode, jsx } from "theme-ui"

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (any) => {
    console.log(isDark)
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <Box as="footer" variant="footer">
      <a href="https://github.com/guusyy/portfolioWebsite">
        <button
          sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
          type="button"
          aria-label="Check source code">
          Check source code of this website
        </button>
      </a>
      {/* <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Light` : `Dark`}
      </button> */}
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
    </Box>
  )
}

export default Footer
