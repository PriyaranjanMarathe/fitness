import { Box, Typography } from '@mui/material';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        position: 'relative',
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1,
        }}
      >
        <Typography
          variant="h3"
          component="div"
          sx={{
            fontWeight: 'bold',
            color: '#ffffff',
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
        >
          🚧 Men at Work 🚧
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
