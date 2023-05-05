"use client";
import styles from "./Header.module.scss";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <main className={styles.header}>
      <div className={styles.parent}>
        <p>NEW PRODUCT</p>
        <p>XX99 MARK II HEADPHONES</p>
        <p>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast
        </p>
        <button
          onClick={() => {
            router.push("/headphones/xx99-mark-two-headphones");
          }}
        >
          <p>SEE PRODUCT</p>
        </button>
      </div>
    </main>
  );
};

export default Header;
