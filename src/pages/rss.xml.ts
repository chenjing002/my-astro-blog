import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { HOME } from "@consts";
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

type Context = {
  site: string
}

export async function GET(context: Context) {
  const blog = (await getCollection("blog"))
  .filter(post => !post.data.draft);

  const projects = (await getCollection("projects"))
    .filter(project => !project.data.draft);

  const items = [...blog, ...projects]
    .sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());

  return rss({
    title: HOME.TITLE,
    description: HOME.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: new Date(item.data.date),
      link: `/${item.collection}/${item.slug}/`,
      content: item.body ? sanitizeHtml(parser.render(item.body)) : ''
    })),
    customData: `<language>zh-cn</language>`,
  });
}
