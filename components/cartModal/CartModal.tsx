"use client";
import styles from "./CartModal.module.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import {
  increaseQuantity,
  decreaseQuantity,
  checkout,
  total,
} from ".././../src/app/redux/features/shop/shopSlice";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import {
  useAppDispatch,
  useAppSelector,
} from ".././../src/app/redux/app/hooks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

function CartModal() {
  const count = useAppSelector((state) => state.shop.numOfIcecreams);
  const products = useAppSelector((state) => state.shop.product);
  const totalAmount = useAppSelector((state) => state.shop.total);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(total());
  }, [products]);


 

  const { show, setShow } = useAuth();
  useEffect(() => {
    if(show){
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = ''; 
    }
  }, [show]);

  if (!show) return null;

  return (
    <div
      className={styles.modal}
      onClick={() => setShow((prevValue) => !prevValue)}
    >
      {products.length > 0 ? (
        <div
          className={styles.modal__cart}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.header}>
            <p className={styles.cart__title}>CART({products.length})</p>
            <p
              onClick={() => {
                dispatch(checkout());
              }}
            >
              Remove all
            </p>
          </div>

          <div className={styles.content__items}>
            {products?.map((item, index) => (
              <div className={styles.content__item} key={item.id}>
                <div className={styles.content__image}>
                  <div className={styles.card__image}>
                    <Image
                      src={item.image.desktop}
                      alt="Picture of the item"
                      width={500}
                      height={500}
                    />
                  </div>

                  <div className={styles.card__image__tablet}>
                    <Image
                      src={item.image.tablet}
                      alt="Picture of the item"
                      width={400}
                      height={400}
                    />
                  </div>

                  <div className={styles.card__image__mobile}>
                    <Image
                      src={item.image.mobile}
                      alt="Picture of the item"
                      width={350}
                      height={350}
                    />
                  </div>

                  <div className={styles.content__text}>
                    <h4>{item.cartname}</h4>
                    <p>$ {item.price}</p>
                  </div>
                </div>

                <div className={styles.range}>
                  <AiOutlineMinus
                    className={styles.range__minus}
                    onClick={() => dispatch(decreaseQuantity(item))}
                  />
                  <p className={styles.range__text}>{item.quantity}</p>
                  <AiOutlinePlus
                    className={styles.range__plus}
                    onClick={() => dispatch(increaseQuantity(item))}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className={styles.flex}>
            <h4>TOTAL</h4>
            <p>$ {Number(totalAmount).toLocaleString()}</p>
          </div>
          <button
            onClick={() => {
              router.push("/checkout");
              setShow(false);
            }}
          >
            <Link href={"/checkout"} className={styles.link}>
              CHECKOUT
            </Link>
          </button>
        </div>
      ) : (
        <div
          className={styles.modal__parent}
          onClick={(e) => e.stopPropagation()}
        >
          <p className={styles.cart__title}>Your cart is empty</p>
          <AiOutlineShoppingCart className={styles.cart__empty} />
        </div>
      )}
    </div>
  );
}

export default CartModal;
