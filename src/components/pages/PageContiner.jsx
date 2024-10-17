import { Box, useMediaQuery, useTheme } from '@mui/material'
const PageContiner = ({ children, bgPicture }) => {
   const theme = useTheme()
   const isXs = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgPicture} )`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        overflow: 'hidden',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: isXs?0:3,
      }}
    >
      {children}
    </Box>
  )
}
export default PageContiner
