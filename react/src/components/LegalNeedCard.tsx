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

interface Props {
  title: string,
  name: string,
  date: string,
  location: string,
  image: string,
}

function Truncate(str: string, maxLength: number) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength - 3) + '...';
  } else {
    return str;
  }
}

export default function LegalNeedCard({title, name, date, location, image}: Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardHeader
          avatar={
            <UserIcon name={name}/>
          }
          title={name}
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
            {Truncate(title, 35)}
          </Typography>
          <Grid container alignItems="center">
            <Grid item>
              <BookmarkIcon className="mr-1" />
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" color="text.secondary">
                Civil Claims Duty
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