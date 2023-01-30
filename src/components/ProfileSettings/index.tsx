import { useState } from 'react';
import styles from './styles.module.scss';

const ProfileSettings: React.FC = () => {
  const [value, setValue] = useState('');

  function handleChange(event: any) {
    let phoneNumber = event.target.value;
    phoneNumber = phoneNumber.replace(/\D/g, '');
    phoneNumber = phoneNumber.replace(/(\d{2})(\d{5})(\d{4})/, '($1)$2-$3');
    if (phoneNumber.length > 14) {
      return;
    }
    setValue(phoneNumber);
  }

  return (
    <section className={styles.container}>
      <h1>My Details</h1>
      <section>
        <h2 className={styles.topicName}>Personal Information</h2>
        <form onSubmit={e => e.preventDefault()}>
          <div className={styles.names}>
            <div className={styles.inputBx}>
              <label htmlFor="first-name">First Name</label>
              <input type="text" />
            </div>
            <div className={styles.inputBx}>
              <label htmlFor="last-name">Last Name</label>
              <input type="text" />
            </div>
          </div>
          <div className={styles.inputBx}>
            <label htmlFor="birthdate">Birthdate</label>
            <input type="date" />
          </div>
          <div className={styles.inputBx}>
            <label htmlFor="phone-number">Phone Number</label>
            <input
              type="tel"
              value={value}
              onChange={handleChange}
              pattern="^\(\d{2}\)\d{5}-\d{4}$"
            />
          </div>
          <button>Save</button>
        </form>
      </section>
      <section>
        <h2 className={styles.topicName}>Email Address</h2>
        <form onSubmit={e => e.preventDefault()}>
          <div className={styles.inputBx}>
            <label htmlFor="email">Email Address</label>
            <input type="email" />
          </div>
          <div className={styles.inputBx}>
            <label htmlFor="email-confirm">Confirm Email Address</label>
            <input type="email" />
          </div>
          <button>Save</button>
        </form>
      </section>
      <section>
        <h2 className={styles.topicName}>Password</h2>
        <form onSubmit={e => e.preventDefault()}>
          <div className={styles.inputBx}>
            <label htmlFor="current-password">Current Password</label>
            <input type="password" />
          </div>
          <div className={styles.inputBx}>
            <label htmlFor="new-password">New Password</label>
            <input type="password" />
          </div>
          <div className={styles.inputBx}>
            <label htmlFor="confirm-new-password">Confirm New Password</label>
            <input type="password" />
          </div>
          <button>Save</button>
        </form>
      </section>
    </section>
  );
};

export default ProfileSettings;
