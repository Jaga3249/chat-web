import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";

const Login = ({ setIsLogin }) => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", fontSize: "30px", color: "#a011d9" }}
      >
        ChatMingle
      </Typography>
      <form
        style={{
          width: "100%",
          marginTop: "0.5rem",
        }}
      >
        <TextField
          label="username or email address"
          type="text"
          size="small"
          required
          fullWidth
          variant="outlined"
          margin="dense"
        />
        <TextField
          label="password"
          type="password"
          size="small"
          required
          fullWidth
          variant="outlined"
          margin="dense"
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "-10px",
            gap: "0px",
          }}
        >
          {/* <Checkbox color="success" /> */}
          <Checkbox
            sx={{
              color: "#a011d9",
              "&.Mui-checked": {
                color: "#a011d9",
              },
            }}
          />
          <Typography>Remember Me</Typography>
        </Box>
        <Button
          variant="contained"
          // color="success"
          color="secondary"
          fullWidth
          style={{ marginTop: "2px" }}
          size="medium"
          type="submit"
        >
          Log in
        </Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "10px",
            cursor: "pointer",
          }}
        >
          <Typography style={{ fontSize: "16px" }}>ForgotPassword</Typography>
          <Typography
            style={{ fontSize: "16px" }}
            onClick={() => setIsLogin(false)}
          >
            Don't have an account?
            <span
              style={{
                color: "#a011d9",
                marginLeft: "2px",
                fontWeight: "600",
              }}
            >
              Signup
            </span>
          </Typography>
        </Box>
      </form>
    </>
  );
};
export default Login;
