/* This file is automatically generated by "gen_configs.py" */
import type { SiteLocaleData  } from '@vuepress/shared'
import type { DefaultThemeLocaleData } from '@vuepress/theme-default'
import { head } from '../head.js'

const Translation = require('../../translations/zh-Hans.json')

export const mainConfig_zh_Hans: SiteLocaleData  = {
    lang: 'zh-Hans',
    title: Translation.title,
    description: Translation.description,
    head: head
}

export const defaultThemeConfig_zh_Hans: DefaultThemeLocaleData = {
    selectLanguageName: Translation.theme.selectLanguageName,
    selectLanguageText: Translation.theme.selectLanguageText,
    selectLanguageAriaLabel: Translation.theme.selectLanguageAriaLabel,

    navbar: [
        {
            text: Translation.navbar.AboutAndFeatures,
            link: "/zh-Hans/guide/",
        },
        
        {
            text: Translation.navbar.Installation,
            link: "/zh-Hans/guide/installation.md",
        },
      
        {
            text: Translation.navbar.Usage,
            link: "/zh-Hans/guide/usage.md",
        },
      
        {
            text: Translation.navbar.Configuration,
            link: "/zh-Hans/guide/configuration.md",
        },
      
        {
            text: Translation.navbar.ChatBots,
            link: "/zh-Hans/guide/chat-bots.md",
        },
    ],

    sidebar: [
        "/zh-Hans/guide/README.md", 
        "/zh-Hans/guide/installation.md", 
        "/zh-Hans/guide/usage.md", 
        "/zh-Hans/guide/configuration.md", 
        "/zh-Hans/guide/chat-bots.md", 
        "/zh-Hans/guide/creating-bots.md", 
        "/zh-Hans/guide/contibuting.md"
    ],

    // page meta
    editLinkText: Translation.theme.editLinkText,
    lastUpdatedText: Translation.theme.lastUpdatedText,
    contributorsText: Translation.theme.contributorsText,

    // custom containers
    tip: Translation.theme.tip,
    warning: Translation.theme.warning,
    danger: Translation.theme.danger,

    // 404 page
    notFound: Translation.theme.notFound,
    backToHome: Translation.theme.backToHome,

    // a11y
    openInNewWindow: Translation.theme.openInNewWindow,
    toggleColorMode: Translation.theme.toggleColorMode,
    toggleSidebar: Translation.theme.toggleSidebar,
}
