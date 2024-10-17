import { useState, useEffect } from 'react'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import SwipeableViews from 'react-swipeable-views'

import { Page, Home, About, Resume, Samples, Contact } from '../pages'
import { Sidebar } from '../components/sideBar'
import { DrawerButton } from '../components/drawer'
import SidebarContiner from './SidebarContiner'
import PagesContiner from './PagesContiner'
import MainContects from '../context'
import MainLayout from '../layouts/MainLayout'

function AppContiner() {
  const [pageNumber, setPageNumber] = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [ThemeMode, setThemeMode] = useState()
  const theme = useTheme()
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'))
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  useEffect(() => {
    setThemeMode(prefersDarkMode ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false)
    }
  }, [isMdUp])

  const handlePageNumber = (event, newValue) => {
    setPageNumber(newValue)
  }
  const handleChangeIndex = index=> {
    setPageNumber(index)
  }

  const hndleThemeChange = () => {
    setThemeMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'))
  }

  return (
    <MainContects.Provider
      value={{
        pageNumber,
        setPageNumber,
        setDrawerOpen,
        drawerOpen,
        handlePageNumber,
        hndleThemeChange,
      }}
    >
      <MainLayout mode={ThemeMode}>
        <DrawerButton />
        <SidebarContiner>
          <Sidebar />
        </SidebarContiner>
        <PagesContiner pageNumber={pageNumber}>
          <SwipeableViews
            enableMouseEvents
            index={pageNumber}
            onChangeIndex={handleChangeIndex}
            sx={{ direction: 'ltr' }}
          >
            <Page pageNumber={pageNumber} index={0}>
              <Home title="وبسایت شخصی | صفحه اصلی" />
            </Page>

            <Page pageNumber={pageNumber} index={1}>
              <About title="وبسایت شخصی | درباره من" />
            </Page>
            <Page pageNumber={pageNumber} index={2}>
              <Resume title="وبسایت شخصی | رزومه من" />
            </Page>
            <Page pageNumber={pageNumber} index={3}>
              <Samples title="وبسایت شخصی | نمونه کارها" />
            </Page>
            <Page pageNumber={pageNumber} index={4}>
              <Contact title="وبسایت شخصی | تماس با من" />
            </Page>
          </SwipeableViews>
        </PagesContiner>
      </MainLayout>
    </MainContects.Provider>
  )
}

export default AppContiner
