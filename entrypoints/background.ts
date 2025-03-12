export default defineBackground(() => {
  browser.runtime.onInstalled.addListener(async ({ reason }) => {
    if (reason === 'install') {
      const url = browser.runtime.getURL('/dashboard.html#/readme');
      await browser.tabs.create({ url });
    }
  });

  browser.action.onClicked.addListener(async () => {
    const url = browser.runtime.getURL('/dashboard.html');
    const [tab] = await browser.tabs.query({ url });
    if (tab?.id) {
      if (tab?.active) {
        await browser.tabs.sendMessage(tab.id, 'The dashboard is active already.');
      } else {
        browser.tabs.update(tab.id, { active: true });
      }
    } else {
      const lastVisitedRouteValue = await lastVisitedRoute.getValue();
      await browser.tabs.create({ url: `${url}#${lastVisitedRouteValue}` });
    }
  });
});
