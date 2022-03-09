// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const config = {
  title: "TDengine 文档（预览）",
  tagline: "高性能、分布式、支持 SQL 的时序数据库",
  url: "https://dingbo8128.github.io",
  baseUrl: "/tddocs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/tdengine.ico",
  organizationName: "dingbo8128", // Usually your GitHub org/user name.
  projectName: "tddocs", // Usually your repo name.
  deploymentBranch: "gh-pages",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/dingbo8128/tddocs/edit/main/",
          versions: {
            "2.4": {
              badge: false
            }
          }
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/dingbo8128/tddocs/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      autoCollapseSidebarCategories: true,
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      navbar: {
        hideOnScroll: true,
        title: "",
        logo: {
          alt: "",
          src: "img/site-logo.png",
        },
        items: [
          // {
          //   type: "docsVersionDropdown",
          //   position: "left",
          //   dropdownActiveClassDisabled: false,
          // },
          {
            href: "https://github.com/taosdata/TDengine",
            label: "GitHub",
            position: "right",
          },
          // {
          //   to: "docs/getting-started/quick-install",
          //   label: "快速上手",
          //   position: "right",
          // },
          {
            to: "https://www.taosdata.com/products",
            label: "产品",
            position: "right",
          },
          {
            type: "doc",
            docId: "intro/intro",
            position: "right",
            label: "文档",
          },
          {
            to: "https://www.taosdata.com/blog",
            label: "博客",
            position: "right",
          },
          {
            to: "https://www.taosdata.com/media",
            label: "媒体",
            position: "right",
          },
          {
            to: "https://www.taosdata.com/support",
            label: "技术支持",
            position: "right",
          },
          { to: "/blog", label: "搜索", position: "right" },
          {
            type: "dropdown",
            label: " ",
            className: "languageDropdown",
            position: "right",
            items: [
              {
                label: "中文",
                href: "https://www.taosdata.com/docs",
              },
              {
                label: "English",
                href: "https://tdengine.com/docs/en/v2.0/index",
              },
              // ... more items
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["powershell", "rust", "java", "git", "http"],
      }
    }),
};

module.exports = config;
