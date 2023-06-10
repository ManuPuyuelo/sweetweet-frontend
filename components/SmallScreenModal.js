import styles from "../styles/SmallScreenModal.module.css";

function SmallScreenModal() {
  return (
    <div className={styles.modal}>
      <i
        aria-label="icon: desktop"
        style={{ fontSize: "80px", color: "rgb(249, 74, 86)" }}
      >
        <svg
          viewBox="64 64 896 896"
          focusable="false"
          class=""
          data-icon="desktop"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M928 140H96c-17.7 0-32 14.3-32 32v496c0 17.7 14.3 32 32 32h380v112H304c-8.8 0-16 7.2-16 16v48c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8v-48c0-8.8-7.2-16-16-16H548V700h380c17.7 0 32-14.3 32-32V172c0-17.7-14.3-32-32-32zm-40 488H136V212h752v416z"></path>
        </svg>
      </i>
      <p
        style={{
          margin: "0",
          marginTop: "1%",
          fontSize: "30px",
          color: "rgb(255, 255, 255)",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Votre fenêtre est trop petite.
      </p>
      <p>
        Elargissez votre fenêtre à plus de 800 pixels pour accéder aux
        ressources.
      </p>
    </div>
  );
}

export default SmallScreenModal;
