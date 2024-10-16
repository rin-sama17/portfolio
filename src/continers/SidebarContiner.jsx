import Grid from '@mui/material/Unstable_Grid2'
import { grey, blue } from '@mui/material/colors'
import { useTheme } from '@mui/material/styles'
const SidebarContiner = ({ children }) => {
  const theme = useTheme()
  return (
    <Grid
      xs={0}
      sm={0}
      md={3}
      lg={3}
      xl={2}
      sx={{
        backgroundColor: theme.palette.mode === 'dark' ? grey[900] : blue[50],
        height: '100vh',
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      {children}
    </Grid>
  )
}

export default SidebarContiner
