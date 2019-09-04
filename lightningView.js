// ==UserScript==
// @name         Cleaner FF
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Clean up FF.
// @author       You
// @match        https://levelaccess.lightning.force.com/lightning/*
// @grant        none
// ==/UserScript==

(function() {
  const settings = {
    myTabs: ['Time Entry', 'Project Tasks'],
    removeTitle: true,
    removeAppLauncher: true,
    removeLogo: true
  };
  const removeTabs = () => {
    const tabs = document.querySelectorAll('one-app-nav-bar-item-root');
    const tabTexts = document.querySelectorAll('one-app-nav-bar-item-root .slds-truncate');

    if (tabs && tabs.length && (tabTexts && tabTexts.length)) {
      const keepIndexes = [];
      tabTexts.forEach((tabText, i) => {
        settings.myTabs.forEach(myTab => {
          if (tabText.textContent === myTab) {
            keepIndexes.push(i);
          }
        });
      });
      tabs.forEach((tab, index) => {
        let removeTab = true;
        keepIndexes.forEach(keepIndex => {
          if (index === keepIndex) {
            removeTab = false;
          }
        });
        if (removeTab) {
          tab.style.display = 'none';
        }
      });
      console.log('Tabs removed.');
    } else {
      setTimeout(removeTabs, 50);
    }
  };
  const removeTitle = () => {
    const titleEl = document.querySelector('.appName.slds-context-bar__label-action.slds-context-bar__app-name');
    if (titleEl) {
      titleEl.style.display = 'none';
      console.log('Title removed.');
    } else {
      setTimeout(removeTitle, 50);
    }
  };
  const removeAppLauncher = () => {
    const appLauncher = document.querySelector('.slds-context-bar__primary.navLeft');
    if (appLauncher) {
      appLauncher.style.display = 'none';
      console.log('App launcher removed.');
    } else {
      setTimeout(removeAppLauncher, 50);
    }
  };
  const removeLogo = () => {
    const logo = document.querySelector('.slds-global-header__logo');
    if (logo) {
      logo.style.display = 'none';
      console.log('Logo removed.');
    } else {
      setTimeout(removeLogo, 50);
    }
  };
  if (settings.myTabs.length) {
    removeTabs();
  }
  if (settings.removeTitle) {
    removeTitle();
  }
  if (settings.removeAppLauncher) {
    removeAppLauncher();
  }
  if (settings.removeLogo) {
    removeLogo();
  }
})();
