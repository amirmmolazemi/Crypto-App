function Layout({ children }) {
  return (
    <>
      <div>
        <h1>Crypto App</h1>
        <p>
          <a href="https://github.com/amirmmolazemi">Amirmmolazemi</a>| react
          course practice
        </p>
      </div>
      <div>{children}</div>
      <div>
        <p>Developed by Amirmmolazemi with ❤️</p>
      </div>
    </>
  );
}

export default Layout;
