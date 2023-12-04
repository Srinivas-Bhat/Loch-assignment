import {
  Box,
  Button,
  CssBaseline,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "../styles/signup.module.css";
import Bell from "../Assets/Bell.png";
import NotifyCarousel from "./NotifyCarousel";
import cohort from "../Assets/Cohorts.png";
import eye from "../Assets/Eye.png";
import logo from "../Assets/Vector.png";
import TestimonyCarousel from "./TestimonyCarousel";

const Signup = () => {
  function useIsWidthDown(breakpoint) {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down(breakpoint));
  }
  const isMdDown = useIsWidthDown("md");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (e) => {
    const { value } = e.target;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      setEmail(value);
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  useEffect(() => {
    setEmailError(false);
  }, []);

  const handleSubmit = () => {
    if (email !== "" && email?.trim().length > 0 && !emailError) {
      window.location.href = "https://app.loch.one/welcome";
      setTimeout(() => {
        setEmail("");
        setEmailError(false);
      }, 2000);
    } else {
        setEmailError(true);
        setEmail("");
    }
  };

  return (
    <Grid container>
      <CssBaseline />
      <Grid item xs={0} sm={6} md={7} className={styles.background}>
        <Grid
          container
          columnSpacing={4}
          //   columnGap={6}
          sx={{
            // height: "300px",
            mt: { md: "85px", sm: "40px" },
            boxSizing: "border-box",
            paddingLeft: { lg: "62px", sm: "20px" },
            paddingRight: { lg: 0, sm: "20px" },
            paddingY: 2,
          }}
        >
          <Grid item xs={false} sm={12} md={5.5} lg={5}>
            <img src={Bell} alt="bell" width="32px" height="32px" />
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { lg: "31px", md: "26px", sm: "22px" },
                  fontWeight: 500,
                  lineHeight: { lg: "37.2px", md: "32px" },
                  color: "#FFF",
                  textShadow: "2px 2px 4px #000000",
                  mt: 1,
                }}
              >
                Get notified when a highly correlated whale makes a move
              </Typography>
              <Typography
                sx={{
                  fontSize: { md: "16px", sm: "14px" },
                  lineHeight: "19.2px",
                  color: "#FFF",
                  mt: 3,
                  opacity: "70%",
                }}
              >
                Find out when a certain whale moves more than any preset amount on-chain
                or when a dormant whale you care about becomes active.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={false}
            sm={12}
            md={6.5}
            lg={7}
            sx={{ mt: { md: 0, sm: 3 }, paddingY: { md: 0, sm: 2 } }}
          >
            <NotifyCarousel />
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            paddingX: { lg: "62px", sm: "20px" },
            mt: 1,
            paddingY: { md: 6, sm: 4, lg: 8 },
            boxSizing: "border-box",
          }}
        >
          <Grid item xs={12} sm={12} md={5.5} lg={5}>
            <img src={cohort} alt="cohort" className={styles.cohortImage} />
          </Grid>
          <Grid item xs={12} sm={12} md={6.5} lg={7}>
            <Box
              sx={{
                height: "32px",
                width: "32px",
                mt: { md: 1, sm: 3 },
                mb: { md: 2, sm: 1 },
                float: { md: "right", sm: "left" },
              }}
            >
              <img src={eye} alt="eye" />
            </Box>
            <Box sx={{ clear: { md: "right", sm: "left" } }}>
              <Typography
                sx={{
                  mt: { md: 3, sm: 1 },
                  fontSize: "31px",
                  fontWeight: 500,
                  lineHeight: "37px",
                  textAlign: { md: "right", sm: "left" },
                  color: "white",
                }}
              >
                Watch what the whales are doing
              </Typography>
              <Typography
                sx={{
                  mt: 2.5,
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "19px",
                  textAlign: { md: "right", sm: "left" },
                  color: "white",
                  opacity: "70%",
                }}
              >
                All whales are not equal. Know exactly what the whales impacting YOUR
                portfolio are doing.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ paddingX: { lg: "62px", sm: "20px" }, mt: 4 }}>
          <Typography
            align={isMdDown ? "left" : "right"}
            sx={{ fontSize: "25px", lineHeight: "30px", fontWeight: 500, color: "#FFF" }}
          >
            Testimonials
          </Typography>
          <Divider
            sx={{
              bgcolor: "rgba(229, 229, 230, 0.5)",
              mt: 3,
              mb: { md: "60px", sm: "30px" },
            }}
          />
        </Box>

        <Grid
          container
          sx={{ paddingX: { lg: "62px", sm: "20px" }, boxSizing: "border-box", mb: 6 }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={2}
            sx={{
              display: "flex",
              alignItems: { md: "flex-end", sm: "center" },
              mb: { md: 0, sm: 2 },
            }}
          >
            <img src={logo} alt="logo" />
          </Grid>
          <Grid item xs={12} sm={12} md={10}>
            <TestimonyCarousel />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        md={5}
        component={Paper}
        elevation={8}
        className={styles.center}
        sx={{ height: { xs: "100vh", sm: "inherit" } }}
      >
        <Box sx={{ width: "340px" }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "39px",
              lineHeight: "50px",
              color: "rgba(176, 177, 179, 1)",
              fontWeight: "500",
            }}
          >
            Sign up for exclusive excess.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder="Your email address"
              error={emailError}
              helperText={emailError ? "Please enter a valid email" : " "}
              onChange={handleEmailChange}
            //   value={email}
              inputProps={{
                sx: {
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: "19px",
                },
              }}
              sx={{
                border: "1px solid #lightgray",
                borderRadius: "8px",
                "& fieldset": {
                  border: "1px solid #lightgray",
                  borderRadius: "8px",
                  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                },
              }}
            />
            {/* <Typography variant="body2" align="center">Please enter a valid email</Typography> */}
            <Button
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              sx={{
                mt: 1.5,
                mb: 2,
                padding: "18px 28px",
                borderRadius: "8px",
                bgcolor: "rgba(25, 25, 26, 1)",
                color: "#fff",
                fontWeight: 600,
                lineHeight: "19px",
                fontSize: "16px",
                "&:hover": { backgroundColor: "rgba(15, 15, 15, 1)" },
              }}
            >
              Get started
            </Button>
          </Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: "16px",
              fontWeight: 600,
              lineHeight: "19px",
              mt: 3,
              mx: "auto",
            }}
            align="center"
          >
            You'll receive an email with an invite link to join.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Signup;

