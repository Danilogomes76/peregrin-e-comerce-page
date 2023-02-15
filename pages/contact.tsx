import Head from 'next/head';
import Image from 'next/image';
import woman from '../src/images/woman-contact.svg';
import styles from '../styles/pageStyles/contact.module.scss';

const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>Peregrin Contact</title>
      </Head>
      <main role="main" className={styles.container}>
        <section
          role="region"
          aria-labelledby="contact-heading"
          className={styles.sectionContact}
        >
          <form onSubmit={e => e.preventDefault()}>
            <legend id="contact-heading">Contact Us</legend>
            <p>
              Thanks for visiting our site. If you have any questions or need
              assistance, please do not hesitate to contact us via our contact
              form or by sending an email to peregrin@xxx.com. We look forward
              to helping you!
            </p>
            <fieldset className={styles.inputs}>
              <div className={styles.nameAndEmail}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Name" />
              </div>
              <div className={styles.nameAndEmail}>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="Email" />
              </div>
              <textarea
                id="message"
                placeholder="Type your message here"
                name=""
                cols={30}
                rows={10}
              ></textarea>
              <button
                type="submit"
                onClick={e => {
                  console.log(e);
                }}
              >
                Submit
              </button>
            </fieldset>
          </form>
          <Image src={woman} alt="Woman Img" />
        </section>
      </main>
    </>
  );
};

export default Contact;
