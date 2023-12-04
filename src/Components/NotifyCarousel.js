import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  TextField,
  Typography,
} from "@mui/material";
import NotifyBell from "../Assets/notifyBell.png";
import barChart from "../Assets/barChart.png";
import clock from "../Assets/clock.png";

const NotifyCarousel = () => {
  const settings = {
    // className: "center",
    centerMode: false,
    infinite: true,
    slidesToShow: 1.84,
    swipeToSlide: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3500,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.0,
          slidesToScroll: 1,
          centerMode: false,
          infinite: true,
          swipeToSlide: true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 3500,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1,
          centerMode: false,
          infinite: true,
          swipeToSlide: true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 3500,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          // slidesToScroll: 1,
          centerMode: false,
          infinite: true,
          swipeToSlide: true,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 3500,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  const [fieldValue, setValue] = useState("");


  return (
    <Box>
      <Slider {...settings}>
        <Card sx={{ maxWidth: "190px", height: "170px", borderRadius: "8.4px", opacity: "80%" }}>
          <CardHeader
            avatar={<img src={NotifyBell} alt="NotifyBell" />}
            action={
              <Button
                variant="text"
                size="small"
                sx={{ "&:hover": { bgcolor: "#fff", color: "black" }, color: "black" }}
              >
                Save
              </Button>
            }
          />

          <CardContent sx={{ mt: -2 }}>
            <Typography
              fullWidth
              sx={{ fontWeight: 500, fontSize: "14px", lineHeight: "16.8px" }}
            >
              We’ll be sending notifications to you here
            </Typography>
            <TextField
              sx={{ mt: 1 }}
              type="text"
              size="small"
              value={fieldValue || "David"}
              onMouseOver={() => setValue("hello@gmail.com")}
              onMouseOut={() => setValue("David")}
              inputProps={{
                sx: {
                  fontSize: "11.2px",
                  fontWeight: 500,
                  lineHeight: "13.44px",
                },
              }}
            />
          </CardContent>
          <CardActions disableSpacing></CardActions>
        </Card>
        <Card sx={{ maxWidth: "190px", height: "170px", borderRadius: "8.4px", opacity: "80%" }}>
          <CardHeader
            avatar={<img src={barChart} alt="barChart" />}
            action={<Checkbox size="small" defaultChecked />}
          />

          <CardContent sx={{ mt: 3 }}>
            <Typography
              fullWidth
              sx={{ fontWeight: 500, fontSize: "11.2px", lineHeight: "13.44px" }}
            >
              Notify me when any wallets move more than
            </Typography>
            <select
              disabled
              name="$1,000.00"
              id="$1,000.00"
              style={{ marginTop: "10px" }}
            >
              <option value="$1,000.00">$1,000.00</option>
            </select>
          </CardContent>
          <CardActions disableSpacing></CardActions>
        </Card>
        <Card sx={{ maxWidth: "190px", height: "170px", borderRadius: "8.4px", opacity: "80%" }}>
          <CardHeader
            avatar={<img src={clock} alt="clock" />}
            action={<Checkbox size="small" defaultChecked />}
          />

          <CardContent sx={{ mt: 0 }}>
            <Typography
              fullWidth
              sx={{ fontWeight: 500, fontSize: "11.2px", lineHeight: "13.44px" }}
            >
              Notify me when any wallet dormant for
            </Typography>
            <select
              disabled
              name="> 30 days"
              id="> 30 days"
              style={{ marginTop: "10px" }}
            >
              <option value="> 30 days">&gt; 30 days</option>
            </select>
            <Typography
              fullWidth
              sx={{ fontWeight: 500, fontSize: "11.2px", lineHeight: "13.44px", mt: 1 }}
            >
              becomes active
            </Typography>
          </CardContent>
          <CardActions disableSpacing></CardActions>
        </Card>
      </Slider>
    </Box>
  );
};

export default NotifyCarousel;
