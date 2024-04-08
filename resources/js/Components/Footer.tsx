import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Footer() {
  return (
    <footer className="py-16 text-center text-sm text-black dark:text-white/70">
      <Typography variant="body2" color="text.secondary">
          {'Copyright © '}
          <Link color="inherit" href="https://www.gozaround.com/">
              GozAround Inc
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
      </Typography>
      <Typography variant="body2" color="text.secondary">
          <Link className="mx-1" color="inherit" href="tel:+ 1-888-472-0290">
              + 1-888-472-0290
          </Link>
          <Link className="mx-1" color="inherit" href="mailto:info@gozaround.com">
              info@gozaround.com
          </Link>
      </Typography>
  </footer>
  )
}
