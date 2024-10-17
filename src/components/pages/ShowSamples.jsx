import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  CardActionArea,
  Chip,
  IconButton,
  Tooltip,
  Slide,
} from '@mui/material'
import { useState, useEffect } from 'react'
import Grid from '@mui/material/Unstable_Grid2'

import { WarningAmber } from '@mui/icons-material'
import { samples } from '../../constants/samples'
import EllipsisText from 'react-ellipsis-text'
import { grey, blue } from '@mui/material/colors'
import { useTheme } from '@mui/material/styles'
const ShowSamples = () => {
  const [loading, setLoading] = useState(false)
  const theme = useTheme()
  useEffect(() => {
    setLoading(true)

    return () => {
      setLoading(false)
    }
  }, [])
  return (
    <>
      {samples.map((item, index) => (
        <Grid xs={12} sm={6} md={6} lg={4} sx={{ px: 2, mb: 2 }} key={index}>
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? `${index + 3}99ms` : '0ms',
            }}
          >
            <Card
              sx={{
                maxWidth: 345,
                backgroundColor:
                  theme.palette.mode === 'dark' ? grey[800] : blue[50],
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="230"
                  width="200"
                  alt={item.name}
                  image={item.image}
                />

                <CardContent>
                  <Typography
                    color="text.primary"
                    variant="body1"
                    textAlign="left"
                    gutterBottom
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    textAlign="left"
                    color="text.secondary"
                    sx={{ direction: 'ltr' }}
                  >
                    <EllipsisText text={item.caption} length={100} />
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions sx={{ direction: 'rtl' }}>
                {item.languages.map((item, index) => (
                  <Chip
                    label={item.name}
                    sx={{
                      ml: 1,
                      backgroundColor: item.color,
                      color: 'black',
                      ":hover":{
                        bgcolor:"white"
                      }
                    }}
                    key={index}
                  />
                ))}
              </CardActions>
              <CardActions>
                <Button
                  href={item.link}
                color="primary"
                  disabled={!item.isDone}
                  variant="contained"
                  target="_blank"
                >
                  اطلاعات بیشتر
                </Button>
                {item.isDone ? null : (
                  <Tooltip
                    arrow
                    title="این پروژه هنوز به پایان نرسیده است"
                    placement="bottom"
                  >
                    <IconButton color="warning">
                      <WarningAmber />
                    </IconButton>
                  </Tooltip>
                )}
              </CardActions>
            </Card>
          </Slide>
        </Grid>
      ))}
    </>
  )
}

export default ShowSamples
