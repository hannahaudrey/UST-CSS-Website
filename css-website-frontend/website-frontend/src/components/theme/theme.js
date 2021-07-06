import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#FFFFFF',
            main: '#16213E',
            dark: '#000000'
        },

        secondary: {
            light: '#FFFFFF',
            main: '#0F1423',
            dark: '#111010'
        }
    },

    typography: {
        fontFamily: ['"Montserrat"', 'sans-serif'].join(',')
    }
});

export default theme;