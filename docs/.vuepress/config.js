module.exports = {
  title: "Cloud Resource Manager Docs",
  description: "Managed Cloud Resource Management",
  //   base: "/docs/",
  themeConfig: {
    lastUpdated: "Last Updated",
    editLinks: true,
    docsDir: "docs",
    head: [
      ["link", { rel: "icon", sizes: "32x32", href: `/favicon-32x32.png` }],
      ["link", { rel: "manifest", href: "/manifest.json" }]
    ],
    serviceWorker: true,
    nav: [
      { text: "Home", link: "/" },
      {
        text: "CloudResourceManager.com",
        link: "https://CloudResourceManager.com?ref=docs"
      }
    ],
    sidebar: [
      "",
      "/getting-started"
      // "integrations"
      // "public-api",
      // "crm-cli",
      // "community"
    ],
    // algolia: {
    //   apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>'
    // }
    // Assumes GitHub. Can also be a full GitLab url.
    repo: "cloudresourcemanager/docs",
    repoLabel: "Contribute on Github",
    docsRepo: "cloudresourcemanager/docs",
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: "Help us improve this page!"
  },
  markdown: {
    lineNumbers: true
  },
  ga: "UA-120470331-1"
};
