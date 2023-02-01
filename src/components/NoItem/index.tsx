import Image from 'next/image';
import styles from './styles.module.scss';
import logo from '../../../src/images/logo-high-size.svg';

interface Props {
  size: number;
}

const NoItem: React.FC<Props> = ({ size }: Props) => {
  return (
    <div className={styles.container}>
      <Image width={size} src={logo} alt={'logo'} />
    </div>
  );
};

export default NoItem;
