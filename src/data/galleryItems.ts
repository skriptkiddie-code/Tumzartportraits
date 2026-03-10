export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: string;
  description: string;
}

const imageModules = import.meta.glob("/src/assets/portrait-{pencil,pen,digital}-*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const metadataByFilename: Record<
  string,
  { title: string; category: "Pencil Sketches" | "Pen Drawings"; description: string }
> = {
  "portrait-pencil-1.jpg": {
    title: "Portrait of a Young Man",
    category: "Pencil Sketches",
    description: "Graphite pencil, 2024",
  },
  "portrait-pencil-2.jpg": {
    title: "Two Souls",
    category: "Pencil Sketches",
    description: "Charcoal & graphite, 2024",
  },
  "portrait-pencil-3.jpg": {
    title: "Innocence",
    category: "Pencil Sketches",
    description: "Fine pencil sketch, 2024",
  },
  "portrait-digital-1.jpg": {
    title: "Joyful Child",
    category: "Pen Drawings",
    description: "Pen drawing, 2024",
  },
  "portrait-digital-2.jpg": {
    title: "Neon Dream",
    category: "Pen Drawings",
    description: "Pen drawing, 2024",
  },
};

const toReadableTitle = (filename: string) =>
  filename
    .replace(/^portrait-/, "")
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

const inferCategory = (filename: string): "Pencil Sketches" | "Pen Drawings" => {
  if (filename.includes("pencil")) {
    return "Pencil Sketches";
  }

  return "Pen Drawings";
};

export const galleryItems: GalleryItem[] = Object.entries(imageModules)
  .map(([path, src]) => {
    const filename = path.split("/").pop() ?? "";
    const metadata = metadataByFilename[filename];

    return {
      id: filename,
      src,
      title: metadata?.title ?? toReadableTitle(filename),
      category: metadata?.category ?? inferCategory(filename),
      description: metadata?.description ?? "Portrait artwork",
    };
  })
  .sort((a, b) => a.id.localeCompare(b.id));

export const galleryCategories = [
  "All",
  ...Array.from(new Set(galleryItems.map((item) => item.category))),
];
