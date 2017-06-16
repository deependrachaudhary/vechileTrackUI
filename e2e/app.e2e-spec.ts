import { VehicleRouteAppPage } from './app.po';

describe('vehicle-route-app App', () => {
  let page: VehicleRouteAppPage;

  beforeEach(() => {
    page = new VehicleRouteAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
