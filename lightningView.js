// ==UserScript==
// @name         Cleaner Lightning View
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Cleaner Lightning View
// @author       You
// @match        https://levelaccess.lightning.force.com/lightning/*
// @grant        none
// ==/UserScript==

(function () {
  const settings = {
    myTabs: ['Time Entry', 'Project Tasks'],
    removeTitle: true,
    removeAppLauncher: true,
    removeLogo: true
  };
  const removeTabs = () => {
    const tabs = document.querySelectorAll('one-app-nav-bar-item-root');
    const tabNames = document.querySelectorAll('one-app-nav-bar-item-root .slds-truncate');

    if (tabs && tabs.length && (tabNames && tabNames.length)) {
      const keepIndexes = [];
      tabNames.forEach((tabName, i) => {
        settings.myTabs.forEach(myTab => {
          if (tabName.textContent === myTab) {
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