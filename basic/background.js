let color = '#a73a62';

console.log("gae")

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cred', `color: ${color}`);
});