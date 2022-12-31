import Image from 'next/image';
import styles from './styles.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import carrosel_1 from '../../images/carrosel/carrosel_1.svg';
import carrosel_2 from '../../images/carrosel/carrosel_2.svg';
import carrosel_3 from '../../images/carrosel/carrosel_3.svg';

const Carrosel: React.FC = () => {
  return (
    <>
      <section className={styles.container}>
        <Carousel
          autoPlay
          infiniteLoop
          stopOnHover
          showArrows
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
        >
          <div>
            <Image src={carrosel_2} width={1900} alt="carrosel1" />
          </div>
          <div>
            <Image src={carrosel_1} width={1900} alt="carrosel2" />
          </div>
          <div>
            <Image src={carrosel_3} width={1900} alt="carrosel3" />
          </div>
        </Carousel>
      </section>
    </>
  );
};

export default Carrosel;
