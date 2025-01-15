import ThumbsUp from "../../../public/assets/thumbs-up.svg";
import ThumbsDown from "../../../public/assets/thumbs-down.svg";
import Dogs from "../../../public/assets/dogs.jpg";
import Image from "next/image";
import styles from "./style.module.css";

const Post = ({ user, content, likes, dislikes }) => {
  return (
    <div className={styles.container}>
      {/* Uncomment this during Activity #4 */}
      {/* <Image
        className={styles.dogImage}
        src={Dogs}
        width={500}
        height={300}
        alt="dogs"
      /> */}
      <div className={styles.userInteractions}>
        <h3>{user}</h3>
        <div className={styles.likesContainer}>
          <p>{likes}</p>
          <Image src={ThumbsUp} width={20} height={20} alt="thumbs_up" />
          <p>{dislikes}</p>
          <Image src={ThumbsDown} width={20} height={20} alt="thumbs_down" />
        </div>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Post;