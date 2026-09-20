import { Footer, Navigation } from "../components";
import { getGalleryItems } from "../../lib/gallery";

export default function GalleryPage() {
  const items = getGalleryItems();

  return (
    <main>
      <Navigation />

      <section className="page-content gallery-page">
        <p className="page-label">Gallery</p>

        <h1>A dump of memories.</h1>

        <p className="page-description">
          Places, trips, random moments, and things worth keeping.
        </p>

        {items.length > 0 ? (
          <div className="gallery-grid">
            {items.map((item) => (
              <article
                className={`gallery-item gallery-item-${item.type}`}
                key={item.id}
              >
                {item.type === "photo" ? (
                  <img
                    src={item.src}
                    alt={item.caption ?? "Gallery memory"}
                    loading="lazy"
                  />
                ) : (
                  <video
                    src={item.src}
                    poster={item.thumbnail}
                    controls
                    preload="metadata"
                  />
                )}

                {(item.caption || item.location) && (
                  <div className="gallery-item-info">
                    {item.caption && <p>{item.caption}</p>}

                    {item.location && (
                      <span>{item.location}</span>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        ) : (
          <div className="gallery-empty">
            <span className="gallery-empty-mark">G</span>

            <h2>The memories are coming.</h2>

            <p>
              Photos, videos, places, trips, and random moments
              will find their way here.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}