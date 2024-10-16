
import { Home, Person, Phone, Terminal, List } from '@mui/icons-material';
const tabPanel = (index) => {
    return {
        id: `vertical-tabpanel-${index}`,
        'aria-labelledby': `vertical-tab-${index}`,
    };
};

export const tabsData = () => {
    const tabs = [
        { label: 'صفحه اصلی', icon: <Home />, ...tabPanel(0) },
        { label: 'درباره من', icon: <Person />, ...tabPanel(1) },
        { label: 'رزومه من', icon: <List />, ...tabPanel(2) },
        { label: 'نمونه کارها', icon: <Terminal />, ...tabPanel(3) },
        { label: 'تماس با من', icon: <Phone />, ...tabPanel(4) },
    ];
    return tabs;
};