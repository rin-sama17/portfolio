import { Typography, Box } from '@mui/material'
import { Copyright } from '@mui/icons-material'

const SidebarFooter = () => {
  return (
    <>
      {' '}
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'end',
          height: 100,
        }}
      >
        <Typography variant="subtitle2" color="text.secondary">
          ساخته شده توسط حسین سرخوش <Copyright />
        </Typography>
      </Box>
    </>
  )
}
export default SidebarFooter
