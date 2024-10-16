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
          characters="نام : حسین سرخوش"
        />
      </Info>
      <Info>
        {' '}
        <RandomReveal
          isPlaying
          duration={4}
          characterSet={alphabetPersian}
          characters="سن : ۱۹"
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
    
          <Typography
           variant="h6"
           textAlign="left"
           color="text.primary"
           sx={{ mt: 1 ,direction:'ltr'}}
          >
            با ۳ سال سابقه برنامه نویسی در زمینه فرانت اند و فریمورک های روز دنیا اعم از tailwind css , mui , bootsteap 5 و غیره
            </Typography>
    </>
  )
}
export default DevInfo
