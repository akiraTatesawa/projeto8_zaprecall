export default function Homepage({ startGame }) {
  return (
    <section className="homepage">
      <div className="homepage-content">
        <img src="./assets/img/logo1.png" alt="logo" />
        <h1>ZapRecall</h1>
        <button onClick={startGame}>Iniciar Recall!</button>
      </div>
    </section>
  );
}
