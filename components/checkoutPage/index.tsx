"use client";
import React from "react";
import styles from "./CheckOutPage.module.scss";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import cash from "../../public/icon-cash-on-delivery.svg";
import { useEffect } from "react";
import CheckoutModal from "../checkoutModal";
import {
  ordered,
  restocked,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  remove,
  checkout,
  total,
  grandTotal,
} from ".././../src/app/redux/features/shop/shopSlice";
import {
  useAppDispatch,
  useAppSelector,
} from ".././../src/app/redux/app/hooks";

type Props = {};

function CheckoutPage({}: Props) {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [eMoneyText, setEmoneyText] = useState<string>("");
  const [eMoneyPin, setEmoneyPin] = useState<string>("");
  const [payment, setPayment] = useState<string>("eMoney");
  const [showCheckout, setShowCheckout] = useState<boolean>(false);

  const count = useAppSelector((state) => state.shop.numOfIcecreams);
  const product = useAppSelector((state) => state.shop.product);
  const totalAmount = useAppSelector((state) => state.shop.total);
  const grandAmount = useAppSelector((state) => state.shop.grandTotal);
  const dispatch = useAppDispatch();

  // console.log(count);
  // console.log(product);

  // This function code updates the state of the email input
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  // This function code updates the state of the name input
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  // This function code updates the state of the name input
  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.currentTarget.value);
  };

  // This function code updates the state of the name input
  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.currentTarget.value);
  };

  // This function code updates the state of the name input
  const handleZipCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZipCode(e.currentTarget.value);
  };

  // This function code updates the state of the name input
  const handleCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.currentTarget.value);
  };

  // This function code updates the state of the name input
  const handleCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  // This function code updates the state of the name input
  const handleEmoneyText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmoneyText(e.currentTarget.value);
  };

  // This function code updates the state of the name input
  const handleEmoneyPin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmoneyPin(e.currentTarget.value);
  };

  useEffect(() => {
    dispatch(total());
    dispatch(grandTotal());
  }, [product]);

  const handleSubmit =(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    product.length > 0 ? setShowCheckout(true) : ""
  }

  return (
    <>
      <CheckoutModal
        showCheckout={showCheckout}
        setShowCheckout={setShowCheckout}
      />
      <div className={styles.container}>
        <form className={styles.container__parent} onSubmit={(e) => handleSubmit(e) }>
          <p className={styles.container__back} onClick={() => router.back()}>
            Go Back
          </p>

          <div className={styles.content}>
            <div className={styles.content__head}>
              <h1>CHECKOUT</h1>

              <div>
                <div className={styles.head__one}>
                  <h2>BILLING DETAILS</h2>

                  <div className={styles.head__child}>
                    <label>
                      <h3>Name</h3>
                      <input
                        required
                        type="text"
                        value={name}
                        onChange={(e) => {
                          handleName(e);
                        }}
                        placeholder="Anazodo Michael"
                      />
                    </label>

                    <label>
                      <h3>Email address</h3>
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => {
                          handleEmail(e);
                        }}
                        placeholder="alexei@mail.com"
                      />
                    </label>
                  </div>

                  <label>
                    <h3>Phone Number</h3>
                    <input
                      required
                      type="text"
                      value={phone}
                      onChange={(e) => {
                        handlePhone(e);
                      }}
                      placeholder="+1202-555-0136"
                    />
                  </label>
                </div>

                <div className={styles.head__two}>
                  <h2>SHIPPING INFO</h2>

                  <label>
                    <h3>Your Address</h3>
                    <input
                      required
                      className={styles.width__100}
                      type="text"
                      value={address}
                      onChange={(e) => {
                        handleAddress(e);
                      }}
                      placeholder="1137 Williams Avenue"
                    />
                  </label>

                  <div className={styles.head__child}>
                    <label>
                      <h3>ZIP Code</h3>
                      <input
                        required
                        type="text"
                        value={zipCode}
                        onChange={(e) => {
                          handleZipCode(e);
                        }}
                        placeholder="10001"
                      />
                    </label>

                    <label>
                      <h3>City</h3>
                      <input
                        required
                        type="text"
                        value={city}
                        onChange={(e) => {
                          handleCity(e);
                        }}
                        placeholder="New York"
                      />
                    </label>
                  </div>

                  <label>
                    <h3>Country</h3>
                    <input
                      required
                      type="text"
                      value={country}
                      onChange={(e) => {
                        handleCountry(e);
                      }}
                      placeholder="+1202-555-0136"
                    />
                  </label>
                </div>

                <div className={styles.head__three}>
                  <h2>PAYMENT DETAILS</h2>

                  <div className={styles.payment}>
                    <div
                      onClick={() => setPayment("eMoney")}
                      className={
                        payment === "eMoney"
                          ? `${styles.payment__one} ${styles.active}`
                          : styles.payment__one
                      }
                    >
                      <div className={styles.round}>
                        <div className={styles.circle}></div>
                      </div>
                      <h3>e-Money</h3>
                    </div>

                    <div
                      onClick={() => setPayment("cashDelivery")}
                      className={
                        payment === "cashDelivery"
                          ? `${styles.payment__two} ${styles.active}`
                          : styles.payment__two
                      }
                    >
                      <div className={styles.round}>
                        <div className={styles.circle}></div>
                      </div>
                      <h3>Cash on Delivery</h3>
                    </div>
                  </div>
                </div>
              </div>
              {payment === "eMoney" ? (
                <div className={styles.head__child}>
                  <label>
                    <h3>e-Money Number</h3>
                    <input
                      required
                      type="text"
                      value={eMoneyText}
                      onChange={(e) => {
                        handleEmoneyText(e);
                      }}
                      placeholder="238521993"
                    />
                  </label>

                  <label>
                    <h3>e-Money PIN</h3>
                    <input
                      required
                      type="text"
                      value={eMoneyPin}
                      onChange={(e) => {
                        handleEmoneyPin(e);
                      }}
                      placeholder="6891"
                    />
                  </label>
                </div>
              ) : (
                <div>
                  <Image
                    src={cash}
                    width={60}
                    height={60}
                    alt="Pay on Delivery"
                  />
                  <p className={styles.cash}>
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </div>
              )}
            </div>

            <div className={styles.content__cart}>
              <h1>SUMMARY</h1>

              <div className={styles.content__items}>
                {product?.map((item, index) => (
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

                    <p className={styles.cart__quantity}>x{item.quantity}</p>
                  </div>
                ))}
              </div>

              <div className={styles.flex}>
                <h4>TOTAL</h4>
                <p>$ {Number(totalAmount).toLocaleString()}</p>
              </div>

              <div className={styles.flex}>
                <h4>SHIPPING</h4>
                <p>$ 50</p>
              </div>

              <div className={styles.flex}>
                <h4>VAT (INCLUDED)</h4>
                <p>$ 599.8</p>
              </div>

              <div className={styles.flex__total}>
                <h4>GRAND TOTAL</h4>
                <p>
                  {product.length > 0
                    ? `$${grandAmount.toLocaleString()}`
                    : `$0`}
                </p>
              </div>

              <button
              >
                <p>CONTINUE & PAY</p>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CheckoutPage;
