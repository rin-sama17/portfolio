import { createContext } from "react";

export default createContext({
    pageNumber: 0,
    setPageNumber: () => { },
    drawerOpen: false,
    setDrawerOpen: () => { },
    handlePageNumber: () => { },
    hndleThemeChange: () => { }
});