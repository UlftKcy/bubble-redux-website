import { Grid, Card, CardMedia, CardContent, Button, makeStyles ,Fab} from "@material-ui/core";

const useCardStyle = makeStyles((theme) => ({
    card : {
        maxWidth: 345,
        height: "100%",
        position: "relative",
    },
    content:{
        position: "absolute",
        bottom: 20,
    },
}))

const ShopProduct = ({ category }) => {
  const { name, image } = category;
  const classes = useCardStyle();
  return (
      <Grid item>
        <Card
         className={classes.card}
        >
          <CardMedia className={classes.media} image={image} component="img" alt={name} />
          <CardContent className={classes.content}>
            <Fab variant="extended">`Shop {name}`</Fab>
          </CardContent>
        </Card>
      </Grid>
  );
};

export default ShopProduct;
