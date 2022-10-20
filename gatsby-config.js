module.exports = {
  plugins: [ `gatsby-plugin-pdf`,
    {
      resolve: "smooth-doc",
      options: {
        name: "Documentation",
        description: "Use your own description...",
        siteUrl: "",
        //..
        sections: ['Site Contents', 'Basics', 'API', 'Product Downloads', 'Contact Us'],
        navItems: [
          {title: 'Our Docs', url: '/docs/'}],
      },
    },
  ],
};
