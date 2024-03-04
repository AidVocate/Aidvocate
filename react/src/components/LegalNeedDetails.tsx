import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void,
}

export default function LegalNeedDetails({open, setOpen}: Props) {
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Legal Need Details</DialogTitle>
    </Dialog>
  );
}