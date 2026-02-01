export default function Save({ attributes }) {
	const {
		foregroundImageUrl,
		foregroundImageAlt,
		backgroundImageUrl,
		backgroundImageAlt,
	} = attributes;

	return (
		<div className="hero-block">
			{foregroundImageUrl && (
				<div className="hero-block-foreground">
					<img src={foregroundImageUrl} alt={foregroundImageAlt} />
				</div>
			)}
			{backgroundImageUrl && (
				<div className="hero-block-background">
					<img src={backgroundImageUrl} alt={backgroundImageAlt} />
				</div>
			)}
		</div>
	);
}
