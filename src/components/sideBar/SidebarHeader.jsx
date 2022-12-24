import { Typography, Box, IconButton } from '@mui/material'
import { RandomReveal } from 'react-random-reveal'
import { alphabetPersian } from '../../constants/alphabetPersian'
import { socials } from '../../constants/socialMedia'
import { SidebarAvatar } from '.'
import ThemeButton from '../ThemeActionButton'

const SidebarHeader = () => {
  return (
    <>
      <SidebarAvatar />
      <ThemeButton />
      <Typography color="text.primary" variant="h5">
        rin
      </Typography>

      <Typography color="text.primary" variant="caption">
        {' '}
        <RandomReveal
          isPlaying
          characterSet={alphabetPersian}
          duration={4}
          characters="برنامه نویس ری اکت"
        />
      </Typography>

      <Box component="div" sx={{ m: '0 auto', textAlign: 'center' }}>
        {socials.map((social, index) => (
          <IconButton
            label={social.label}
            key={index}
            href={social.link}
            target="_blank"
          >
            {social.icon}
          </IconButton>
        ))}
      </Box>
    </>
  )
}
export default SidebarHeader
