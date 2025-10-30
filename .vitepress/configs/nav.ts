import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.Config['nav'] = [
	{ text: '首页', link: '/' },
	{
		text: '基础',
		items: [
			{ text: 'Table', link: '/table/init' },
			{ text: 'Modal', link: '/modal/index' },
			{ text: 'Columns', link: '/columns/index' },
			{ text: 'formSchemas', link: '/formSchemas/index' },
		],
	},

	{ text: '组件', link: '/components/image/preview' },
	{ text: '方法', link: '/methods/export' },
];
