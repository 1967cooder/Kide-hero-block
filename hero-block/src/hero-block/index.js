import { registerBlockType } from "@wordpress/blocks";
import Edit from "./edit";
import Save from "./save";
import "./index.css";

registerBlockType("hero-block/hero-block", {
	edit: Edit,
	save: Save,
});
