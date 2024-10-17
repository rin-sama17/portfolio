import { Box, Typography, LinearProgress } from '@mui/material'
import CustomDivider from '../../common/CustomDivider'

const Skill = ({ name, color, value, icon }) => {
  return (
    <>
      <CustomDivider
        icon={<Box component="img" src={icon} sx={{ height: 30 }} />}
        label={name}
        color={color}
        align="right"
        sx={{ color: '#000', p: 3 }}
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
            color={color}
            sx={{
              height: 10,
              borderRadius: 2,
            }}
          />
        </Box>
      </Box>
    </>
  )
}
export default Skill
