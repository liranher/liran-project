import { LiranProjectPage } from './app.po';

describe('liran-project App', () => {
  let page: LiranProjectPage;

  beforeEach(() => {
    page = new LiranProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
