import { E2E } from './e2e.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: E2E;

  beforeEach(() => {
    page = new E2E();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('hotequil app is running!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
