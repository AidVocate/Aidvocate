import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <Container maxWidth="xl" className="text-white text-center mt-20">
      <img src='/advocaid.webp' alt="Logo" className="w-96 h-auto mb-20 mx-auto" />
      <Typography variant="h1" gutterBottom>
        Unlocking Justice
      </Typography>
      <Typography variant="h2" paragraph color="secondary">
        Alberta's Gateway to Pro Bono Legal Assistance
      </Typography>
      <Typography variant="h5" paragraph>
        AdvocAid is a pioneering online platform dedicated to enhancing access to justice in Alberta. It serves as a vital link between the public,
        legal professionals, and pro bono organizations, ensuring pro bono legal assistance is accessible and efficient for everyone.
      </Typography>
    </Container>
  )
}