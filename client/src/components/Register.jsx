import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CameraEnhanceIcon from "@mui/icons-material/CameraEnhance";
import { useRef } from "react";
import { useInputValidation, useStrongPassword } from "6pp";
import { usernameValidator } from "../utils/validator";
import UsePreviewImg from "../hooks/UsePreviewImg";
import { useFormik } from "formik";
import { registerSchema } from "../schema";

const Register = ({ setIsLogin }) => {
  const { selectedFile, error, handleChangeImg } = UsePreviewImg();
  const inputRef = useRef(null);
  const initialValue = {
    email: "",
    fullname: "",
    username: "",
    password: "",
    confirm_password: "",
  };
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValue,
    validationSchema: registerSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(selectedFile);

  return (
    <>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", fontSize: "30px", color: "#a011d9" }}
      >
        ChatMingle
      </Typography>
      <Box position={"relative"} sx={{ cursor: "pointer" }}>
        <Avatar
          sx={{ width: "80px", height: "80px" }}
          alt="Remy Sharp"
          src={selectedFile && selectedFile}
        >
          A
        </Avatar>

        <CameraEnhanceIcon
          sx={{
            width: "30px",
            height: "30px",
            color: "#a011d9",
            position: "absolute",
            bottom: "0px",
            right: "-9px",
          }}
          onClick={() => inputRef.current.click()}
        />
        <input
          type="file"
          ref={inputRef}
          style={{ display: "none" }}
          onChange={handleChangeImg}
          accept="/image"
        />
      </Box>
      {error && ( // Display error message conditionally
        <Typography variant="caption" color="error">
          {error}
        </Typography>
      )}
      <form
        style={{
          width: "100%",
          marginTop: "0.5rem",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          label="Email"
          type="email"
          size="small"
          fullWidth
          variant="outlined"
          required
          name="email"
          value={values.email}
          onChange={handleChange}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
          sx={{
            marginBlock: "6px",
          }}
        />
        <TextField
          label="Fullname"
          type="text"
          size="small"
          fullWidth
          required
          variant="outlined"
          name="fullname"
          value={values.fullname}
          onChange={handleChange}
          error={touched.fullname && Boolean(errors.fullname)}
          helperText={touched.fullname && errors.fullname}
          sx={{
            marginBlock: "6px",
          }}
        />
        <TextField
          label="Username"
          type="text"
          size="small"
          fullWidth
          required
          variant="outlined"
          name="username"
          value={values.username}
          onChange={handleChange}
          error={touched.username && Boolean(errors.username)}
          helperText={touched.username && errors.username}
          sx={{
            marginBlock: "6px",
          }}
        />

        <TextField
          label="Password"
          type="password"
          size="small"
          fullWidth
          required
          variant="outlined"
          name="password"
          value={values.password}
          onChange={handleChange}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
          sx={{
            marginBlock: "6px",
          }}
        />

        <TextField
          label="Confirm password"
          type="password"
          size="small"
          required
          fullWidth
          variant="outlined"
          name="confirm_password"
          value={values.confirm_password}
          onChange={handleChange}
          error={touched.confirm_password && Boolean(errors.confirm_password)}
          helperText={touched.confirm_password && errors.confirm_password}
          sx={{
            marginBlock: "6px",
          }}
        />

        <Button
          variant="contained"
          color="secondary"
          fullWidth
          style={{ marginTop: "10px" }}
          size="medium"
          type="submit"
        >
          Sign Up
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
