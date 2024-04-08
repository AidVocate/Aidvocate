import './bootstrap';
import '../css/app.css';
import CssBaseline from "@mui/material/CssBaseline";
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { StyledEngineProvider, ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';


const appName = import.meta.env.VITE_APP_NAME || 'AdvocAid';

const theme = responsiveFontSizes(createTheme({
    palette: {
        background: {
            default: '#E5E7EB', // default background color gray-200
        },
        primary: {
            main: '#17234a',
        },
        secondary: {
            main: '#2cacd4',
        },
    },
    typography: {
        fontFamily: [
            'Figtree', 
            'Arial', 
            'sans-serif'
        ].join(','),
    },
}));

createInertiaApp({
    title: (title) => `${appName} - ${title}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <App {...props} />
                </ThemeProvider>
            </StyledEngineProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
