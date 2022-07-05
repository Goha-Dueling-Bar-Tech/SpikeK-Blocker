chrome.tabs.onUpdated.addListener(tab => {
  chrome.tabs.get(tab, TAB => {
    try {
      if (TAB.url.includes('rushcard.io')) {
        chrome.tabs.executeScript(null, { file: './foreground.js' })
      }
    } catch (err) {
      console.error(err)
    }
  })
})
