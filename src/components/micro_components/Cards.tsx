import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function Cards() {
  return (
    <Card>
      <CardMedia
        sx={{ width: '10%', height: 140, objectFit: 'cover', borderRadius: 2 }}
        component="img"
        height="140"
        image="https://i.etsystatic.com/40712981/r/il/d6ea84/6037772983/il_1588xN.6037772983_nsre.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography variant="body2">Contenido del card</Typography>
      </CardContent>
    </Card>
  );
}
