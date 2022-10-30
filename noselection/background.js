count_tab=0;
count_win=0
chrome.tabs.onCreated.addListener((tab)=> {
    if(count_tab>0)
    {

    removed=chrome.tabs.remove(tab.id)
    removed.then(()=>
    {
        console.log("removed")
    })
 }
 count_tab+=1

});

// chrome.windows.onCreated.addListener((window)=> {
//     console.log(window.incognito)
    
//     count_win+=1

// });