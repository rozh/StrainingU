//alert("You must not see this WebSite");

chrome.tabs.getSelected(null, function(tab) {  
  if (tab.url.indexOf('http://www.amazon.co.jp/*') == 0 ||  
    tab.url.indexOf('https://www.amazon.co.jp/*') == 0) {  
    // Amazon $B$N%Z!<%8$N$H$-$N=hM}(B
    alert("hoge");
    document.getElementById('msg').innerHTML = tab.title;  
  }  
  else {  
    // Amazon $B0J30$N%Z!<%8(B  
    alert("foo");
    document.getElementById('msg').innerHTML = "";  
  }  
}  

