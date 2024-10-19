import { HelmetProvider, Helmet } from 'react-helmet-async'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@mui/material'
import { prefixer } from 'stylis'
import rtlPlugin from 'stylis-plugin-rtl'
import createCache from '@emotion/cache'
import Grid from '@mui/material/Unstable_Grid2'

import { darkTheme, lightTheme } from './theme/theme'

const cacheRTL = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
})

const MainLayout = ({ children, mode }) => {
  const theme = mode === 'dark' ? darkTheme : lightTheme
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>وبسایت شخصی</title>
          </Helmet>
          <Grid container sx={{ height: '100vh', height:"100svh" }}>
            {children}
          </Grid>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MainLayout
