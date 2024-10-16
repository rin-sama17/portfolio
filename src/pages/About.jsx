import { CardContent } from '@mui/material'
import { AccountCircle, AccountTree } from '@mui/icons-material'
import Grid from '@mui/material/Unstable_Grid2'
import { Helmet } from 'react-helmet-async'

import { DevInfo, PageCard, PageContiner, Skills } from '../components/pages'
import CustomDivider from '../common/CustomDivider'
import bg02 from '../assets/backgrounds/bg02.jpg'

const About = ({ title }) => {
  return (
    <PageContiner bgPicture={bg02}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <PageCard width="90%">
        <CardContent>
          <Grid
            container
            spacing={1}
            sx={{
              display: 'flex',
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
            }}
          >
            <Grid xs={12} sm={12} md={12} lg={5} xl={5}>
              <CustomDivider
                label="مشخصات من"
                icon={<AccountCircle />}
                align="center"
              />
              <DevInfo />
            </Grid>

            <Grid xs={12} sm={12} md={12} lg={7} xl={7}>
              <CustomDivider
                label="مهارت های من"
                icon={<AccountTree />}
                align="center"
              />
              <Skills />{' '}
            </Grid>
          </Grid>
        </CardContent>
      </PageCard>
    </PageContiner>
  )
}
export default About
