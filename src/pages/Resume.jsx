import { useState, useEffect } from 'react'
import { CardContent } from '@mui/material'
import { Android } from '@mui/icons-material'
import { Helmet } from 'react-helmet-async'

import { PageContiner, PageCard, ResumeTimeline } from '../components/pages'
import CustomDivider from '../common/CustomDivider'
import bg03 from '../assets/backgrounds/bg03.jpg'

const Resume = ({ title }) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    return () => {
      setLoading(false)
    }
  }, [])

  return (
    <PageContiner bgPicture={bg03}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <PageCard width="70%">
        <CardContent>
          <CustomDivider label="دوره های طی شده" icon={<Android />} />
          <ResumeTimeline loading={loading} />
        </CardContent>
      </PageCard>
    </PageContiner>
  )
}
export default Resume
