import { Menu } from '@mui/icons-material'
import { Fab, Box } from '@mui/material'
import { useContext } from 'react'
import MainContext from '../../context'

const DrawerButton = () => {
  const { setDrawerOpen } = useContext(MainContext)
  return (
    <Box
      sx={{
        m: 2,
        display: {
          xs: 'block',
          sm: 'block',
          md: 'none',
          lg: 'none',
          xl: 'none',
        },
        position: 'absolute',
      }}
    >
      <Fab color="custom" onClick={() => setDrawerOpen(true)}>
        <Menu />
      </Fab>
    </Box>
  )
}
export default DrawerButton
