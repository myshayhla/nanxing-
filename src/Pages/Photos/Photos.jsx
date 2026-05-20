import NewsImg from "../../assets/Images/NewsImg.webp";
import "./Style.scss";

const PHOTOS = [
  { id: 1, img: NewsImg, alt: "Qalereya şəkli 1" },
  { id: 2, img: NewsImg, alt: "Qalereya şəkli 2" },
  { id: 3, img: NewsImg, alt: "Qalereya şəkli 3" },
  { id: 4, img: NewsImg, alt: "Qalereya şəkli 4" },
  { id: 5, img: NewsImg, alt: "Qalereya şəkli 5" },
  { id: 6, img: NewsImg, alt: "Qalereya şəkli 6" },
];

function Photos() {
  return (
    <section id="photos-page" className="photos-page" aria-label="Şəkillər">
      <div className="photos-page__grid">
        {PHOTOS.map((photo) => (
          <article className="photos-page__item" key={photo.id}>
            <div className="photos-page__thumb">
              <img src={photo.img} alt={photo.alt} loading="lazy" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Photos;
