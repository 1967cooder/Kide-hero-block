<?php
// This file is generated. Do not modify it manually.
return array(
	'hero-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'hero-block/hero-block',
		'version' => '1.0.0',
		'title' => 'Hero Block',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'A simple custom hero block.',
		'textdomain' => 'hero-block',
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'foregroundImageId' => array(
				'type' => 'number'
			),
			'foregroundImageUrl' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => '.hero-block-foreground img',
				'attribute' => 'src'
			),
			'foregroundImageAlt' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => '.hero-block-foreground img',
				'attribute' => 'alt'
			),
			'backgroundImageId' => array(
				'type' => 'number'
			),
			'backgroundImageUrl' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => '.hero-block-background img',
				'attribute' => 'src'
			),
			'backgroundImageAlt' => array(
				'type' => 'string',
				'source' => 'attribute',
				'selector' => '.hero-block-background img',
				'attribute' => 'alt'
			)
		),
		'editorScript' => 'file:./index.js',
		'style' => 'file:./index.css',
		'viewScript' => 'file:./view.js'
	)
);
