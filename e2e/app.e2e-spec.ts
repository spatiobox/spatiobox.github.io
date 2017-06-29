import { Spatiobox.Github.IoPage } from './app.po';

describe('spatiobox.github.io App', () => {
  let page: Spatiobox.Github.IoPage;

  beforeEach(() => {
    page = new Spatiobox.Github.IoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
