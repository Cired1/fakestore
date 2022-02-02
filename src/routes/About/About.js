import styles from "./About.module.css";
import image from "../../assets/hero.jpg";

const About = () => {
  return (
    <section className="page">
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={image} alt="about" className={styles.image} />
        </div>
        <div className={styles.right}>
          <h2 className={styles.title}>Our mission</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
