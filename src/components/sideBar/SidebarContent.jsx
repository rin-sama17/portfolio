import { Divider, Box } from '@mui/material'

import { SidebarHeader, SidebarFooter, SidebarTabs } from '.'
import { grey } from '@mui/material/colors'

const SidebarContent = () => {
  return (
    <Box
      sx={{
        mt: 2,
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <SidebarHeader />
      <Divider
        variant="middle"
        sx={{ my: 1, backgroundColor: 'custom.main' }}
      />
      <SidebarTabs />

      <Divider variant="middle" sx={{ mt: 1, backgroundColor: grey[800] }} />
      <SidebarFooter />
    </Box>
  )
}
export default SidebarContent
