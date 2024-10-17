import { WbSunny, ModeNight } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { useContext } from 'react'
import { useTheme } from '@mui/material/styles'
import MainContext from '../context'
const ThemeButton = () => {
  const theme = useTheme()
  const { hndleThemeChange } = useContext(MainContext)
  return (
    <Box
     
    >
      <Button
        size="small"
        onClick={hndleThemeChange}
        sx={{
          ml: 1,
          color: theme.palette.mode === 'dark' ? 'warning' : 'info',
        }}
      >
        {' '}
        {theme.palette.mode === 'dark' ? (
          <ModeNight sx={{ mr: 1 }} />
        ) : (
          <WbSunny sx={{ mr: 1 }} />
        )}
        {theme.palette.mode === 'dark' ? 'روز' : 'شب'}
      </Button>
    </Box>
  )
}
export default ThemeButton
