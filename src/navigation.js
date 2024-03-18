import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Products',
      links: [
        {
          text: 'QOOLCHIP™️ Microcoolers',
          href: getPermalink('/products/qoolchip'),
        },
        {
          text: 'CENTUM®️ Coolers',
          href: getPermalink('/products/centum#coolers'),
        },
        {
          text: 'EON™️ Energy Harvesters',
          href: getPermalink('/products/centum#harvesters'),
        },
        {
          text: 'CENTUM®️ TEC Solutions',
          href: getPermalink('/products/centum#solutions'),
        },
      ],
    },
    {
      text: 'Technology',
      links: [
        {
          text: 'What are Thermoelectrics?',
          href: getPermalink('/#features'),
        },
        {
          text: 'Thin-Film TEC Devices',
          href: getPermalink('/services'),
        },
      ],
    },
    {
      text: 'Markets & Applications',
      links: [
        {
          text: 'Optolectronics',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Data Centers',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Medical',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Refrigeration / HVAC',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Telecom',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Scientific',
          href: getPermalink('/landing/subscription'),
        },
        {
          text: 'Industrial / Automotive',
          href: getPermalink('/landing/subscription'),
        },
        {
          text: 'Internet of Things',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Company',
      href: getPermalink('/company'),
    },
    {
      text: 'Newsroom',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
  ],
  actions: [{ text: 'Contact Us', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Products',
      links: [
        { text: 'QOOLCHIP™️ Microcoolers', href: getPermalink('/products/qoolchip')},
        { text: 'EON™️ Energy Harvesters', href: getPermalink('/products/centum#harvesters') },
        { text: 'CENTUM®️ Coolers', href: getPermalink('/products/centum#coolers')},
        { text: 'CENTUM®️ TEC Solutions', href: getPermalink('/products/centum#solutions') },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/sheetakInc', target: '_blank' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/sheetak', target: '_blank' },
  ],
  footNote: `
    © Copyright 2024 | Sheetak All Rights Reserved
  `,
};
