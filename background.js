/**
 * Created by JerryW on 2017/2/8.
 */


function getClickHandler() {
    return function(info, tab) {
        chrome.tabs.executeScript({
            file: 'inBG.js'
        });
    };
};

/**
 * Create a context menu which will only show up for images.
 */
chrome.contextMenus.create({
    "title" : "改变一点点",
    "type" : "normal",
    "contexts" : ["page"],
    "documentUrlPatterns": ["https://www.baidu.com/*"],
    "onclick" : getClickHandler()
});

