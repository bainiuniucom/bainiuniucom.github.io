export const site = {
  name: '百万头牛',
  tagline: '做有深度的投资分析，记录真实的投资过程',
  description: '一个关于长期主义、公司研究与真实投资实践的独立内容网站。',
};

export const topics = [
  { slug: 'portfolio', name: '投资实盘' },
  { slug: 'company', name: '公司研究' },
  { slug: 'industry', name: '行业观察' },
  { slug: 'method', name: '投资方法' },
  { slug: 'reading', name: '读书笔记' },
];

export const topicName = (slug: string) => topics.find((topic) => topic.slug === slug)?.name ?? slug;
