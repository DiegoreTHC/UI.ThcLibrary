/** @type {import('stylelint').Config} */
export default {
	extends: ["stylelint-config-standard"],
	plugins: ["stylelint-order"],
	overrides: [
		{
			files: ["*.scss", "**/*.scss"],
			extends: ["stylelint-config-standard-scss"]
		},
		{
			files: ["*.vue", "**/*.vue"],
			extends: ["stylelint-config-standard-scss", "stylelint-config-standard-vue/scss"]
		}
	],
	rules: {
		"order/properties-alphabetical-order": true,
		"block-no-empty": null,
		"color-no-invalid-hex": true,
		"color-hex-length": "long",
		"color-no-hex": true,
		"selector-attribute-quotes": "always",
		"selector-type-case": "lower",
		"no-duplicate-selectors": true,
		"length-zero-no-unit": true,
		"function-url-quotes": "always",
		"font-family-name-quotes": "always-unless-keyword",
		"declaration-no-important": true,
		"selector-pseudo-element-colon-notation": "double",
		"declaration-block-single-line-max-declarations": 0,
		"no-descending-specificity": null,
		"rule-empty-line-before": [
			"always",
			{
				except: ["first-nested"],
				ignore: ["after-comment"]
			}
		],
		"unit-allowed-list": ["em", "rem", "px", "%", "s", "deg", "fr"],
		"selector-pseudo-class-no-unknown": [
			true,
			{
				ignorePseudoClasses: ["global"]
			}
		],
		"at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: ["function", "if", "each", "include", "mixin", "return", "else"]
			}
		]
		// "font-family-no-missing-generic-family-keyword": [
		// 	true,
		// 	{
		// 		ignoreFontFamilies: ["Inter Regular", "Inter"]
		// 	}
		// ]
	}
};
