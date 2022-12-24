import { Box } from '@mui/material'
const PageContiner = ({ children, bgPicture }) => {
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
        p: 3,
      }}
    >
      {children}
    </Box>
  )
}
export default PageContiner
