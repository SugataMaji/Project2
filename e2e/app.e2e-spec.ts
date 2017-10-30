import { FlightappPage } from './app.po';

describe('flightapp App', () => {
  let page: FlightappPage;

  beforeEach(() => {
    page = new FlightappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
