import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import LegalNeedCardInterface from '../interfaces/LegalNeedCardInterface';

interface Props {
  open: boolean;
  selected: LegalNeedCardInterface | null,
}

export default function LegalNeedDetails({open, selected}: Props) {
  if (!selected) { return <></> }
  const theme = useTheme();
  const { text, name, date, location, type, image, setOpen } = selected;
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={onClose} className="max-w-3xl mx-auto">
      <div className="relative w-full h-32">
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          style={{
            backgroundImage: `url(data:image/png;base64,${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)'
          }}
        ></div>
        <div className="absolute inset-0">
          <DialogTitle className="text-white font-bold text-3xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]">
            {type}
          </DialogTitle>
          <DialogContent className="text-white font-bold text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.9)]">
            {name}
          </DialogContent>
        </div>
      </div>
      <DialogContent>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <strong>Location:</strong>
            <Typography variant="subtitle1" color="text.secondary">{location}</Typography>
          </Grid>
          <Grid item>
            <strong>Date:</strong>
            <Typography variant="subtitle1" color="text.secondary">{date}</Typography>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogContent>
       {text}
      </DialogContent>
      <DialogContent color="primary">
        <Button variant="outlined">Accept</Button>
      </DialogContent>
    </Dialog>
  );
}