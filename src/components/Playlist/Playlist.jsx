import Navbar from "../Navbar/Navbar";
import SongBox from "../SongsBox/SongBox";
import styled from './Playlist.module.css'

const Playlist = () => {
  

  return (
    <div className={styled.main}>
    <Navbar/>
    <SongBox/>
    </div>
  );
};

export default Playlist;
