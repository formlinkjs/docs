import { createRequire } from 'module';
import { defineConfig, type DefaultTheme } from 'vitepress';

const require = createRequire(import.meta.url);
const pkg = require('formlink/package.json');

export default defineConfig({
    lang: 'en-US',
    title: 'FormlinkJS',
    description: 'FormlinkJS is a full-stack form library that makes it easy to handle forms and validations with minimal effort.',

    lastUpdated: true,
    cleanUrls: true,

    markdown: {
        math: true
    },

    sitemap: {
        hostname: 'https://formlinkjs.com',
        transformItems (items) {
            return items.filter((item) => !item.url.includes('migration'));
        }
    },

    /* prettier-ignore */
    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
        ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
        ['meta', { name: 'theme-color', content: '#5f67ee' }],
        ['meta', { name: 'og:type', content: 'website' }],
        ['meta', { name: 'og:locale', content: 'en' }],
        ['meta', { name: 'og:site_name', content: 'FormlinkJS' }],
        ['meta', { name: 'og:image', content: 'https://formlink.dev/formlink-og.jpg' }],
        ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }]
    ],

    themeConfig: {
        logo: { src: '/logo.svg', width: 100.5, height: 20 },

        nav: nav(),

        sidebar: {
            '/guide/': { base: '/guide/', items: sidebarGuide() },
            '/reference/': { base: '/reference/', items: sidebarReference() }
        },

        editLink: {
            pattern: 'https://github.com/formlinkjs/formlink/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/formlinkjs/formlink' }
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Jerome Thayananthajothy'
        },

        search: {
            provider: 'algolia',
            options: {
                appId: '8J64VVRP8K',
                apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
                indexName: 'formlink'
            }
        },

        carbonAds: {
            code: 'CEBDT27Y',
            placement: 'formlinkjscom'
        }
    }
});

function nav (): DefaultTheme.NavItem[] {
    return [
        {
            text: 'Guide',
            link: '/guide/what-is-formlink',
            activeMatch: '/guide/'
        },
        {
            text: 'Reference',
            link: '/reference/form',
            activeMatch: '/reference/'
        },
        {
            text: pkg.version,
            items: [
                {
                    text: 'Changelog',
                    link: 'https://github.com/formlinkjs/formlink/blob/main/CHANGELOG.md'
                },
                {
                    text: 'Contributing',
                    link: 'https://github.com/formlinkjs/formlink/blob/main/.github/contributing.md'
                }
            ]
        }
    ];
}

/* prettier-ignore */
function sidebarGuide (): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Introduction',
            collapsed: false,
            items: [
                { text: 'What is Formlink?', link: 'what-is-formlink' },
                { text: 'Getting Started', link: 'getting-started' },
                { text: 'Routing', link: 'routing' },
                { text: 'Deploy', link: 'deploy' }
            ]
        },
        {
            text: 'HTTP Handler',
            collapsed: false,
            items: [
                { text: 'Using the HTTP handler', link: 'http-usage' },
                { text: 'Customising HTTP options', link: 'http-options' },
                { text: 'Adding/Changing HTTP Headers', link: 'http-headers' },
                { text: 'Handling HTTP errors', link: 'http-errors' },]
        },
        { text: 'Config & API Reference', base: '/reference/', link: 'form-options' }
    ];
}

function sidebarReference (): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Reference',
            items: [
                { text: 'Form', link: 'form' },
                { text: 'Http', link: 'http' },
                { text: 'Form Options', link: 'form-options' },
                { text: 'Http Options', link: 'http-options' },
                { text: 'Error Handler', link: 'exception' },
                { text: 'Error Parser', link: 'error-parser' },
                { text: 'Error Response', link: 'error-response' },
                { text: 'Error Data', link: 'error-data' },
                { text: 'Error Object', link: 'error-object' },
                { text: 'Helpers', link: 'helpers' },
                { text: 'FormData', link: 'form-data' },
            ]
        }
    ];
}
