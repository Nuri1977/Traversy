import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Hero = () => {
  return (
    <Card
      elevation={24}
      sx={{
        minWidth: 400,
        textAlign: "center",
        maxWidth: "70%",
        mt: 2,
        mx: "auto",
        p: 2,
      }}
    >
      <CardContent>
        <Typography variant="h2" component="h2">
          MERN Authentication
        </Typography>
        <Typography variant="body1" color="text.secondary">
          This is a simple MERN authentication app with TypeScript. It uses JWT
          for authentication and MongoDB for storing users.
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button size="medium" variant="contained">
          Sing In
        </Button>
        <Button size="medium" variant="contained" color="secondary">
          Sing up
        </Button>
      </CardActions>
    </Card>
  );
};

export default Hero;
