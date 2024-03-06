import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Grid  from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ExploreIcon from '@mui/icons-material/Explore';
import UserIcon from '../components/UserIcon';
import LegalNeedCardInterface from '../interfaces/LegalNeedCardInterface';

function Truncate(str: string, maxLength: number) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength - 3) + '...';
  } else {
    return str;
  }
}

export default function LegalNeedCard({text, name, date, location, type, image, setOpen, setSelected}: LegalNeedCardInterface) {
  const onClick = () => {
    setSelected({
      text: text,
      name: name,
      date: date,
      location: location,
      type: type,
      image: image,
      setOpen: setOpen,
      setSelected: setSelected
    })
    setOpen(true);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={onClick}>
        <CardHeader
          avatar={
            <UserIcon name={name}/>
          }
          text={name}
          subheader={date}
        />
        <CardMedia
          component="img"
          className="object-cover h-32 w-full"
          image={`data:image/png;base64,${image}`}
          alt="CardImage"
        />
        <CardContent>
          <Typography variant="body1" fontWeight="bold" color="text.primary">
            {Truncate(text, 35)}
          </Typography>
          <Grid container alignItems="center">
            <Grid item>
              <BookmarkIcon className="mr-1" />
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" color="text.secondary">
                {type}
              </Typography>
            </Grid>
          </Grid>
          <Grid container alignItems="center">
            <Grid item>
              <ExploreIcon className="mr-1" />
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" color="text.secondary">{location}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}