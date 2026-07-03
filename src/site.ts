import siteSettings from './settings/site.json';

export const site = siteSettings;

export type TopicItem = { slug: string; name: string; order: number };

export const topicName = (topics: TopicItem[], slug: string) =>
  topics.find((topic) => topic.slug === slug)?.name ?? slug;
