import { Drawer } from '@mui/material'
import { SidebarContent } from '../sideBar'
import MainContext from '../../context'
import { useContext } from 'react'

const PortfolioDrawer = () => {
  const { setDrawerOpen, drawerOpen } = useContext(MainContext)
  return (
    <Drawer
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      sx={{
        display: {
          xs: 'block',
          sm: 'block',
          md: 'none',
          lg: 'none',
          xl: 'none',
        },
        '& 	.MuiDrawer-paper': {
          width: 300,
        },
      }}
    >
      <SidebarContent />
    </Drawer>
  )
}
export default PortfolioDrawer
