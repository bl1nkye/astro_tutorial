import rss, { pagesGloToRssItems, pagesGlobToRssItems } from "@astrojs/rss";
import { ApiContextStorage } from "astro/actions/runtime/store.js";

export async function GET(content) {
    return rss (
        {
            title: "Astro Learner | Blog",
            description: "My Journey learning Astro",
            site: context.site,
            items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
            customData: "<language>en-us</language>"
        }
    );
}

