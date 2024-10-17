import { Terminal } from '@mui/icons-material'
import { Helmet } from 'react-helmet-async'
import Grid from '@mui/material/Unstable_Grid2'

import { PageContiner, PageCard, ShowSamples } from '../components/pages'
import bg04 from '../assets/backgrounds/bg04.jpg'
import CustomDivider from '../common/CustomDivider'

const Samples = ({ title }) => {
  return (
    <PageContiner bgPicture={bg04}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <PageCard width="100%">
        <CustomDivider label="نمونه کارها" icon={<Terminal />} align="center" />
        <Grid container sx={{ mx: 3 }}>
          <ShowSamples />
        </Grid>
      </PageCard>
    </PageContiner>
  )
}
export default Samples
