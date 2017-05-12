import { ProjectStarterPage } from './app.po';

describe('project-starter App', function() {
  let page: ProjectStarterPage;

  beforeEach(() => {
    page = new ProjectStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
