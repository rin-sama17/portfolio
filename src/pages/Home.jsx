import { useEffect, useRef, useCallback, useState } from 'react'
import { Typography, Box, useTheme, useMediaQuery } from '@mui/material'
import { loadFull } from 'tsparticles'
import { Helmet } from 'react-helmet-async'
import TextTransition, { presets } from 'react-text-transition'
import Particles from 'react-particles'
import Typed from 'typed.js'

import { links } from '../constants/particles'
import { PageContiner } from '../components/pages'
import bg01 from '../assets/backgrounds/bg01.jpeg'

const Home = ({ title }) => {
  const [index, setIndex] = useState(0)
  const theme = useTheme()
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"))

  const nameEl = useRef(null)

  const strings = ['توسعه دهنده ری اکت هستم', 'برنامه نویس هستم', 'جونیور هستم']

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ['حسین سرخوش'],
      typeSpeed: 1,
      backSpeed: 20,
      backDelay: 10,
      showCursor: false,
    })

    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000)
    return () => {
      typedName.destroy()
      clearTimeout(intervalId)
    }
  }, [])

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container)
  }, [])
  return (
    <PageContiner bgPicture={bg01}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Particles
        options={links}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
      />

      <Typography
      variant = {isSmUp? "h3" :"h5"}
        ref={nameEl}
        sx={{
          color: 'whitesmoke',
          mb: 1,
        }}
      ></Typography>
      <Box component="div" sx={{ display: 'flex' }}>
        <TextTransition springConfig={presets.wobbly}>
          <Typography
               variant = {isSmUp?"h4" :"h6"}

            sx={{
              mt: 4,
              color: 'whitesmoke',
              textDecoration: 'underline',
              textDecorationColor: '#e53935',
            }}
          >
            {strings[index % strings.length]}
          </Typography>
        </TextTransition>
        <Typography
                     variant = {isSmUp?"h4" :"h6"}

          sx={{
            mt: 4,
            mr: 1,
            color: 'custom.main',
          }}
        >
          من یک{' '}
        </Typography>
      </Box>
    </PageContiner>
  )
}
export default Home
