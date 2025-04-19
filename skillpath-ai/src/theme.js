import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#eaf1f6',  // Light background color
      100: '#e0f2fe', // Light accent color
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9', // Primary brand color
      600: '#0284c7', // Darker shade for hover states
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
    },
  },
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: '#eaf1f6',
        color: 'gray.800',
      },
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand',
      },
      variants: {
        solid: {
          _hover: {
            transform: 'translateY(-2px)',
            boxShadow: 'md',
          },
          transition: 'all 0.2s',
        },
      },
    },
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
  shadows: {
    outline: '0 0 0 3px rgba(14, 165, 233, 0.6)',
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

export default theme;