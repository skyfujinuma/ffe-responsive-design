import Image from "next/image";
import ProfileIcon from "../../../public/assets/profile.svg";
import styles from "./style.module.css";

const Profile = ({ name, description, phone_number, email, linkedIn }) => {
  return (
    <div className={styles.container}>
      <div className={styles.profileHeader}>
        <Image src={ProfileIcon} width={100} height={100} alt="profile_icon" />
        <h1>{name}</h1>
      </div>
      <div className={styles.about}>
        <h2>About Me</h2>
        <p>{description}</p>
        <p>{phone_number}</p>
        <p>
          <strong>Email Address: </strong>
          {email}
        </p>
      </div>
      <a href={linkedIn} className={styles.followButton}>
        Follow Me
      </a>
    </div>
  );
};

export default Profile;
