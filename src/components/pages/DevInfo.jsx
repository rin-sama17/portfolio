import { Typography } from '@mui/material'
import { KeyboardArrowLeft } from '@mui/icons-material'
import { RandomReveal } from 'react-random-reveal'
import { alphabetPersian } from '../../constants/alphabetPersian'

const Info = ({ children }) => {
  return (
    <>
      <Typography
        variant="h6"
        textAlign="left"
        color="text.primary"
        sx={{ mt: 1 }}
      >
        {children}
        <KeyboardArrowLeft sx={{ color: 'custom.main' }} />
      </Typography>
    </>
  )
}
const DevInfo = () => {
  return (
    <>
      <Info>
        {' '}
        <RandomReveal
          isPlaying
          duration={4}
          characterSet={alphabetPersian}
          characters="rin : نام"
        />
      </Info>
      <Info>
        {' '}
        <RandomReveal
          isPlaying
          duration={4}
          characterSet={alphabetPersian}
          characters="سن : 17"
        />
      </Info>
      <Info>
        {' '}
        <RandomReveal
          isPlaying
          duration={4}
          characterSet={alphabetPersian}
          characters="محل سکونت : تهران"
        />
      </Info>
    </>
  )
}
export default DevInfo
