export default function Homepage({ changeScreen }) {
  return (
    <section className="homepage">
      <div className="homepage-content">
        <img src="./assets/img/logo1.png" alt="logo" />
        <h1>ZapRecall</h1>
        <button onClick={changeScreen}>Iniciar Recall!</button>
      </div>
    </section>
  );
}
