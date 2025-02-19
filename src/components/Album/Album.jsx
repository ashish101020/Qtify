import React, { useState, useEffect, useRef } from "react";
import { SentimentDissatisfied } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { CircularProgress, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useSnackbar } from "notistack";
import axios from "axios";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Card from "../Card/Card";
import Genres from "../Genres/Genres";
// import "./Album.css"; // Custom CSS for styling

const Album = ({ title, Package, genre }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const isFetched = useRef(false);
  const [album, setAlbum] = useState([]);
  const [filterAlbum, setFilterAlbum] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [gens, setGen] = useState("");

  const handleGenre = (gen) => {
    setGen(gen);
  };

  const performAPICall = async () => {
    if (isFetched.current) return;
    isFetched.current = true;
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://qtify-backend-labs.crio.do/${Package}`
      );
      setAlbum(response.data);
      setFilterAlbum(response.data);
    } catch (error) {
      console.error(error);
      const message =
        error.response?.data?.message ||
        "Failed to fetch products. Try again later!";
      enqueueSnackbar(message, { variant: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    performAPICall();
  }, []);

  useEffect(() => {
    const filteredData = filterAlbum.filter(
      (obj) => gens === "" || obj.genre.key === gens
    );
    setAlbum(filteredData);
  }, [gens]);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Grid container bgcolor={"#121212"} px={3} color={"white"}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <h3>{title}</h3>
        <Button
          variant="text"
          sx={{
            color: "#34C94B",
          }}
          onClick={handleExpand}
        >
          {isExpanded ? "Collapse" : "Show All"}
        </Button>
      </Box>
      {genre && <Genres handleGenre={handleGenre} />}
      {isLoading ? (
        <Box display="flex" justifyContent="center" alignItems="center" py={5}>
          <CircularProgress size={30} />
          <h4>Loading...</h4>
        </Box>
      ) : album.length > 0 ? (
        isExpanded ? (
          // Expanded View (Grid Layout)
          <Grid container spacing={5} className="album-grid">
            {album.map((pack) => (
              <Grid item key={pack.id}>
                <Card pack={pack} />
              </Grid>
            ))}
          </Grid>
        ) : (
          // Collapsed View (Carousel)
          <Swiper
            modules={[Navigation]}
            spaceBetween={40} // Set spacing between slides
            slidesPerView="auto"
            navigation
            breakpoints={{
              640: { slidesPerView: 5, spaceBetween: 40 },
              768: { slidesPerView: 6, spaceBetween: 40 },
              1024: { slidesPerView: 8, spaceBetween: 40 },
            }}
          >
            {album.map((pack) => (
              <SwiperSlide key={pack.id} style={{ width: "auto" }}>
                <Card pack={pack} />
              </SwiperSlide>
            ))}
          </Swiper>
        )
      ) : (
        <Box display="flex" justifyContent="center" alignItems="center" py={10}>
          <SentimentDissatisfied size={40} />
          <h4>No albums found</h4>
        </Box>
      )}
    </Grid>
  );
};

export default Album;
