content = document.getElementsByClassName("s-news-rank-wrapper");
console.log("You wouldn't be boring anymore");
content[0].innerHTML = "<div ><textarea  style='float:left;width:90%;' id='inputArea' name='content' cols=40 rows=4>  粘贴内容到这 </textarea>  <button style='float:left;width:90%;margin-left: 0.5%; margin-top: 1%; height: 1.6    em' onclick=\"content = document.getElementsByClassName('s-news-rank-wrapper'); text=document.getElementById('inputArea').value;content[0].innerHTML=text\">更新</button> </div>";

