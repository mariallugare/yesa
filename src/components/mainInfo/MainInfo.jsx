import './MainInfo.css';

export default function MainInfo() {
  return (
    <div className="main-info">
      <h1>
      UNLOCKING <br /> REAL-ESTATE <span id="now"> </span>
      </h1>
      <p id="info">
        We specialize in  <span>tokenizing</span> real-estate <span></span> enabling fractional ownership and seamless trading of property assets on blockchai
      </p>
      <div style={{ marginTop: '30px', display: 'flex' }}>
        <a href="#">Check out</a>
        <a href="#">Docs</a>
      </div>
    </div>
  );
}
