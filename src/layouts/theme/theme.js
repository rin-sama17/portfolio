
import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: "vazir,wazin , roboto"
    },
    palette: {
        mode: "dark",
        custom: {
            main: "#fb8c00",
        }

    }


});

export const lightTheme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: "vazir,wazin , roboto"
    },
    palette: {
        mode: "light",
        custom: {
            main: "#e53935",
            contrastText: '#e53935'
        }
    },

});
