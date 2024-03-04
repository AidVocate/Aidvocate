import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

export default function NoPage() {
  return (
    <Container maxWidth="sm" className="text-white text-center mt-20">
      <Typography variant="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" paragraph>
        Page not found
      </Typography>
      <Typography variant="body1" paragraph>
        The page you are looking for does not exist.
      </Typography>
      <Button component={Link} to="/" variant="contained" color="primary">
        Back to Home
      </Button>
    </Container>
  )
}