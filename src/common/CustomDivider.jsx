import { useState, useEffect } from 'react'
import { Typography, Chip, Divider, Slide, useMediaQuery, useTheme } from '@mui/material'
const CustomDivider = ({ label, icon, align, ...props }) => {
const theme = useTheme()
const isXs = useMediaQuery(theme.breakpoints.down("sm")) 
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)

    return () => {
      setLoading(false)
    }
  }, [])

  return (
    <Slide
      direction="down"
      in={loading}
      style={{ transitionDelay: loading ? '200ms' : '0ms' }}
    >
      <Divider
        variant="middle"
        textAlign={align}
        sx={{
          '&::before, &::after': {
            borderColor: 'custom.main',
          },
          my: 2,
        }}
      >
        <Chip
          icon={icon}
          sx={{ backgroundColor: 'custom.main', p: {xs:0,sm:3} }}
          label={
            <Typography
              variant="body1"
              color="text.primary"
              sx={{ textAlign: 'center' }}
            >
              {label}{' '}
            </Typography>
          }
          {...props}
        />
      </Divider>
    </Slide>
  )
}
export default CustomDivider
