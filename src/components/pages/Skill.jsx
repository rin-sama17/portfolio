import { Box, Typography, LinearProgress } from '@mui/material'
import CustomDivider from '../../common/CustomDivider'

const Skill = ({ name, bgcolor, value, icon }) => {
  return (
    <>
      <CustomDivider
        icon={<Box component="img" src={icon} sx={{ height: 30 }} />}
        label={name}
       
        align="right"
        sx={{ color: '#000',p: {xs:2} ,backgroundColor:bgcolor}}
      />
      <Box
        sx={{
          display: 'flex',
          p: 1,
          alignItems: 'center',
        }}
      >
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.primary">
            {Math.round(value)}%
          </Typography>
        </Box>
        <Box
          sx={{
            width: 1,
            minWidth: 35,
          }}
        >
          <LinearProgress
            variant="determinate"
            value={value}
            sx={{
              height: 10,
              borderRadius: 2,
              ".muirtl-1qrcf79-MuiLinearProgress-bar1 ":{
                backgroundColor:bgcolor
              }
            }}
          />
        </Box>
      </Box>
    </>
  )
}
export default Skill
