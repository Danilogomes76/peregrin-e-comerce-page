import Image from 'next/image';
import styles from './styles.module.scss';

interface Props {
  img: string;
  title: string;
  description: string;
  className?: string;
}

const HelpCard: React.FC<Props> = ({
  img,
  title,
  description,
  className,
}: Props) => {
  return (
    <div className={`${className} ${styles.container}`}>
      <Image src={img} alt="Card Icon" />
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default HelpCard;
