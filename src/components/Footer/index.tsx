import Image from 'next/image';
import styles from './styles.module.scss';
import facebook from '../../images/socialIcons/Facebook.svg';
import twitter from '../../images/socialIcons/Twitter.svg';
import instagram from '../../images/socialIcons/Instagram.svg';
import linkedin from '../../images/socialIcons/Linkedin.svg';

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.nav}>
        <div>
          <p>Company</p>
          <ul>
            <li>About Us</li>
            <li>Why Choose us</li>
            <li>Pricing</li>
            <li>Testimonial</li>
          </ul>
        </div>
        <div>
          <p>Resources</p>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms and Condition</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <p>Product</p>
          <ul>
            <li>Project managment</li>
            <li>Time tracker</li>
            <li>Time Schedlie</li>
            <li>Lead generate</li>
          </ul>
        </div>
        <form onSubmit={e => e.preventDefault()} className={styles.formEmail}>
          <h2>Peregrin</h2>
          <p>Subscribe to our Newsletter</p>
          <div className={styles.formInput}>
            <input placeholder="Enter your Email" type="text" />
            <button>Subscribe</button>
          </div>
        </form>
      </div>
      <div className={styles.social}>
        <p>Copyright @2022</p>
        <div className={styles.socialIcons}>
          <Image src={facebook} alt="facebook" />
          <Image src={twitter} alt="twitter" />
          <Image src={instagram} alt="instagram" />
          <Image src={linkedin} alt="linkedin" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
