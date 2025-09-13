// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  branch: process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blog",
        path: "src/content/blog",
        format: "mdx",
        match: { include: "**/*.mdx" },
        fields: [
          { name: "title", label: "Title", type: "string", isTitle: true, required: true },
          { name: "description", label: "Description", type: "string" },
          { name: "pubDate", label: "Published", type: "datetime", ui: { dateFormat: "YYYY-MM-DD" } },
          { name: "updatedDate", label: "Updated", type: "datetime" },
          { name: "heroImage", label: "Hero Image", type: "image" },
          { name: "body", label: "Body", type: "rich-text", isBody: true }
        ],
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}/`,
          allowedActions: { create: true, delete: true }
        }
      }
    ]
  }
});
export {
  config_default as default
};
