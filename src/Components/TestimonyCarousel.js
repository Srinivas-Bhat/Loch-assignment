import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";

const TestimonyCarousel = () => {
  const settings = {
    dots: false,
    arrows: false,
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 1.7,
    slidesToScroll: 1.2,
    speed: 500,
    initialSlide: 1.2,
    partialVisible: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          arrows: true,
          focusOnSelect: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          partialVisible: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows: false,
          focusOnSelect: true,
          infinite: true,
          slidesToShow: 1,
            slidesToScroll: 1,
          speed: 500,
          centerMode: false,
            initialSlide: 1,
            className: "center"
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
  return (
    <Box>
      <Slider {...settings}>
        <Card
          sx={{
            height: "136px",
            borderRadius: "12px",
            width: {
              lg: "353px !important",
              md: "300px !important",
              sm: "280px !important",
            },
          }}
        >
          <CardHeader
            title={
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: 500,
                  lineHeight: "15.6px",
                  color: "rgba(150, 151, 154, 1)",
                  marginLeft: "-5px",
                }}
              >
                Ex Blackrock PM
              </Typography>
            }
            avatar={
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  lineHeight: "19.2px",
                  color: "rgba(25, 25, 26, 1)",
                }}
              >
                Jack F
              </Typography>
            }
          />

          <CardContent sx={{ mt: -1 }}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "19.2px",
                color: "rgba(29, 33, 41, 1)",
              }}
            >
              “Love how Loch integrates portfolio analytics and whale watching into one
              unified app.”
            </Typography>
          </CardContent>
          <CardActions disableSpacing></CardActions>
        </Card>
        <Card
          sx={{
            width: {
              lg: "353px !important",
              md: "300px !important",
              sm: "280px !important",
            },
            height: "136px",
            borderRadius: "12px",
          }}
        >
          <CardHeader
            title={
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: 500,
                  lineHeight: "15.6px",
                  color: "rgba(150, 151, 154, 1)",
                  marginLeft: "-5px",
                }}
              >
                Research, 3poch Crypto Hedge Fund
              </Typography>
            }
            avatar={
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  lineHeight: "19.2px",
                  color: "rgba(25, 25, 26, 1)",
                }}
              >
                Yash P
              </Typography>
            }
          />

          <CardContent sx={{ mt: -1 }}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "19.2px",
                color: "rgba(29, 33, 41, 1)",
              }}
            >
              “I use Loch everyday now. I don't think I could analyze crypto whale trends
              markets without it. I'm addicted!”
            </Typography>
          </CardContent>
          <CardActions disableSpacing></CardActions>
        </Card>
        <Card
          sx={{
            width: {
              lg: "353px !important",
              md: "300px !important",
              sm: "280px !important",
            },
            height: "136px",
            borderRadius: "12px",
          }}
        >
          <CardHeader
            title={
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: 500,
                  lineHeight: "15.6px",
                  color: "rgba(150, 151, 154, 1)",
                  marginLeft: "-5px",
                }}
              >
                Co-Founder Magik Labs
              </Typography>
            }
            avatar={
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  lineHeight: "19.2px",
                  color: "rgba(25, 25, 26, 1)",
                }}
              >
                Shiv S
              </Typography>
            }
          />

          <CardContent sx={{ mt: -1 }}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "19.2px",
                color: "rgba(29, 33, 41, 1)",
              }}
            >
              “Managing my own portfolio is helpful and well designed. What’s really
              interesting is watching the whales though. No one else has made whale
              tracking so simple.”
            </Typography>
          </CardContent>
          <CardActions disableSpacing></CardActions>
        </Card>
      </Slider>
    </Box>
  );
};

export default TestimonyCarousel;
