import type { DefaultTheme } from 'vitepress';

export const sidebar: DefaultTheme.Config['sidebar'] = [];

const base = [
	{
		text: 'table',
		items: [{ text: '表格', link: '/table/init' }],
	},
	{
		text: 'columns',
		items: [{ text: '列配置', link: '/columns/index' }],
	},
	{
		text: 'formSchemas',
		items: [{ text: '表单', link: '/formSchemas/index' }],
	},
	{
		text: 'modal',
		items: [
			{ text: '弹窗', link: '/modal/index' },
			{ text: '自定义表单弹窗', link: '/modal/custom-form' },
		],
	},
];
