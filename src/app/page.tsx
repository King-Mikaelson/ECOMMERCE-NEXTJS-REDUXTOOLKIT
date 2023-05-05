 "use client";
 import styles from "./page.module.scss";
 import Header from "../../components/header/Header"
 import Main from "../../components/mainBodyHome/Main";
import { useAuth } from "../../context/AuthContext";

export default function Home() {
   const {show, setShow} = useAuth();

  return (
    <main className={styles.home}>
    <Header />
    <Main />
    </main>
  )
}
