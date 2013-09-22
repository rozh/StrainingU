//alert("You must not see this WebSite");

chrome.tabs.getSelected(null, function(tab) {  
  if (tab.url.indexOf('http://www.amazon.co.jp/*') == 0 ||  
    tab.url.indexOf('https://www.amazon.co.jp/*') == 0) {  
    // Amazon のページのときの処理
    alert("hoge");
    document.getElementById('msg').innerHTML = tab.title;  
  }  
  else {  
    // Amazon 以外のページ  
    alert("foo");
    document.getElementById('msg').innerHTML = "";  
  }  
}  

