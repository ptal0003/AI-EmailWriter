console.log("Background running");
// chrome.tabs.onUpdated.addListener((tabId, tab) => {
//     console.log("It updated")
//     if (tab.url && tab.url.includes("mail.google.com")){
//         chrome.tabs.sendMessage(tabId, {
//             type: "NEW",
//         })
//     }
// })