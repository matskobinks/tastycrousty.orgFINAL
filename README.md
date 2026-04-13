# Portfolio BTS SIO (E5) - Astro + Tailwind CSS

Site multi-pages statique pour presenter un portfolio BTS SIO option SISR.

## Stack technique

- Astro (mode multi-pages)
- Tailwind CSS
- Animations CSS fluides (fade-in, slide-up)
- Theme clair/sombre avec memorisation du choix utilisateur via localStorage

## Pages incluses

- Accueil et profil
- Formation BTS SIO
- Projets BTS (E6)
- Projets personnels
- Veille technologique (IA)

## Arborescence principale

```text
src/
	components/
		Footer.astro
		Header.astro
		ProjectCard.astro
		SectionCard.astro
	layouts/
		Layout.astro
	pages/
		index.astro
		bts-sio.astro
		projets-bts.astro
		projets-perso.astro
		veille-techno.astro
	styles/
		global.css
public/
	docs/
		cv.pdf
		certifications.pdf
```

## Commandes

```bash
npm install
npm run dev
npm run build
npm run preview
```

Le build de production est genere dans `dist/` et peut etre deployee sur un hebergement mutualise statique standard.

## Notes

- Les fichiers `public/docs/cv.pdf` et `public/docs/certifications.pdf` sont des placeholders a remplacer avec tes documents reels.
- Version Node recommandee: 18.17+ (ou superieure).
