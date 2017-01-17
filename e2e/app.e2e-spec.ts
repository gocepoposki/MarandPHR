import { MarandPHRPage } from './app.po';

describe('marand-phr App', function() {
  let page: MarandPHRPage;

  beforeEach(() => {
    page = new MarandPHRPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
