import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";

const Register = ({ setIsLogin }) => {
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
          label="email"
          type="text"
          size="small"
          required
          fullWidth
          variant="outlined"
          margin="dense"
        />
        <TextField
          label="fullname"
          type="text"
          size="small"
          required
          fullWidth
          variant="outlined"
          margin="dense"
        />
        <TextField
          label="username"
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
        <TextField
          label="confirm password"
          type="password"
          size="small"
          required
          fullWidth
          variant="outlined"
          margin="dense"
        />

        <Button
          variant="contained"
          // color="success"
          color="secondary"
          fullWidth
          style={{ marginTop: "10px" }}
          size="medium"
          type="submit"
        >
          SignUp
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
          {/* <Typography style={{ fontSize: "16px" }}>ForgotPassword</Typography> */}
          <Typography
            style={{ fontSize: "16px" }}
            onClick={() => setIsLogin(true)}
          >
            Already have an account?
            <span
              style={{
                color: "#a011d9",
                marginLeft: "2px",
                fontWeight: "600",
              }}
            >
              Login
            </span>
          </Typography>
        </Box>
      </form>
    </>
  );
};
export default Register;
