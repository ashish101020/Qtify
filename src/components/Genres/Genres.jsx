import React, {useState, useEffect, useRef} from 'react'
import axios from "axios";
import Button from "@mui/material/Button";
const Genres = ({handleGenre}) => {
    const [genres, setGenres] = useState([])
    const isFetched = useRef(false);

    const performAPICall = async () => {
        if (isFetched.current) return;
        isFetched.current = true;
        try {
            const response = await axios.get(
                `https://qtify-backend-labs.crio.do/genres`
              );
              setGenres(response.data.data);
              // console.log(response.data.data);
        } catch (error) {
          console.log(error);
        } 
      };
      useEffect(() => {
        performAPICall();
      }, []);

  return (
    <>
    <Button variant="text" onClick={() => handleGenre("")}>
        ALL
      </Button>
    {genres.map((genre) => (
        <Button 
        key={genre.key}
        variant="text"
        onClick={() => handleGenre(genre.key)}
        >{genre.label}</Button>
    ))}
    </>
  )
}

export default Genres