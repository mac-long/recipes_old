import type { StorybookConfig } from "@storybook/nextjs";
import remarkDirective from "remark-directive";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-links",
		"@storybook/addon-a11y",
		{
			name: '@storybook/addon-docs',
			options: {
				mdxPluginOptions: {
					mdxCompileOptions: {
						remarkPlugins: [remarkDirective]
					}
				}
			}
		},
	],
	framework: {
		name: "@storybook/nextjs",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
};
export default config;
