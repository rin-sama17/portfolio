import Grid from '@mui/material/Unstable_Grid2'
const PagesContiner = ({ children }) => {
  return (
    <Grid
      xs={12}
      sm={12}
      md={9}
      lg={9}
      xl={10}
      sx={{
        backgroundColor: 'whitesmoke',
        height: '100vh',
        height: '100svh',
      }}
    >
      {children}
    </Grid>
  )
}
export default PagesContiner
