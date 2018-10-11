import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display slogan', () => {
    page.navigateTo();
    expect(page.getSloganText()).toEqual('Doma.in Ha.ck Sear.ch');
  });
});
