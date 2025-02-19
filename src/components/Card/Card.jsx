import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; 
import { CurrentListContext } from "../../helpers/CurrentListContext";
import styles from "./Card.module.css";

const Card = ({ pack }) => {
  const navigate = useNavigate(); 
  const { setCurrentList } = useContext(CurrentListContext);

  const show = (pack) => {
    setCurrentList(pack);
    navigate("/playlist"); 
  };

  const play = (pack) => {
    console.log(pack.title);
  };

  return (
    <>
      <div
        className={styles.card}
        {...(pack.songs ? { onClick: () => show(pack) } : { onClick: () => play(pack) })}
      >
        <img src={pack.image} alt="" className={styles.image} />
        {pack.follows && (
          <div className={styles.follows}>
            <p>{pack.follows} Follows</p>
          </div>
        )}
        {pack.likes && (
          <div className={styles.likes}>
            <p>{pack.likes} Likes</p>
          </div>
        )}
      </div>
      <h3 className={styles.type}>{pack.title}</h3>
    </>
  );
};

export default Card;
