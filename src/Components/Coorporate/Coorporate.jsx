import React from 'react';
import "./Style.scss";

function Coorporate() {
    const values = [
      {
        id: 1,
        title: "Keyfiyyət",
        description:
          "İstehsal və texnoloji həllərimizdə yüksək keyfiyyət standartlarını əsas götürərək avadanlıqların uzunömürlü və stabil işləməsini təmin edirik.",
      },
      {
        id: 2,
        title: "Etibarlılıq",
        description:
          "Müştərilərimizlə uzunmüddətli əməkdaşlıq quraraq təqdim etdiyimiz hər bir həldə sabitlik, dəqiqlik və güvən prinsipinə önəm veririk.",
      },
      {
        id: 3,
        title: "İnnovasiya",
        description:
          "Sənaye texnologiyalarında yenilikləri izləyərək daha effektiv, sürətli və müasir istehsal həlləri təqdim edirik.",
      },
      {
        id: 4,
        title: "İnkişaf Hədəfi",
        description:
          "Daim inkişaf edərək və beynəlxalq standartlara uyğunlaşaraq fəaliyyətimizi genişləndirir və müştərilərimiz üçün daha dəyərli həllər yaradırıq.",
      },
    ];

  return (
    <section id="coorporate">
      <div className="coorporate-container">
        <div className="head">
          <h1>Korporativ dəyərlərimiz</h1>
          <p>
            Fəaliyyətimizin əsasını keyfiyyət, etibarlılıq və innovasiya
            prinsipləri təşkil edir. Bu dəyərlər sayəsində müştərilərimizə
            davamlı və yüksək performanslı sənaye həlləri təqdim edirik.
          </p>
        </div>
        <div className="cards">
          <div className="cards-container">
            {values.map((item) => (
              <div className="card" key={item.id}>
                <div className="head">
                  <div className="card-id">
                    <span>0{item.id}</span>
                  </div>
                    <span className='id-title'>{item.title}</span>
                </div>
                <div className="content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Coorporate;
