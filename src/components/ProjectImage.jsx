import { useState } from 'react';

// Shows the screenshot if it exists, otherwise a generated cover.
export default function ProjectImage({ image, title, className = '' }) {
  const [failed, setFailed] = useState(false);
  const src = image ? `${import.meta.env.BASE_URL}images/${image}` : null;

  if (!src || failed) {
    const initials = title.split(/\s+/).filter((w) => /^[A-Za-z]/.test(w)).slice(0, 2).map((w) => w[0]).join('');
    return (
      <div className={`relative grid place-items-center bg-gradient-to-br from-plum-600 via-plum-700 to-plum-900 ${className}`}>
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:32px_32px]" />
        <span className="relative font-display text-6xl font-semibold text-white">{initials}</span>
      </div>
    );
  }
  return <img src={src} alt={`${title} screenshot`} loading="lazy" onError={() => setFailed(true)} className={`object-cover ${className}`} />;
}
