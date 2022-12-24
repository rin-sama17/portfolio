import { useContext } from 'react'
import MainContext from '../../context'

import { Tab, Tabs } from '@mui/material'

import { grey, blue } from '@mui/material/colors'
import { tabsData } from '../../constants/tabs.sidebar'
import { useTheme } from '@mui/material/styles'
const SidebarTabs = () => {
  const { handlePageNumber, pageNumber, setDrawerOpen } = useContext(
    MainContext,
  )
  const data = tabsData()
  const theme = useTheme()
  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollButton="auto"
      allowScrollButtonsMobile
      selectionFollowsFocus
      value={pageNumber}
      onChange={handlePageNumber}
      sx={{
        '& .MuiTabs-indicator': {
          backgroundColor: 'custom.main',
          height: 3,
          width: '3px',
        },
        '& .MuiTab-root.Mui-selected': {
          color: 'custom.main',
        },
      }}
    >
      {data.map((tab, index) => (
        <Tab
          label={tab.label}
          icon={tab.icon}
          sx={{
            my: 0.5,
            mx: 1,
            backgroundColor:
              theme.palette.mode === 'dark' ? grey[800] : blue[100],
            borderRadius: 2,
            '&.MuiTab-root': {
              minHeight: 50,
            },
          }}
          key={index}
          iconPosition="start"
          onClick={() => setDrawerOpen(false)}
          {...tab}
        />
      ))}
    </Tabs>
  )
}
export default SidebarTabs
