"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { shopProduct, Product } from "../../model";
import styles from "./DyanmicPage.module.scss";
import Image from "next/image";
import BodyCard from "../bodyCard/BodyCard";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import {
  restocked,
  addToCart,
} from ".././../src/app/redux/features/shop/shopSlice";
import {
  useAppDispatch,
  useAppSelector,
} from ".././../src/app/redux/app/hooks";
import FooterCard from "../footerCard/FooterCard";

type Props = {
  product: shopProduct;
};

interface Include {
  quantity: number;
  item: string;
}

interface Image {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface Other {
  slug: string;
  name: string;
  image: Image;
  cartname?: string;
}

function DynamicPage({ product }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const { setPage } = useAuth();
  const [quantity,setQuantity] = useState<number>(1);

  const count1 = useAppSelector((state) => state.shop.numOfIcecreams);
  const products = useAppSelector((state) => state.shop.product);
  const dispatch = useAppDispatch();


  let image: string = product?.image.desktop as string;
  let image1: string = product?.image.tablet as string;
  let image2: string = product?.image.mobile as string;
  let list: Include[] = product?.includes as Include[];
  let others: Other[] = product?.others as Other[];

  let image3: string = product?.gallery.first.desktop as string;
  let image4: string = product?.gallery.first.tablet as string;
  let image5: string = product?.gallery.first.mobile as string;

  let image6: string = product?.gallery.second.desktop as string;
  let image7: string = product?.gallery.second.tablet as string;
  let image8: string = product?.gallery.second.mobile as string;

  let image9: string = product?.gallery.third.desktop as string;
  let image10: string = product?.gallery.third.tablet as string;
  let image11: string = product?.gallery.third.mobile as string;

  //  A function that takes a name from our json data and returns the path to navigate to...
  function returnPath(data: string) {
    var streetaddress = data.split("-");
    var result = streetaddress[streetaddress.length - 1];
    return result === "speaker" ? `${result}s` : result;
  }

  useEffect(() => {
    function returnPage(data: string) {
      var streetaddress = data.split("/");
      var result = streetaddress[1];
      setPage(`/${result}`);
      return result;
    }
    returnPage(pathname);
  }, [pathname]);

  return (
    <div className={styles.container}>
      <main className={styles.container__parent}>
        <p className={styles.container__back} onClick={() => router.back()}>
          Go Back
        </p>

        <div className={styles.content}>
          <div className={styles.content__head}>
            <div className={styles.card__image}>
              <Image
                src={image}
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>

            <div className={styles.card__image__tablet}>
              <Image
                src={image1}
                alt="Picture of the author"
                width={400}
                height={400}
              />
            </div>

            <div className={styles.card__image__mobile}>
              <Image
                src={image2}
                alt="Picture of the author"
                width={350}
                height={350}
              />
            </div>

            <div className={styles.head__body}>
              <div className={styles.head__text}>
                <p>NEW PRODUCT</p>
                <h1>{product?.name}</h1>
                <p>{product?.description}</p>
                <p>$ {product?.price.toLocaleString()}</p>
              </div>

              <div className={styles.head__cart}>
                <div className={styles.range}>
                  <AiOutlineMinus className={styles.range__minus} onClick={() => {setQuantity((prevValue) => prevValue > 1 ? prevValue - 1 : 1); dispatch(restocked(quantity)) }} />
                  <p className={styles.range__text}>{quantity}</p>
                  <AiOutlinePlus className={styles.range__plus} onClick={() => {setQuantity((prevValue) => prevValue  + 1); dispatch(restocked(quantity)) }}/>
                </div>
                <button onClick={() => { dispatch(addToCart({...product, quantity})) }}>
                  <p>ADD TO CART</p>
                </button>
              </div>
            </div>
          </div>

          <div className={styles.features__parent}>
            <div className={styles.features__text}>
              <h3>FEATURES</h3>
              <p>{product?.features}</p>
            </div>

            <div className={styles.features__number}>
              <h3>IN THE BOX</h3>
              <div>
                {list?.map((item, index) => (
                  <div className={styles.list__child} key={index}>
                    <p>{item.quantity}x</p>
                    <p>{item.item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.features__images}>
            <div className={styles.features__images1}>
              <div className={styles.features__card}>
                <div className={styles.card__image}>
                  <Image
                    src={image3}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </div>

                <div className={styles.card__image__tablet}>
                  <Image
                    src={image4}
                    alt="Picture of the author"
                    width={400}
                    height={400}
                  />
                </div>

                <div className={styles.card__image__mobile}>
                  <Image
                    src={image5}
                    alt="Picture of the author"
                    width={300}
                    height={300}
                  />
                </div>
              </div>

              <div className={styles.features__card}>
                <div className={styles.card__image}>
                  <Image
                    src={image6}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </div>

                <div className={styles.card__image__tablet}>
                  <Image
                    src={image7}
                    alt="Picture of the author"
                    width={400}
                    height={400}
                  />
                </div>

                <div className={styles.card__image__mobile}>
                  <Image
                    src={image8}
                    alt="Picture of the author"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </div>

            <div className={styles.features__images2}>
              <div className={styles.card__image}>
                <Image
                  src={image9}
                  alt="Picture of the author"
                  width={700}
                  height={700}
                />
              </div>

              <div className={styles.card__image__tablet}>
                <Image
                  src={image10}
                  alt="Picture of the author"
                  width={400}
                  height={400}
                />
              </div>

              <div className={styles.card__image__mobile}>
                <Image
                  src={image11}
                  alt="Picture of the author"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>

          <div className={styles.features__products}>
            <h3>YOU MAY ALSO LIKE</h3>

            <div className={styles.features__card__wrapper}>
              {others?.map((item, index) => (
                <div key={index} className={styles.features__card}>
                  <div className={styles.card__image}>
                    <Image
                      src={item.image.desktop}
                      alt="image"
                      width={500}
                      height={500}
                    />
                  </div>

                  <div className={styles.card__image__tablet}>
                    <Image
                      src={item.image.tablet}
                      alt="Picture of the author"
                      width={400}
                      height={400}
                    />
                  </div>

                  <div className={styles.card__image__mobile}>
                    <Image
                      src={item.image.mobile}
                      alt="Picture of the author"
                      width={300}
                      height={300}
                    />
                  </div>

                  <h4>{item.name}</h4>

                  <button>
                    <Link
                      className={styles.link}
                      href={`/${returnPath(
                        item.slug.trim()
                      )}/${item.slug.trim()}`}
                    >
                      SEE PRODUCT
                    </Link>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <BodyCard />
      <FooterCard/>
    </div>
  );
}

export default DynamicPage;
