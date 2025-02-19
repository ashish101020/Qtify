import React, { useContext } from "react";
import { CurrentListContext } from "../../helpers/CurrentListContext";
import styled from "./SongBox.module.css";

const formatDuration = (ms) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds.padStart(2, "0")}`;
};

const SongBox = () => {
  const { currentList } = useContext(CurrentListContext);
  return (
    <>
      <div className={styled.back}></div>
      <div className={styled.songHero}>
        <div>
          <img src={currentList.image} alt="" className={styled.songImg} />
        </div>
        <div className={styled.heroDetail}></div>
      </div>

      {/* <pre>{JSON.stringify(currentList, null, 2)}</pre> */}
      <div className={styled.songTable}>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2 text-center flex-1 truncate">Title</th>
              <th className="border border-gray-300 p-2 text-center">Artist</th>
              <th className="border border-gray-300 p-2 text-right">
                Duration
              </th>
            </tr>
          </thead>
          <tbody className={styled.tableBody}>
            {currentList.songs.map((song, index) => (
              <React.Fragment key={song.id}>
                <tr className="h-10 flex justify-between items-center">
                  <td className="p-2 text-left flex items-center gap-9">
                    {song.image && (
                      <img
                        src={song.image}
                        alt={song.title}
                        className={styled.imgList}
                      />
                    )}
                    <span className="truncate flex-1">{song.title}</span>
                  </td>
                  <td className="p-2 text-center flex-1 truncate">
                    {song.artists.join(", ")}
                  </td>
                  <td className="p-2 text-right flex-1">
                    {formatDuration(song.durationInMs)}
                  </td>
                </tr>
                {index < currentList.songs.length - 1 && (
                  <tr>
                    <td colSpan="3">
                      <hr className={styled.line} />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SongBox;
