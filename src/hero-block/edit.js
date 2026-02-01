import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
} from "@wordpress/block-editor";
import {
	Button,
	PanelBody,
	PanelRow,
	ToggleControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export default function Edit({ attributes, setAttributes }) {
	const {
		foregroundImageId,
		foregroundImageUrl,
		foregroundImageAlt,
		backgroundImageId,
		backgroundImageUrl,
		backgroundImageAlt,
	} = attributes;

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title={__("Foreground Image", "hero-block")}>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(image) =>
									setAttributes((previousAttributes) => ({
										...previousAttributes,
										foregroundImageId: image.id,
										foregroundImageUrl: image.url,
										foregroundImageAlt: image.alt,
									}))
								}
								allowedTypes={["image"]}
								value={foregroundImageId}
								render={({ open }) => (
									<Button onClick={open} variant="secondary">
										{foregroundImageUrl
											? __("Change Foreground Image", "hero-block")
											: __("Select Foreground Image", "hero-block")}
									</Button>
								)}
							/>
						</MediaUploadCheck>
					</PanelRow>
				</PanelBody>
				<PanelBody title={__("Background Image", "hero-block")}>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={(image) =>
								setAttributes((previousAttributes) => ({
									...previousAttributes,
									backgroundImageId: image.id,
									backgroundImageUrl: image.url,
									backgroundImageAlt: image.alt,
								}))
							}
							allowedTypes={["image"]}
							value={backgroundImageId}
							render={({ open }) => (
								<Button onClick={open} variant="secondary">
									{backgroundImageUrl
										? __("Change Background Image", "hero-block")
										: __("Select Background Image", "hero-block")}
								</Button>
							)}
						/>
					</MediaUploadCheck>
				</PanelBody>
			</InspectorControls>
			<div className="hero-block-preview">
				<div className="hero-block-foreground">
					{foregroundImageUrl ? (
						<img src={foregroundImageUrl} alt={foregroundImageAlt} />
					) : (
						<p>{__("No foreground image selected", "hero-block")}</p>
					)}
				</div>
				<div className="hero-block-background">
					{backgroundImageUrl ? (
						<img src={backgroundImageUrl} alt={backgroundImageAlt} />
					) : (
						<p>{__("No background image selected", "hero-block")}</p>
					)}
				</div>
			</div>
		</div>
	);
}
