import { useTheme } from '@mui/material/styles'
import { Card, useMediaQuery } from '@mui/material'
const PageCard = ({ children, width }) => {
  const theme = useTheme()
const isXs = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <Card
      sx={{
        backgroundColor:
          theme.palette.mode === 'dark'
            ? 'rgba(0, 0, 0, 0.8)'
            : 'rgba(255, 255, 255, 0.8)',
        overflowY: 'scroll',
        width: isXs ? 1 : width,
      }}
    >
      {children}
    </Card>
  )
}
export default PageCard
