import {
  Box,
  Button,
  Checkbox,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Container
      component={"main"}
      maxWidth="sx"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "35%",
        }}
      >
        {isLogin ? (
          <Login setIsLogin={setIsLogin} />
        ) : (
          <Register setIsLogin={setIsLogin} />
        )}
      </Paper>
    </Container>
  );
};
export default Auth;
