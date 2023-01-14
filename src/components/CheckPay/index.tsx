import styles from './styles.module.scss';

type Props = {
  total: number;
};

const CheckPay: React.FC<Props> = ({ total }: Props) => {
  return (
    <section className={styles.container}>
      <section className={styles.totalAmountBox}>
        <div className={styles.totalAmount}>
          <h3>Total Amount of</h3>
          <div className={styles.pricingAndShipping}>
            <div>
              <p>Amount</p>
              <p>${total}</p>
            </div>
            <div>
              <p>Shipping</p>
              <p>Free</p>
            </div>
          </div>
        </div>
        <div className={styles.vat}>
          <div className={styles.vatAndPrice}>
            <h3>The total Amount of (including VAT)</h3>
            <p>${total}</p>
          </div>
          <button>GOT TO CHECK</button>
        </div>
      </section>
      <section className={styles.promoBox}>
        <h3>Apply promo code</h3>
        <div className={styles.inputBox}>
          <input placeholder="Promo code" type="text" />
          <button>APPLY</button>
        </div>
      </section>
    </section>
  );
};

export default CheckPay;
