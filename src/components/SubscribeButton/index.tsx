import styles from "./styles.module.scss";

type SubscribeButton = {
  priceId: string;
};

export function SubscribeButton({ priceId }: SubscribeButton) {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
}
