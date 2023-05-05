/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../public/audophile.svg";
import styles from "./Footer.module.scss";
import Link from "next/link";
import {AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram} from "react-icons/ai";


type Props = {}

const Footer = (props: Props) => {
  return (
    <div className={styles.footer}>
      
    <footer>
     <div className={styles.footer__first}>
    <Image src={logo} alt="logo" />

    <div className={styles.links} >
    <Link className={styles.link} href="/">Home</Link>
    <Link className={styles.link} href="/headphones">Headphones</Link>
    <Link className={styles.link} href="/speakers">Speakers</Link>
    <Link className={styles.link} href="/earphones">Earphones</Link>
    </div>

     </div>

     <div className={styles.footer__second}>
      <p>
      Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week
      </p>

      <div className={styles.socials}>
      <AiFillFacebook className={styles.icon} />
      <AiOutlineTwitter className={styles.icon} />
      <AiOutlineInstagram className={styles.icon} />
      </div>

     </div>

     <div className={styles.footer__third}>
      <p>Copyright 2021. All Rights Reserved</p>

      <div className={styles.socials}>
      <AiFillFacebook className={styles.icon} />
      <AiOutlineTwitter className={styles.icon} />
      <AiOutlineInstagram className={styles.icon} />
      </div>
     </div>

    </footer>

    </div>
    
  )
}

export default Footer