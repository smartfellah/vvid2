import styles from "./styles/home.module.css";
import bgMainGradient from "../images/png/bg_main_gradient.png";
import bgMainSmoke from "../images/png/bg_main_smoke.png";
export function Home() {
  return (
    <div>
      <section className={`${styles["create-with-us"]}`}>
        <div className={`${styles["create-with-us_container"]}`}>
          <h1 className={`${styles["create-with-us_header"]}`}>
            <span className={`${styles["create-with-us_intro"]}`}>
              Твори вместе с
            </span>{" "}
            <span className={`${styles["project-name"]}`}>Project VVID</span>
          </h1>
          <p className={`${styles["create-with-us_description"]}`}>
            Low-code среда разработки <br />
            смарт-контрактов для блокчейн платформ <br /> Solana и Hyperledger
            Fabric
          </p>
        </div>
      </section>
    </div>
  );
}
