import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

interface Props {
  status:number;
}

export default function Error({ status }: Props) {
  const title = {
    503: 'Service Unavailable',
    500: 'Server Error',
    404: 'Page Not Found',
    403: 'Forbidden',
  }[status]

  const description = {
    503: 'Sorry, we are doing some maintenance. Please check back soon.',
    500: 'Whoops, something went wrong on our servers.',
    404: 'Sorry, the page you are looking for could not be found.',
    403: 'Sorry, you are forbidden from accessing this page.',
  }[status]

  return (
    <div 
        style={{backgroundImage: 'url("/background.webp")',}}
        className="min-h-screen  flex flex-col fixed inset-0 overflow-y-auto bg-cover bg-center bg-fixed"
      >     
      <Container maxWidth="sm" className="text-white text-center mt-20">
        <Typography variant="h1" gutterBottom>
          {status}
        </Typography>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" className="mt-20" paragraph>
          {description}
        </Typography>
      </Container>
    </div>
  )
}