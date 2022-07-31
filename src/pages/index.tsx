import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";

import styles from "./home.module.scss";

type HomeProps = {
  product: {
    priceId: string;
    amount: string;
  };
};

const Home: NextPage<HomeProps> = ({ product }) => {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>Hey, welcome 👏</span>

          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get Access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async (props) => {
  const price = await stripe.prices.retrieve("price_1LKt3vJvbB3OYmdnokjQJgpm");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(Number(price.unit_amount) / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 1day
  };
};