{
  /* <Box
          className={styles.flexDisplay}
          sx={{
            width: "678px",
            height: "306px",
            mx: "60px",
            boxSizing: "border-box",
            gap: "38px",
            mt: 1,
          }}
        >
          <img
            src={cohort}
            alt="cohort"
            width="335px"
            height="100%"
            style={{ paddingLeft: 3 }}
          />
          <Box sx={{ height: "100%", border: "1px solid white", width: "305px" }}></Box>
        </Box> */
}

{
  /* <Grid item xs={6}>
            <img src={cohort} alt="cohort" width="100%" height="306px" />
          </Grid>
          <Grid item xs={6} >
            <img src={eye} alt="eye" style={{ float: "right", marginTop: "2px" }} />
            <br />
            <Typography
              sx={{
                mt: 3,
                fontSize: "31px",
                fontWeight: 500,
                lineHeight: "37px",
                textAlign: "right",
                color: "white",
              }}
            >
              Watch what the whales are doing
            </Typography>
            <Typography
              sx={{
                mt: 2.5,
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "19px",
                textAlign: "right",
                color: "white",
                opacity: "70%",
              }}
            >
              All whales are not equal. Know exactly what the whales impacting YOUR
              portfolio are doing.
            </Typography>
          </Grid> */
}

{
  /* <Grid item xs={4.7} sx={{ px: 3 }}>
            <img src={Bell} alt="bell" width="32px" height="32px" />
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontSize: "32px",
                  fontWeight: 500,
                  lineHeight: "37px",
                  color: "#FFF",
                  textShadow: "2px 2px 4px #000000",
                  mt: 1,
                }}
              >
                Get notified when a highly correlated whale makes a move
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  lineHeight: "19px",
                  color: "#FFF",
                  mt: 3,
                  opacity: "70%",
                }}
              >
                Find out when a certain whale moves more than any preset amount on-chain
                or when a dormant whale you care about becomes active.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6.3}>
            <NotifyCarousel />
          </Grid> */
}
