import { useState, useEffect } from 'react'
import { CardContent, Typography, Slide, Card, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Sms } from '@mui/icons-material'
import { Helmet } from 'react-helmet-async'

import { PageCard, PageContiner } from '../components/pages'
import CustomDivider from '../common/CustomDivider'

import bg05 from '../assets/backgrounds/bg05.png'
import worldMap from '../assets/map.svg'

const Contact = ({ title }) => {
  const [loading, setLoading] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    setLoading(true)

    return () => {
      setLoading(false)
    }
  }, [])

  return (
    <PageContiner bgPicture={bg05}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <PageCard width="60%">
        <CardContent>
          <CustomDivider label="تماس با من" icon={<Sms />} align="center" />

          <Slide
            direction="up"
            in={loading}
            style={{ transitionDelay: loading ? '200ms' : '0ms' }}
          >
            <Card
              sx={{
                p: 2,
                height: '10rem',
                textAlign: 'center',
                display: 'flex ',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundImage: `url(${worldMap})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundColor:
                  theme.palette.mode === 'dark' ? '#a1a1a1' : '#b2ebf2',
              }}
            >
              <Typography variant="h6" color="black">
                بیا درمورد همه چیز با هم حرف بزنیم
              </Typography>{' '}
              <Button
                href="mailto:okumura.rin.samaa@gmail.com"
                alt="email"
                color="secondary"
              >
                <Typography variant="body1" color="text.secondary">
                  ایمیل بزن به من
                </Typography>
              </Button>{' '}
            </Card>
          </Slide>
        </CardContent>
      </PageCard>
    </PageContiner>
  )
}
export default Contact
