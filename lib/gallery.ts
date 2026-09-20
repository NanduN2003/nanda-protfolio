export type GalleryMediaType = "photo" | "video";

export type GalleryItem = {
  id: string;
  type: GalleryMediaType;
  src: string;
  thumbnail?: string;
  caption?: string;
  location?: string;
  date?: string;
};

const galleryItems: GalleryItem[] = [];

export function getGalleryItems(): GalleryItem[] {
  return galleryItems;
}

export function getGalleryItemById(
  id: string
): GalleryItem | undefined {
  return galleryItems.find((item) => item.id === id);
}