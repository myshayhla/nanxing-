import "./Style.scss";

const VIDEOS = [
  { id: "1", embedId: "dQw4w9WgXcQ" },
  { id: "2", embedId: "dQw4w9WgXcQ" },
  { id: "3", embedId: "dQw4w9WgXcQ" },
  { id: "4", embedId: "dQw4w9WgXcQ" },
];

function Videos() {
  return (
    <section id="videos-page" className="videos-page" aria-label="Videolar">
      <div className="videos-page__inner">
        <div className="videos-page__grid">
          {VIDEOS.map((item) => (
            <div className="videos-page__cell" key={item.id}>
              <div className="videos-page__embed">
                <iframe
                  src={`https://www.youtube.com/embed/${item.embedId}`}
                  title={`Video ${item.id}`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Videos;
