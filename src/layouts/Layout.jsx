import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>
          <a href="https://github.com/amirmmolazemi">Amirmmolazemi</a>| react
          course practice
        </p>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <p>Developed by Amirmmolazemi with ❤️</p>
      </footer>
    </>
  );
}

export default Layout;
