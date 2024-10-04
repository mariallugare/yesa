import './Guide.css';

export default function Guide() {
  return (
    <div style={{ marginTop: '120px' }}>
      <div className="step hidden">
        <div className="iconWrapper">
          <img src={new URL('/src/assets/scan.svg', import.meta.url)} alt="" />
        </div>
        <p className="description">
          <span>Browse</span> - Explore a diverse portfolio of tokenized real estate assets available for investment. View detailed information, and assess investment opportunities tailored to your.&apos;interest.
        </p>
      </div>

      <div className="line" style={{ transform: 'rotate(180deg)' }}></div>
      <div className="line"></div>

      <div className="step hidden">
        <div className="iconWrapper">
          <img src={new URL('/src/assets/body.svg', import.meta.url)} alt="" />
        </div>
        <p className="description">
          <span>Buy</span> - Identify a property that aligns with your investment goals, proceed to purchase digital tokens representing fractional ownership of the asset. This straightforward process enables you to invest with confidence, knowing you are part of a secure and transparent &apos;transactions.
        </p>
      </div>

      <div className="line" style={{ transform: 'rotate(180deg)' }}></div>
      <div className="line"></div>

      <div className="step hidden">
        <div className="iconWrapper">
          <img src={new URL('/src/assets/checkmark.svg', import.meta.url)} alt="" />
        </div>
        <p className="description">
          <span>Earn</span> earn passive income through rental yields and profit-sharing from property appreciation. Our system ensures timely distributions, providing you with a reliable income stream while you benefit from the growth of your&apos;investments.
        </p>
      </div>

      <div className="step hidden">
        <div className="iconWrapper">
          <img src={new URL('/src/assets/checkmark.svg', import.meta.url)} alt="" />
        </div>
        <p className="description">
          <span>Earn</span> earn passive income through rental yields and profit-sharing from property appreciation. Our system ensures timely distributions, providing you with a reliable income stream while you benefit from the growth of your&apos;investments.
        </p>
      </div>
    </div>
  );
}
