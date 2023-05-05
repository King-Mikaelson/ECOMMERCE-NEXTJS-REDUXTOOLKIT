import styles from "./CheckoutModal.module.scss";
import {
  useAppSelector,
  useAppDispatch,
} from ".././../src/app/redux/app/hooks";
import { AiFillCheckCircle } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";
import { checkout } from ".././../src/app/redux/features/shop/shopSlice";

function CheckoutModal({
  showCheckout,
  setShowCheckout,
}: {
  showCheckout: boolean;
  setShowCheckout: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const product = useAppSelector((state) => state.shop.product);
  const grandAmount = useAppSelector((state) => state.shop.grandTotal);
  const router = useRouter();
  const dispatch = useAppDispatch();

  console.log(product[0]?.cartname);

  useEffect(() => {
    if (showCheckout) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showCheckout]);

  if (!showCheckout) return null;
  return (
    <div
      className={styles.checkout__modal}
      onClick={() => setShowCheckout((prevValue) => !prevValue)}
    >
      <div
        className={styles.checkout__modal__parent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.checkout__modal__header}>
          <AiFillCheckCircle className={styles.cart__icon} />
          <h2>THANK YOU FOR YOUR ORDER</h2>
          <p>You will receive an email confirmation shortly.</p>
        </div>

        <div className={styles.checkout__modal__content}>
          <div className={styles.content__parent}>
            <div className={styles.content__item}>
              <div className={styles.content__image}>
                <div className={styles.card__image}>
                  <Image
                    src={product[0]?.image.desktop}
                    alt="Picture of the item"
                    width={64}
                    height={64}
                  />
                </div>

                <div className={styles.card__image__tablet}>
                  <Image
                    src={product[0]?.image.tablet}
                    alt="Picture of the item"
                    width={40}
                    height={40}
                  />
                </div>

                <div className={styles.card__image__mobile}>
                  <Image
                    src={product[0]?.image.mobile}
                    alt="Picture of the item"
                    width={35}
                    height={35}
                  />
                </div>

                <div className={styles.content__text}>
                  <h4>{product[0]?.cartname}</h4>
                  <p>$ {product[0]?.price}</p>
                </div>
              </div>

              <p className={styles.cart__quantity}>x{product[0]?.quantity}</p>
            </div>

            {product.length > 1 ? (
              <p className={styles.content__items}>
                and {product.length - 1} other{" "}
                {product.length - 1 > 1 ? "items" : "item"}
              </p>
            ) : (
              " "
            )}
          </div>

          <div className={styles.total}>
            <h4>GRAND TOTAL</h4>
            <p>{`$${grandAmount.toLocaleString()}`}</p>
          </div>
        </div>
        <button
          onClick={() => {
            dispatch(checkout());
            document.body.style.overflow = "";
            router.push("/")
          }}
        >
          <p>BACK TO HOME</p>
        </button>
      </div>
    </div>
  );
}

export default CheckoutModal;
