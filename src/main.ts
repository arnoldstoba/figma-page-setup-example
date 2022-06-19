const pages: string[] = [
  '٭ Overview',
  '٭ Planning',
  '٭ Examples',
  '٭ Prototype'
];

const outliner = {
  setup: () => {
    const pages = outliner.setupPages();
    figma.closePlugin('Page setup complete');
  },

  setupPages: () => {
    return pages.map((page: string) => {
      const entry = figma.createPage();
      entry.name = page;
      return entry;
    });
  }
};

export default () => {
  outliner.setup();
};
