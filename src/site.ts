import siteSettings from './settings/site.json';

export const site = siteSettings;

export const topics = [
  { slug: 'portfolio', name: '投资实盘' },
  { slug: 'company', name: '公司研究' },
  { slug: 'industry', name: '行业观察' },
  { slug: 'method', name: '投资方法' },
  { slug: 'reading', name: '读书笔记' },
];

export const topicName = (slug: string) => topics.find((topic) => topic.slug === slug)?.name ?? slug;
