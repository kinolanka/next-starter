import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Copyright from 'src/components/copyright/Copyright';
import Link from 'src/components/link/Link';
import type { NextPage } from 'next';
import ProTip from 'src/components/pro-tip/ProTip';
import Typography from '@mui/material/Typography';

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
};

export default Home;
