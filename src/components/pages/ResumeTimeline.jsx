import { Typography, Slide } from '@mui/material'

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab'

import { resume } from '../../constants/resume'
const ResumeTimeline = ({ loading }) => {
  return (
    <Timeline
      position="alternate"
      sx={{
        direction: 'ltr',
      }}
    >
      {resume.map((item, index) => (
        <Slide
          direction="up"
          in={loading}
          style={{
            transitionDelay: loading ? `${index + 3}99ms` : '0ms',
          }}
          key={index}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: `${item.color}` }} />
              {index + 1 !== resume.length ? <TimelineConnector /> : null}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="subtitle1" color="text.secondry">
                {item.year}{' '}
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: `${item.color}`, my: 0.5 }}
              >
                {item.skill}{' '}
              </Typography>{' '}
              <Typography variant="subtitle1">{item.caption} </Typography>
            </TimelineContent>
          </TimelineItem>
        </Slide>
      ))}
    </Timeline>
  )
}

export default ResumeTimeline
