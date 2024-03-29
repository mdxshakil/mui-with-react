import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Face6Icon from "@mui/icons-material/Face6";
import TextInput from "../components/TextInput";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../constants";
import { IFormData } from "../interfaces";

const SignInPage = () => {
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem("auth", JSON.stringify(formData));
    navigate(AppRoutes.data);
  };

  useEffect(() => {
    // Check if user information is available in localStorage
    const authData = localStorage.getItem("auth");
    if (authData) {
      // Redirect the user to previous page if user is loggedin
      navigate(AppRoutes.data);
    }
  }, [navigate]);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <Face6Icon fontSize="large" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Provide following info to proceed
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextInput
            name="name"
            label="Name"
            type="text"
            id="name"
            autoComplete="name"
            setFormData={setFormData}
            formData={formData}
          />
          <TextInput
            name="email"
            label="Email"
            type="email"
            id="email"
            autoComplete="email"
            setFormData={setFormData}
            formData={formData}
          />
          <TextInput
            name="phone"
            label="Phone"
            type="text"
            id="phone"
            autoComplete="phone"
            setFormData={setFormData}
            formData={formData}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            color="primary"
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignInPage;
