export function generateMeta({ title, description, url, image, keywords }: { title: string; description?: string; url?: string; image?: string; keywords?: string[]; }) {
  return {
    title,
    description: description ?? '',
    openGraph: {
      title,
      description: description ?? '',
      url: url ?? undefined,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: description ?? '',
      images: image ? [image] : undefined,
    },
    keywords: keywords ?? [],
  };
}
