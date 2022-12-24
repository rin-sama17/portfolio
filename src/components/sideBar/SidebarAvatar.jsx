import { Avatar } from '@mui/material'
import logo from '../../assets/logo.jpg'
const CustomAvatar = () => {
  return (
    <Avatar
      src={logo}
      variant="rounded"
      alt="Rin"
      sx={{
        m: '0 auto',
        mb: 2,
        width: 200,
        height: 200,
        display: {
          xs: 'none',
          sm: 'none',
          md: 'block',
          lg: 'block',
          xl: 'block',
        },
      }}
    >
      rin
    </Avatar>
  )
}
export default CustomAvatar
