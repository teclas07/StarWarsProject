import { StarwarsTrackerPage } from './app.po';

describe('starwars-tracker App', function() {
  let page: StarwarsTrackerPage;

  beforeEach(() => {
    page = new StarwarsTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
