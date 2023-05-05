"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import photo1 from "../../public/imageheadphones.png";
import photo2 from "../../public/imagespeakers.png";
import photo3 from "../../public/imageearphones.png";
import logo from "../../public/audophile.svg";
import styles from "./Navigation.module.scss";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import {
  AiOutlineShoppingCart,
  AiOutlineClose,
  AiOutlineRight,
} from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import { usePathname } from "next/navigation";
import { useAppSelector } from ".././../src/app/redux/app/hooks";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const { show, setShow, page, setPage } = useAuth();

  const pathname = usePathname();

  useEffect(() => {
    if(isOpen){
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = ''; 
    }
  }, [isOpen]);

  console.log(page, pathname);
  const products = useAppSelector((state) => state.shop.product);

  return (
    <div className={styles.nav}>
      <nav>
        <div className={styles.flex}>
          {isOpen ? (
            <AiOutlineClose
              className={styles.hamburger}
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <BiMenu
              className={styles.hamburger}
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
          <Image
            onClick={() => {
              router.push("/");
            }}
            className={styles.logo}
            src={logo}
            alt="audophile logo"
          />
        </div>

        <Image
          onClick={() => {
            router.push("/");
          }}
          className={styles.logo2}
          src={logo}
          alt="audophile logo"
        />

        <div className={styles.links}>
          <div onClick={() => setPage("/")}>
            <Link
              className={
                pathname === "/" || page === "/" ? styles.page : styles.link
              }
              href="/"
            >
              Home
            </Link>
          </div>
          <div onClick={() => setPage("headphones")}>
            <Link
              className={
                pathname === "/headphones" || page === "/headphones"
                  ? styles.page
                  : styles.link
              }
              href="/headphones"
            >
              Headphones
            </Link>
          </div>

          <div onClick={() => setPage("/speakers")}>
            <Link
              className={
                pathname === "/speakers" || page === "/speakers"
                  ? styles.page
                  : styles.link
              }
              href="/speakers"
            >
              Speakers
            </Link>
          </div>

          <div onClick={() => setPage("/earphones")}>
            <Link
              className={
                pathname === "/earphones" || page === "/earphones"
                  ? styles.page
                  : styles.link
              }
              href="/earphones"
            >
              Earphones
            </Link>
          </div>
        </div>

        <div
          className={
            isOpen
              ? `${styles.mobile__nav} ${styles.expanded}`
              : styles.mobile__nav
          }
        >
          <div className={styles.wrapper}>
            <Image
              className={styles.wrapper__image}
              src={photo1}
              alt="headphones"
            />
            <div className={styles.wrapper__parent}>
              <p>Headphones</p>
              <div
                onClick={() => {
                  router.push("/headphones");
                  setIsOpen((prevValue) => !prevValue);
                }}
                className={styles.wrapper__child}
              >
                <p>SHOP</p>
                <AiOutlineRight className={styles.arrow} />
              </div>
            </div>
          </div>

          <div className={styles.wrapper}>
            <Image
              className={styles.wrapper__image}
              src={photo2}
              alt="speakers"
            />

            <div className={styles.wrapper__parent}>
              <p>Speakers</p>
              <div
                onClick={() => {
                  router.push("/speakers");
                  setIsOpen((prevValue) => !prevValue);
                }}
                className={styles.wrapper__child}
              >
                <p>SHOP</p>
                <AiOutlineRight className={styles.arrow} />
              </div>
            </div>
          </div>

          <div className={styles.wrapper}>
            <Image
              className={styles.wrapper__image}
              src={photo3}
              alt="speakers"
            />

            <div className={styles.wrapper__parent}>
              <p>Earphones</p>
              <div
                onClick={() => {
                  router.push("/earphones");
                  setIsOpen((prevValue) => !prevValue);
                }}
                className={styles.wrapper__child}
              >
                <p>SHOP</p>
                <AiOutlineRight className={styles.arrow} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cart__parent}>
          {products.length > 0 ? <p>{products.length}</p> : " "}
          <AiOutlineShoppingCart
            onClick={() => setShow((prevValue) => !prevValue)}
            className={styles.cart}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
