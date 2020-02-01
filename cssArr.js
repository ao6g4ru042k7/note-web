var htmlArr = [];
htmlArr[0] = '<h1 class=\'chinese-h\'>Color</h1>'+
'<h3 class=\'chinese-p\'>設定文字的顏色</h3>'+
'<div class=\'show\'>'+
'    <p style=\'color:red;\'>red</p>'+
'</div>'+
'<hr />'+
'<h1>程式碼</h1>'+
'<div class=\'coding\'>'+
'        <pre><code class=\'css\'>color:red;</code></pre>'+
'</div>'+
'<hr />'+
'<h1>顏色格式</h1>'+
'<div class=\'tablebox\'>'+
'    <table>'+
'        <tr>'+
'            <th style=\'width:10%\'>屬型</th>'+
'            <th style=\'width:20%\'>值</th>'+
'            <th>描述</th>'+
'        </tr>'+
'        <tr>'+
'            <td>name</td>'+
'            <td>red</td>'+
'            <td>預設顏色代碼</td>'+
'        </tr>'+
'        <tr>'+
'            <td>hex</td>'+
'            <td>#FF0000</td>'+
'            <td>16進位格式</td>'+
'        </tr>'+
'        <tr>'+
'            <td>rgb</td>'+
'            <td>rgb(255,0,0)</td>'+
'            <td>三原色格式</td>'+
'        </tr>'+
'        <tr>'+
'            <td>hsl</td>'+
'            <td>hsl(0,100%,50%)</td>'+
'            <td>圓柱座標格式</td>'+
'        </tr>'+
'        <tr>'+
'            <td>rgba</td>'+
'            <td>rgba(255,0,0,0.5)</td>'+
'            <td>三原色格式(a為透明度)</td>'+
'        </tr>'+
'        <tr>'+
'            <td>hsla</td>'+
'            <td>hsla(0,100%,50%,50%)</td>'+
'            <td>圓柱座標格式(a為透明度)</td>'+
'        </tr>'+
'    </table>'+
'</div>';
htmlArr[1]='<h1 class=\'chinese-h\'>font-weight</h1>'+
'<h3 class=\'chinese-p\'>設定文字粗度，100最細、900最粗。</h3>'+
'<div class=\'show\'>'+
'    <p style=\'font-weight:bold;\'>粗體字</p>'+
'    <p style=\'font-weight:100;\'>細體字</p>'+
'</div>'+
'<hr />'+
'<h1>程式碼</h1>'+
'<div class=\'coding\'>'+
'        <pre><code class=\'css\'>font-weight:bold;\n'+
'font-weight:100;</code></pre>'+
'</div>'+
'<hr />'+
'<h1>值</h1>'+
'<div class=\'tablebox\'>'+
'    <table>'+
'        <tr>'+
'            <th style=\'width:20%\'>類型</th>'+
'            <th style=\'width:20%\'>值</th>'+
'            <th>描述</th>'+
'        </tr>'+
'        <tr>'+
'            <td>預設代碼</td>'+
'            <td>bolder<br/>bold<br/>normal<br/>lighter<br/>inherit</td>'+
'            <td>粗細如英文字面上的意思，而inherit為繼承父屬性</td>'+
'        </tr>'+
'        <tr>'+
'            <td>數值</td>'+
'            <td>100<br/>200<br/>300<br/>400<br/>500<br/>600<br/>700<br/>800<br/>900</td>'+
'            <td>使用數值可以較精確地做設定，但不好辨認</td>'+
'        </tr>'+
'    </table>'+
'</div>';
htmlArr[2]='<h1 class=\'chinese-h\'>font-style</h1>'+
'<h3 class=\'chinese-p\'>主要用來設定文字傾斜。</h3>'+
'<div class=\'show\'>'+
'    <p style=\'font-style:italic;\'>傾斜字</p>'+
'</div>'+
'<hr />'+
'<h1>程式碼</h1>'+
'<div class=\'coding\'>'+
'        <pre><code class=\'css\'>font-style:italic;</code></pre>'+
'</div>'+
'<hr />'+
'<h1>值</h1>'+
'<div class=\'tablebox\'>'+
'    <table>'+
'        <tr>'+
'            <th style=\'width:20%\'>值</th>'+
'            <th>描述</th>'+
'        </tr>'+
'        <tr>'+
'            <td>italic</td>'+
'            <td>使字體傾斜</td>'+
'        </tr>'+
'        <tr>'+
'            <td>normal</td>'+
'            <td>一般字體</td>'+
'        </tr>'+
'    </table>'+
'</div>';
htmlArr[3]='<h1 class=\'chinese-h\'>font-family</h1>'+
'<h3 class=\'chinese-p\'>設定文字樣式，可一次設定多種文字樣式，執行順序從左至右，直到成功轉換樣式為止；像範例文字英文部分套用了Arial Narrow體，但中文部分無法套用Arial Narrow體，因此套用了順位第二的新細明體</h3>'+
'<div class=\'show\'>'+
'    <p style=\'font-family:Arial Narrow,新細明體;\'>Arial Narrow，新細明體</p>'+
'</div>'+
'<hr />'+
'<h1>程式碼</h1>'+
'<div class=\'coding\'>'+
'        <pre><code class=\'css\'>font-family:Arial Narrow,新細明體;</code></pre>'+
'</div>';
htmlArr[4]='<h1 class=\'chinese-h\'>font-variant</h1>'+
'<h3 class=\'chinese-p\'>將小寫字母變成大寫，而大小不變</h3>'+
'<div class=\'show\'>'+
'    <p style=\'font-variant:small-caps;\'><span style=\'font-variant:normal;\'>ABCdef --> </span>ABCdef</p>'+
'</div>'+
'<hr />'+
'<h1>程式碼</h1>'+
'<div class=\'coding\'>'+
'        <pre><code class=\'css\'>font-variant:small-caps;</code></pre>'+
'</div>';
htmlArr[5]='<h1 class=\'chinese-h\'>text-decoration</h1>'+
'<h3 class=\'chinese-p\'>通常用來替文字畫線，或是取消a標籤線條</h3>'+
'<br />'+
'<hr />'+
'<h1>下底線</h1>'+
'<div class=\'show\'>'+
'    <p style=\'text-decoration: underline;\'>下底線</p>'+
'</div>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>text-decoration: underline;</code></pre>'+
'</div>'+
'<hr />'+
'<h1>上底線</h1>'+
'<div class=\'show\'>'+
'    <p style=\'text-decoration: overline;\'>上底線</p>'+
'</div>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>text-decoration: overline;</code></pre>'+
'</div>'+
'<hr />'+
'<h1>貫穿線</h1>'+
'<div class=\'show\'>'+
'    <p style=\'text-decoration: line-through;\'>貫穿線</p>'+
'</div>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>text-decoration: line-through;</code></pre>'+
'</div>'+
'<hr />'+
'<h1>a標籤去底線</h1>'+
'<div class=\'show\'>'+
'    <a href="http://www.google.com" style=\'text-decoration: none;\'>超連結</a>'+
'</div>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>text-decoration: none;</code></pre>'+
'</div>';
htmlArr[6]='<h1 class=\'chinese-h\'>text-align</h1>'+
'<h3 class=\'chinese-p\'>使文字或是有inline類似屬性的物件水平方向對齊</h3>'+
'<br />'+
'<hr />'+
'<h1>文字靠左</h1>'+
'<div class=\'show\'>'+
'    <p style=\'text-align: left;\'>'+
'        從前，有一隻胖胖的豬媽媽，她生了三隻小豬。'+
'        最大的小豬：豬大哥很貪睡，很懶惰。一天到晚都在打瞌睡。'+
'        第二個小豬：豬二哥很愛吃，他也很懶惰。'+
'        幸好最小的小豬：豬小弟是個勤勞的好孩子。常常努力的工作。'+
'        有一天，豬媽媽告訴他們說：「你們都長大了，應該自己蓋房子，自己住，自己種田，自己生活。我要你們自己照顧自己。」</p>'+
'</div>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>text-align: left;</code></pre>'+
'</div>'+
'<hr />'+
'<h1>文字靠右</h1>'+
'<div class=\'show\'>'+
'    <p style=\'text-align: right;\'>'+
'        從前，有一隻胖胖的豬媽媽，她生了三隻小豬。'+
'        最大的小豬：豬大哥很貪睡，很懶惰。一天到晚都在打瞌睡。'+
'        第二個小豬：豬二哥很愛吃，他也很懶惰。'+
'        幸好最小的小豬：豬小弟是個勤勞的好孩子。常常努力的工作。'+
'        有一天，豬媽媽告訴他們說：「你們都長大了，應該自己蓋房子，自己住，自己種田，自己生活。我要你們自己照顧自己。」</p>'+
'</div>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>text-align: right;</code></pre>'+
'</div>'+
'<hr />'+
'<h1>文字置中</h1>'+
'<div class=\'show\'>'+
'    <p style=\'text-align: center;\'>'+
'        從前，有一隻胖胖的豬媽媽，她生了三隻小豬。'+
'        最大的小豬：豬大哥很貪睡，很懶惰。一天到晚都在打瞌睡。'+
'        第二個小豬：豬二哥很愛吃，他也很懶惰。'+
'        幸好最小的小豬：豬小弟是個勤勞的好孩子。常常努力的工作。'+
'        有一天，豬媽媽告訴他們說：「你們都長大了，應該自己蓋房子，自己住，自己種田，自己生活。我要你們自己照顧自己。」</p>'+
'</div>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>text-align: center;</code></pre>'+
'</div>'+
'<hr />'+
'<h1>左右對齊</h1>'+
'<div class=\'show\'>'+
'    <p style=\'text-align: justify;\'>'+
'        從前，有一隻胖胖的豬媽媽，她生了三隻小豬。'+
'        最大的小豬：豬大哥很貪睡，很懶惰。一天到晚都在打瞌睡。'+
'        第二個小豬：豬二哥很愛吃，他也很懶惰。'+
'        幸好最小的小豬：豬小弟是個勤勞的好孩子。常常努力的工作。'+
'        有一天，豬媽媽告訴他們說：「你們都長大了，應該自己蓋房子，自己住，自己種田，自己生活。我要你們自己照顧自己。」</p>'+
'</div>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>text-align: justify;</code></pre>'+
'</div>';
htmlArr[7]='<h1 class=\'chinese-h\'>line-height</h1>'+
'<h3 class=\'chinese-p\'>設定文字的高度</h3>'+
'<div class=\'show\'>'+
'    <p style=\'line-height: 100px;background-color: skyblue;\'>測試文字</p>'+
'</div>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>line-height: 100px;</code></pre>'+
'</div>'+
'<hr />'+
'<h1>文字居中</h1>'+
'<h3 class=\'chinese-p\'>line-height(垂直)常搭配text-align(水平)使文字居中</h3>'+
'<div class=\'show\'>'+
'    <p style=\'line-height: 100px;text-align: center; background-color: skyblue;\'>測試文字</p>'+
'</div>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>line-height: 100px;\ntext-align: center;</code></pre>'+
'</div>';
htmlArr[8]='<h1 class=\'chinese-h\'>background-color</h1>'+
'<h3 class=\'chinese-p\'>設定背景顏色</h3>'+
'<div class=\'show\'>'+
'    <p style=\'line-height: 100px;background-color: skyblue;\'>背景顏色天藍色</p>'+
'</div>'+
'<hr/>'+
'<h1>程式碼</h1>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>background-color: skyblue;</code></pre>'+
'</div>'+'<hr />'+
'<h1>顏色格式</h1>'+
'<div class=\'tablebox\'>'+
'    <table>'+
'        <tr>'+
'            <th style=\'width:10%\'>屬型</th>'+
'            <th style=\'width:20%\'>值</th>'+
'            <th>描述</th>'+
'        </tr>'+
'        <tr>'+
'            <td>name</td>'+
'            <td>red</td>'+
'            <td>預設顏色代碼</td>'+
'        </tr>'+
'        <tr>'+
'            <td>hex</td>'+
'            <td>#FF0000</td>'+
'            <td>16進位格式</td>'+
'        </tr>'+
'        <tr>'+
'            <td>rgb</td>'+
'            <td>rgb(255,0,0)</td>'+
'            <td>三原色格式</td>'+
'        </tr>'+
'        <tr>'+
'            <td>hsl</td>'+
'            <td>hsl(0,100%,50%)</td>'+
'            <td>圓柱座標格式</td>'+
'        </tr>'+
'        <tr>'+
'            <td>rgba</td>'+
'            <td>rgba(255,0,0,0.5)</td>'+
'            <td>三原色格式(a為透明度)</td>'+
'        </tr>'+
'        <tr>'+
'            <td>hsla</td>'+
'            <td>hsla(0,100%,50%,50%)</td>'+
'            <td>圓柱座標格式(a為透明度)</td>'+
'        </tr>'+
'    </table>'+
'</div>';
htmlArr[9]='<h1 class=\'chinese-h\'>background-image</h1>'+
'<h3 class=\'chinese-p\'>在現有的標籤中設定背景圖片，背景圖片無法被右鍵另存下來</h3>'+
'<div class=\'show\'>'+
'    <div style="background-image: url(\'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png\'); width: 544px; height: 184px;"></div>'+
'</div>'+
'<hr/>'+
'<h1>程式碼</h1>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>background-image: url(\'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png\');</code></pre>'+
'</div>';
htmlArr[10]='<h1 class=\'chinese-h\'>background-repeat</h1>'+
'<h3 class=\'chinese-p\'>設定背景圖片是否重複，預設值為repeat</h3>'+
'<div class=\'show\'>'+
'    <div style="background-image: url(\'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png\');'+
'    background-repeat: repeat; background-size: 25%;'+
'    width: 544px; height: 184px;"></div>'+
'</div>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>background-repeat: repeat;</code></pre>'+
'</div>'+
'<hr/>'+
'<h1>repeat-x</h1>'+
'<div class=\'show\'>'+
'    <div style="background-image: url(\'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png\');'+
'    background-repeat: repeat-x; background-size: 25%;'+
'    width: 544px; height: 184px;"></div>'+
'</div>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>background-repeat: repeat-x;</code></pre>'+
'</div>'+
'<hr/>'+
'<h1>repeat-y</h1>'+
'<div class=\'show\'>'+
'    <div style="background-image: url(\'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png\');'+
'    background-repeat: repeat-y; background-size: 25%;'+
'    width: 544px; height: 184px;"></div>'+
'</div>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>background-repeat: repeat-y;</code></pre>'+
'</div>'+
'<hr/>'+
'<h1>no-repeat</h1>'+
'<div class=\'show\'>'+
'    <div style="background-image: url(\'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png\');'+
'    background-repeat: no-repeat; background-size: 25%;'+
'    width: 544px; height: 184px;"></div>'+
'</div>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>background-repeat: no-repeat;</code></pre>'+
'</div>';
htmlArr[11]='<h1 class=\'chinese-h\'>background-size</h1>'+
'<h3 class=\'chinese-p\'>設定背景圖片大小</h3>'+
'<div class=\'show\'>'+
'    <div style="background-image: url(\'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png\');'+
'    background-size: 300px 200px; background-repeat: no-repeat;'+
'    width: 400px; height: 200px;"></div>'+
'</div>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>background-size: 300px 200px;</code></pre>'+
'</div>'+
'<hr/>'+
'<h1>cover</h1>'+
'<h3 class=\'chinese-p\'>背景圖片會完全遮蓋背景區域 [背景圖片大小>=背景區域大小]</h3>'+
'<div class=\'show\'>'+
'    <div style="background-image: url(\'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png\');'+
'    background-size: cover; '+
'    width: 400px; height: 200px;"></div>'+
'</div>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>background-size: cover;</code></pre>'+
'</div>'+
'<hr/>'+
'<h1>contain</h1>'+
'<h3 class=\'chinese-p\'>背景圖片會符合背景區域大小且圖片不會變形 [背景圖片大小&lt;=背景區域大小]</h3>'+
'<div class=\'show\'>'+
'    <div style="background-image: url(\'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png\');'+
'    background-size: contain;background-repeat: no-repeat;'+
'    width: 400px; height: 200px;"></div>'+
'</div>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>background-size: contain;</code></pre>'+
'</div>'+
'<hr/>'+
'<h1>100% 100%</h1>'+
'<h3 class=\'chinese-p\'>背景圖片會符合背景區域大小，但圖片可能會變形 [背景圖片大小=背景區域大小]</h3>'+
'<div class=\'show\'>'+
'    <div style="background-image: url(\'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png\');'+
'    background-size: 100% 100%;'+
'    width: 400px; height: 200px;"></div>'+
'</div>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>background-size: 100% 100%;</code></pre>'+
'</div>';
htmlArr[12]='<h1 class=\'chinese-h\'>background-position</h1>'+
'<h3 class=\'chinese-p\'>設定背景圖片的位置</h3>'+
'<div class=\'show\'>'+
'    <div style="background-image: url(\'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png\');'+
'    background-size: 25%; background-repeat: no-repeat;background-position: bottom right;'+
'    width: auto; height: 184px;"></div>'+
'</div>'+
'<hr/>'+
'<h1>程式碼</h1>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>background-position: bottom right;</code></pre>'+
'</div>';
htmlArr[13]='<h1 class=\'chinese-h\'>border</h1>'+
'<h3 class=\'chinese-p\'>設定邊框</h3>'+
'<div class=\'show\'>'+
'    <div style="background-color: red;border-width: 10px;border-style: ridge;border-color: black;'+
'    width: 100px; height: 100px;"></div>'+
'</div>'+
'<hr />'+
'<h1>程式碼</h1>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>border-width: 10px;\nborder-style: solid;\nborder-color: black;</code></pre>'+
'</div>'+
'<hr/>'+
'<h1>合併程式碼</h1>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>border: 10px soild black;</code></pre>'+
'</div>'+
'<hr />'+
'<h1>屬性</h1>'+
'<div class="tablebox">'+
'    <table>'+
'        <tr>'+
'            <th style="width:20%">屬性</th>'+
'            <th style="width:20%">值</th>'+
'            <th>描述</th>'+
'        </tr>'+
'        <tr>'+
'            <td style="width:20%">border-width</td>'+
'            <td style="width:20%">length</td>'+
'            <td>設定邊框大小</td>'+
'        </tr>'+
'        <tr>'+
'            <td style="width:20%">border-style</td>'+
'            <td style="width:20%">solid<br />dashed<br />dotted<br />double</td>'+
'            <td>'+
'                <div style="border-bottom: 10px solid black; height: 10px;margin-top: -8px"></div>'+
'                <div style="border-bottom: 10px dashed black; height: 11px;"></div>'+
'                <div style="border-bottom: 10px dotted black; height: 11px;"></div>'+
'                <div style="border-bottom: 10px double black; height: 11px;"></div>'+
'            </td>'+
'        </tr>'+
'        <tr>'+
'            <td style="width:20%">border-color</td>'+
'            <td style="width:20%">color</td>'+
'            <td>設定邊框顏色</td>'+
'        </tr>'+
'    </table>'+
'</div>';
htmlArr[14]='<h1 class=\'chinese-h\'>padding</h1>'+
'<h3 class=\'chinese-p\'>設定內距距離</h3>'+
'<div class=\'show\'>'+
'    <div style="background-color: red;'+
'        width: 155px; height: 155px;margin:0 0 10px 20px">width:'+
'        155px'+
'        height: 155px'+
'        padding:0px</div>'+
'    <div style="background-color: red;padding: 20px;'+
'        width: 155px; height: 155px;">'+
'        width: 155px'+
'        height: 155px'+
'        padding:20px</div>'+
'</div>'+
'<hr />'+
'<h1>程式碼</h1>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>padding:20px;</code></pre>'+
'</div>';
htmlArr[15]='<h1 class=\'chinese-h\'>margin</h1>'+
'<h3 class=\'chinese-p\'>設定外距距離</h3>'+
'<div class=\'show\'>'+
'    <div style="background-color: red;'+
'        width: 150px; height: 150px;">width:'+
'        150px'+
'        height: 150px'+
'        margin:0px</div>'+
'    <div style="background-color: red;margin: 20px;'+
'        width: 150px; height: 150px;">'+
'        width: 150px'+
'        height: 150px'+
'        margin: 20px;</div>'+
'</div>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>margin: 20px;</code></pre>'+
'</div>'+
'<hr />'+
'<h1>margin: auto</h1>'+
'<h3 class=\'chinese-p\'>margin-x軸設置為auto時，margin左右邊的大小會相等，並使物件在該區域中居中</h3>'+
'<div class=\'show\'>'+
'    <div style="background-color: red;margin: auto;'+
'        width: 150px; height: 150px;">'+
'        width: 150px'+
'        height: 150px'+
'        margin: auto;</div>'+
'</div>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>margin: auto;</code></pre>'+
'</div>'+
'<hr />'+
'<h1>margin y軸覆蓋問題</h1>'+
'<h3 class=\'chinese-p\'>margin的display屬性為block時，兩個物件的margin-y軸範圍是會互相重疊的，如範例的紅色和藍色之間的間隔只有20px，可以將display屬性改為inline-block來解決問題，如範例的藍色和綠色，設置float也可以解決問題，因為float也等於間接更改display屬性</h3>'+
'<div class=\'show\'>'+
'    <div style="background-color: red;margin: 20px;'+
'            width: 150px; height: 150px;">'+
'        width: 150px'+
'        height: 150px'+
'        margin: 20px'+
'        display: block</div>'+
'    <div style="background-color: blue;margin: 20px;'+
'        width: 150px; height: 150px;">'+
'        width: 150px'+
'        height: 150px'+
'        margin: 20px'+
'        display: block</div>'+
'    <div style="background-color: yellowgreen;margin: 20px;display: inline-block;'+
'        width: 150px; height: 150px;">'+
'        width: 150px'+
'        height: 150px'+
'        margin: 20px'+
'        display: inline-block</div>'+
'</div>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>&lt;div&nbsp;style=&quot;background-color:&nbsp;blue;margin:&nbsp;20px;&nbsp;width:&nbsp;150px;&nbsp;height:&nbsp;150px;&quot;&gt;&lt;/div&gt;\n&lt;div&nbsp;style=&quot;background-color:&nbsp;yellowgreen;margin:&nbsp;20px;display:&nbsp;inline-block;&nbsp;width:&nbsp;150px;&nbsp;height:&nbsp;150px;&quot;&gt;&lt;/div&gt;</code></pre>'+
'</div>'+
'<hr />'+
'<h1>margin y軸子物件問題</h1>'+
'<h3 class=\'chinese-p\'>margin的display屬性為block時，設定子物件的margin-y軸範圍時，發現變動的會是母物件的margin值，解決方法有兩種，一種是在母物件中添加overflow的屬性，另一種是將其中一個物件的display屬性改成inline-block</h3>'+
'<div class=\'show\'>'+
'    <div style="background-color: red;'+
'        width: 200px; height: 200px;">'+
'        <div style="background-color: blue;margin: 30px;'+
'            width: 150px; height: 150px;">'+
'            width: 150px'+
'            height: 150px'+
'            margin: 20px'+
'            display: block</div>'+
'    </div>'+
'    <div style="background-color: red;margin-top: 20px;'+
'        width: 200px; height: 200px;">'+
'        <div style="background-color: blue;margin: 30px;display: inline-block;'+
'            width: 150px; height: 150px;">'+
'            width: 150px'+
'            height: 150px'+
'            margin: 20px'+
'            display: inline-block</div>'+
'    </div>'+
'</div>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>&lt;div&nbsp;style=&quot;background-color:&nbsp;red;margin-top:&nbsp;20px;width:&nbsp;200px;&nbsp;height:&nbsp;200px;&quot;&gt;\n&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&nbsp;style=&quot;background-color:&nbsp;blue;margin:&nbsp;30px;display:&nbsp;inline-block;width:&nbsp;150px;&nbsp;height:&nbsp;150px;&quot;&gt;&lt;/div&gt;\n&lt;/div&gt;</code></pre>'+
'</div>';
htmlArr[16]='<h1 class=\'chinese-h\'>box-sizing</h1>'+
'<h3 class=\'chinese-p\'>border和padding都會改變原始物件大小，使長寬變得難以計算，添加box-sizing可以固定原始物件大小</h3>'+
'<div class=\'show\'>'+
'    <div style="background-color: red;border: 10px black solid;padding: 5px;'+
'        width: 150px; height: 150px;margin-bottom: 10px;">'+
'        實際寬度為'+
'        width(150px)'+
'        +padding(10px)'+
'        +border(20px)'+
'        =180px'+
'    </div>'+
'    <div style="background-color: red;border: 10px black solid;padding: 5px;'+
'        width: 150px; height: 150px;box-sizing: border-box;">'+
'        border-box'+
'        實際寬度為'+
'        width(150px)'+
'    </div>'+
'</div>'+
'<hr />'+
'<h1>程式碼</h1>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>box-sizing: border-box;</code></pre>'+
'</div>';
htmlArr[17] = '<h1 class=\'chinese-h\'>list-style-type</h1>'+
'<h3 class=\'chinese-p\'>更改列表前方圖示</h3>'+
'<div class=\'show\'>'+
'    <ul style="list-style-type: square;">'+
'        <li>1</li>'+
'        <li>2</li>'+
'        <li>3</li>'+
'    </ul>'+
'</div>'+
'<hr />'+
'<h1>程式碼</h1>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>list-style-type: square;</code></pre>'+
'</div>'+
'<hr />'+
'<h1>屬性</h1>'+
'<div class="tablebox">'+
'    <table>'+
'        <tr>'+
'            <th>值</th>'+
'            <th>樣式</th>'+
'        </tr>'+
'        <tr>'+
'            <td>circle</td>'+
'            <td>'+
'                <li style="list-style-type: circle;"></li>'+
'            </td>'+
'        </tr>'+
'        <tr>'+
'            <td>disc</td>'+
'            <td>'+
'                <li style="list-style-type: disc;"></li>'+
'            </td>'+
'        </tr>'+
'        <tr>'+
'            <td>square</td>'+
'            <td>'+
'                <li style="list-style-type: square;"></li>'+
'            </td>'+
'        </tr>'+
'        <tr>'+
'            <td>decimal</td>'+
'            <td>'+
'                <li style="list-style-type: decimal;"></li>'+
'            </td>'+
'        </tr>'+
'        <tr>'+
'            <td>lower-alpha</td>'+
'            <td>'+
'                <li style="list-style-type: lower-alpha"></li>'+
'            </td>'+
'        </tr>'+
'        <tr>'+
'            <td>upper-alpha</td>'+
'            <td>'+
'                <li style="list-style-type: upper-alpha"></li>'+
'            </td>'+
'        </tr>'+
'        <tr>'+
'            <td>none</td>'+
'            <td>'+
'                <li style="list-style-type: none"></li>'+
'            </td>'+
'        </tr>'+
'    </table>'+
'</div>';
htmlArr[18]='<h1 class=\'chinese-h\'>list-style-position</h1>'+
'<h3 class=\'chinese-p\'>更改列表前方圖示的位置</h3>'+
'<div class=\'show\'>'+
'    <ul style="list-style-position: inside">'+
'        <li>inside1</li>'+
'        <li>inside2</li>'+
'        <li>inside3</li>'+
'    </ul>'+
'</div>'+
'<hr />'+
'<h1>程式碼</h1>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>list-style-position: inside;</code></pre>'+
'</div>'+
'<hr />'+
'<h1>屬性</h1>'+
'<div class="tablebox">'+
'    <table>'+
'        <tr>'+
'            <th style="width:50%">值</th>'+
'            <th>樣式</th>'+
'        </tr>'+
'        <tr>'+
'            <td>inside</td>'+
'            <td>'+
'                <ul>'+
'                    <li style="list-style-position: inside;">inside</li>'+
'                </ul>'+
'            </td>'+
'        </tr>'+
'        <tr>'+
'            <td>outside</td>'+
'            <td>'+
'                <ul>'+
'                    <li style="list-style-position: outside;">outside</li>'+
'                </ul>'+
'            </td>'+
'        </tr>'+
'    </table>'+
'</div>';
htmlArr[19]='<h1 class=\'chinese-h\'>list-style-image</h1>'+
'<h3 class=\'chinese-p\'>更改列表前方圖示，如果圖片大小沒有特別調整過，建議使用background來設置就好</h3>'+
'<div class=\'show\'>'+
'    <ul style="list-style-image: url(\'img/redlist.png\');">'+
'        <li>A</li>'+
'        <li>B</li>'+
'        <li>C</li>'+
'    </ul>'+
'</div>'+
'<hr />'+
'<h1>程式碼</h1>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>list-style-image: url(\'img/redlist.png\');</code></pre>'+
'</div>';
htmlArr[20]='<h1 class=\'chinese-h\'>border</h1>'+
'<h3 class=\'chinese-p\'>CSS設置表格邊框的方法</h3>'+
'<div class=\'show\'>'+
'    <style>'+
'        table,th,td{'+
'            border:1px solid black;'+
'        }'+
'    </style>'+
'    <table style=\'width: 100px ;height: 100px;\'>'+
'        <tr>'+
'            <td></td>'+
'            <td></td>'+
'            <td></td>'+
'        </tr>'+
'        <tr>'+
'            <td></td>'+
'            <td></td>'+
'            <td></td>'+
'        </tr>'+
'        <tr>'+
'            <td></td>'+
'            <td></td>'+
'            <td></td>'+
'        </tr>'+
'    </table>'+
'</div>'+
'<hr />'+
'<h1>程式碼</h1>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>table,th,td{\n&nbsp;&nbsp;&nbsp;&nbsp;border:1px&nbsp;solid&nbsp;black;\n}</code></pre>'+
'</div>';
htmlArr[21]='<h1 class=\'chinese-h\'>border-spacing</h1>'+
'<h3 class=\'chinese-p\'>設置表格邊框距離</h3>'+
'<div class=\'show\'>'+
'    <style>'+
'        table,th,td {'+
'            border: 1px solid black;'+
'            border-spacing: 10px;'+
'        }'+
'    </style>'+
'    <table style=\'width: 100px ;height: 100px;\'>'+
'        <tr>'+
'            <td></td>'+
'            <td></td>'+
'            <td></td>'+
'        </tr>'+
'        <tr>'+
'            <td></td>'+
'            <td></td>'+
'            <td></td>'+
'        </tr>'+
'        <tr>'+
'            <td></td>'+
'            <td></td>'+
'            <td></td>'+
'        </tr>'+
'    </table>'+
'</div>'+
'<hr />'+
'<h1>程式碼</h1>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>table,th,td&nbsp;{\n&nbsp;&nbsp;&nbsp;&nbsp;border:&nbsp;1px&nbsp;solid&nbsp;black;\n&nbsp;&nbsp;&nbsp;&nbsp;border-spacing:&nbsp;10px;\n}</code></pre>'+
'</div>';
htmlArr[22]='<h1 class=\'chinese-h\'>border-collapse</h1>'+
'<h3 class=\'chinese-p\'>設置表格邊框是否合併</h3>'+
'<div class=\'show\'>'+
'    <style>'+
'        .show table,'+
'        .show th,'+
'        .show td {'+
'            border: 1px solid black;'+
'            border-collapse: collapse;'+
'        }'+
'    </style>'+
'    <table style=\'width: 100px ;height: 100px;\'>'+
'        <tr>'+
'            <td></td>'+
'            <td></td>'+
'            <td></td>'+
'        </tr>'+
'        <tr>'+
'            <td></td>'+
'            <td></td>'+
'            <td></td>'+
'        </tr>'+
'        <tr>'+
'            <td></td>'+
'            <td></td>'+
'            <td></td>'+
'        </tr>'+
'    </table>'+
'</div>'+
'<hr />'+
'<h1>程式碼</h1>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>table,th,td&nbsp;{\n&nbsp;&nbsp;&nbsp;&nbsp;border:&nbsp;1px&nbsp;solid&nbsp;black;\n&nbsp;&nbsp;&nbsp;&nbsp;border-collapse:&nbsp;collapse;\n}</code></pre>'+
'</div>'+
'<hr />'+
'<h1>屬性</h1>'+
'<div class="tablebox">'+
'    <table>'+
'        <tr>'+
'            <th>值</th>'+
'            <th>描述</th>'+
'        </tr>'+
'        <tr>'+
'            <td>collapse</td>'+
'            <td>無表格間距</td>'+
'        </tr>'+
'        <tr>'+
'            <td>separate</td>'+
'            <td>有表格間距</td>'+
'        </tr>'+
'    </table>'+
'</div>';
htmlArr[23]='<h1 class=\'chinese-h\'>empty-cells</h1>'+
'<h3 class=\'chinese-p\'>設置無內容的表格隱藏或顯示</h3>'+
'<div class=\'show\'>'+
'    <style>'+
'        .show table,'+
'        .show th,'+
'        .show td {'+
'            border: 1px solid black;'+
'            empty-cells: hide;'+
'        }'+
'    </style>'+
'    <table style=\'width: 100px ;height: 100px;\'>'+
'        <tr>'+
'            <td>1</td>'+
'            <td>2</td>'+
'            <td>3</td>'+
'        </tr>'+
'        <tr>'+
'            <td>4</td>'+
'            <td>5</td>'+
'            <td>6</td>'+
'        </tr>'+
'        <tr>'+
'            <td>7</td>'+
'            <td></td>'+
'            <td></td>'+
'        </tr>'+
'    </table>'+
'</div>'+
'<hr />'+
'<h1>程式碼</h1>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>table, th, td&nbsp;{\n&nbsp;&nbsp;&nbsp;&nbsp;border:&nbsp;1px&nbsp;solid&nbsp;black;\n&nbsp;&nbsp;&nbsp;&nbsp;empty-cells:&nbsp;hide;\n}</code></pre>'+
'</div>'+
'<hr />'+
'<h1>屬性</h1>'+
'<div class="tablebox">'+
'    <table>'+
'        <tr>'+
'            <th style="width:50%">值</th>'+
'            <th>狀態</th>'+
'        </tr>'+
'        <tr>'+
'            <td>hide</td>'+
'            <td>隱藏</td>'+
'        </tr>'+
'        <tr>'+
'            <td>show</td>'+
'            <td>顯示</td>'+
'        </tr>'+
'    </table>'+
'</div>';
htmlArr[24]='<h1 class=\'chinese-h\'>tr:nth-child</h1>'+
'<h3 class=\'chinese-p\'>常用來設置表個單雙行的顏色變化，tr:nth-child(2n-1)為單數行、tr:nth-child(2n)為雙數行</h3>'+
'<div class=\'show\'>'+
'    <style>'+
'        table,'+
'        th,'+
'        td {'+
'            border: 1px solid black;'+
'        }'+
'        tr:nth-child(2n) {'+
'            background-color: blue;'+
'        }'+
'        tr:nth-child(2n-1) {'+
'            background-color: red;'+
'        }'+
'    </style>'+
'    <table style=\'width: 100px ;height: 200px;\'>'+
'        <tr>'+
'            <td></td>'+
'            <td></td>'+
'            <td></td>'+
'        </tr>'+
'        <tr>'+
'            <td></td>'+
'            <td></td>'+
'            <td></td>'+
'        </tr>'+
'        <tr>'+
'            <td></td>'+
'            <td></td>'+
'            <td></td>'+
'        </tr>'+
'        <tr>'+
'            <td></td>'+
'            <td></td>'+
'            <td></td>'+
'        </tr>'+
'        <tr>'+
'            <td></td>'+
'            <td></td>'+
'            <td></td>'+
'        </tr>'+
'        <tr>'+
'            <td></td>'+
'            <td></td>'+
'            <td></td>'+
'        </tr>'+
'    </table>'+
'</div>'+
'<hr />'+
'<h1>程式碼</h1>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>table, th, td&nbsp;{\n&nbsp;&nbsp;&nbsp;&nbsp;border:&nbsp;1px&nbsp;solid&nbsp;black;\n}\ntr:nth-child(2n)&nbsp;{\n&nbsp;&nbsp;&nbsp;&nbsp;background-color:&nbsp;blue;\n}\ntr:nth-child(2n-1)&nbsp;{\n&nbsp;&nbsp;&nbsp;&nbsp;background-color:&nbsp;red;\n}</code></pre>'+
'</div>';
htmlArr[25]='<h1 class=\'chinese-h\'>選擇器</h1>'+
'<h3 class=\'chinese-p\'>控制滑鼠的各種事件，使用時須按照範例程式碼順序排列；在手機上使用容易遇到問題，建議直接使用JS的寫法</h3>'+
'<div class=\'show\'>'+
'    <style>'+
'        a:link {'+
'            color: blue;'+
'        }'+
'        a:visited {'+
'            color: gray;'+
'        }'+
'        a:hover {'+
'            color: yellowgreen;'+
'        }'+
'        a:active {'+
'            color: red;'+
'        }'+
'    </style>'+
'    <a href="#">超連結文本</a>'+
'</div>'+
'<hr />'+
'<h1>程式碼</h1>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>a:link&nbsp;{\n&nbsp;&nbsp;&nbsp;&nbsp;color:&nbsp;blue;\n}\na:visited&nbsp;{\n&nbsp;&nbsp;&nbsp;&nbsp;color:&nbsp;gray;\n}\na:hover&nbsp;{\n&nbsp;&nbsp;&nbsp;&nbsp;color:&nbsp;yellowgreen;\n}\na:active&nbsp;{\n&nbsp;&nbsp;&nbsp;&nbsp;color:&nbsp;red;\n}</code></pre>'+
'</div>'+
'<hr />'+
'<h1>屬性</h1>'+
'<div class="tablebox">'+
'    <table>'+
'        <tr>'+
'            <th style="width:30%">屬性</th>'+
'            <th>功能</th>'+
'        </tr>'+
'        <tr>'+
'            <td>link</td>'+
'            <td>未拜訪過的連結</td>'+
'        </tr>'+
'        <tr>'+
'            <td>visited</td>'+
'            <td>已拜訪過的連結</td>'+
'        </tr>'+
'        <tr>'+
'            <td>hover</td>'+
'            <td>滑鼠移入時觸發</td>'+
'        </tr>'+
'        <tr>'+
'            <td>active</td>'+
'            <td>滑鼠按下時觸發</td>'+
'        </tr>'+
'    </table>'+
'</div>';
htmlArr[26]='<h1 class=\'chinese-h\'>block</h1>'+
'<h3 class=\'chinese-p\'>又稱塊元素，塊元素可以自行調整長寬，擁有自動換行的功能，通常width的值都預設為100%，像是div、dl、dt、dd、ol、ul、h1~h6、form、hr、table、tr、td...</h3>'+
'<div class=\'show\'>'+
'    <div style="height:30px;background-color:red;">div標籤</div>'+
'    <p style="background-color:blue;">p標籤</p>'+
'</div>'+
'<hr />'+
'<h1>程式碼</h1>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>display:block;</code></pre>'+
'</div>';
htmlArr[27]='<h1 class=\'chinese-h\'>inline</h1>'+
'<h3 class=\'chinese-p\'>又稱行內元素，行內元素無法調整長寬，像是a、span、i、b、string、em、del...</h3>'+
'<div class=\'show\'>'+
'    <a style="background-color:gold;" href="#">a標籤</a>'+
'    <span style="background-color:greenyellow;">span標籤</span>'+
'</div>'+
'<hr />'+
'<h1>程式碼</h1>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>display:inline;</code></pre>'+
'</div>';
htmlArr[28]='<h1 class=\'chinese-h\'>inline-block</h1>'+
'<h3 class=\'chinese-p\'>又稱行內塊元素，行內塊元素可以自行調整長寬，且不會自動換行，但是元素之間會有小間隔，像是img、input</h3>'+
'<div class=\'show\'>'+
'    <img src="img/redlist.png" alt="" style="width:200px;">'+
'    <img src="img/redlist.png" alt="" style="width:200px;">'+
'    <img src="img/redlist.png" alt="" style="width:200px;">'+
'</div>'+
'<hr />'+
'<h1>程式碼</h1>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>display:inline-block;</code></pre>'+
'</div>'+
'<hr />'+
'<h1 class=\'chinese-h\'>解決間隔方法</h1>'+
'<h2>方法一:使用float</h2>'+
'<div class=\'show\'>'+
'    <img src="img/redlist.png" alt="" style="width:200px; float: left;">'+
'    <img src="img/redlist.png" alt="" style="width:200px; float: left;">'+
'    <img src="img/redlist.png" alt="" style="width:200px; float: left;">'+
'</div>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>&lt;img&nbsp;src=&quot;img/redlist.png&quot;&nbsp;alt=&quot;&quot;&nbsp;style=&quot;width:200px;&nbsp;float:&nbsp;left;&quot;&gt;\n&lt;img&nbsp;src=&quot;img/redlist.png&quot;&nbsp;alt=&quot;&quot;&nbsp;style=&quot;width:200px;&nbsp;float:&nbsp;left;&quot;&gt;\n&lt;img&nbsp;src=&quot;img/redlist.png&quot;&nbsp;alt=&quot;&quot;&nbsp;style=&quot;width:200px;&nbsp;float:&nbsp;left;&quot;&gt;</code></pre>'+
'</div>'+
'<hr />'+
'<h2>方法二:從html結構下手</h2>'+
'<div class=\'show\'>'+
'    <img src="img/redlist.png" style="width:200px;"><img'+
'     src="img/redlist.png" style="width:200px;"><img'+
'     src="img/redlist.png" style="width:200px;">'+
'</div>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>&lt;img&nbsp;src=&quot;img/redlist.png&quot;&nbsp;style=&quot;width:200px;&quot;&gt;&lt;img\nsrc=&quot;img/redlist.png&quot;&nbsp;style=&quot;width:200px;&quot;&gt;&lt;img\nsrc=&quot;img/redlist.png&quot;&nbsp;style=&quot;width:200px;&quot;&gt;</code></pre>'+
'</div>';
htmlArr[29]='<h1 class=\'chinese-h\'>float</h1>'+
'<h3 class=\'chinese-p\'>浮動元素，絕大多數功能都能使用inline-block來達成，但還是有部分功能無法被取代，像是文繞圖</h3>'+
'<div class=\'show\'>'+
'    <style>'+
'        .box{'+
'            width: 50%;'+
'            height: 100px;'+
'            background-color: rebeccapurple;'+
'            float: left;'+
'        }'+
'    </style>'+
'    <div class="box"></div>'+
'    g g g g g g g g g g g g g g g g g g g g g'+
'    g g g g g g g g g g g g g g g g g g g g g'+
'    g g g g g g g g g g g g g g g g g g g g g'+
'    g g g g g g g g g g g g g g g g g g g g g'+
'    g g g g g g g g g g g g g g g g g g g g g'+
'    g g g g g g g g g g g g g g g g g g g g g'+
'</div>'+
'<hr />'+
'<h1>程式碼</h1>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>&lt;style&gt;\n&nbsp;&nbsp;&nbsp;&nbsp;.box&nbsp;{\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width:&nbsp;50%;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height:&nbsp;100px;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color:&nbsp;rebeccapurple;\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;float:&nbsp;left;\n&nbsp;&nbsp;&nbsp;&nbsp;}\n&lt;/style&gt;\n&lt;div&nbsp;class=&quot;box&quot;&gt;&lt;/div&gt;\ng&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g</code></pre>'+
'</div>';
htmlArr[30]='<h1 class=\'chinese-h\'>position</h1>'+
'<h3 class=\'chinese-p\'>控制物件的位置，必要時可以用，但不要濫用</h3>'+
'<br />'+
'<hr />'+
'<h2>position: absolute</h2>'+
'<h3 class=\'chinese-p\'>絕對定位需要一個參考座標，參考坐標為父節點中有position的節點，若都沒有則預設為body，然後絕對定位會脫離原本的文本，可能使原本的文本發生變化，使用上要多加注意</h3>'+
'<div class=\'show\'>'+
'    <style>'+
'        .box1 {'+
'            width: 100%;'+
'            height: 100px;'+
'            background-color: skyblue;'+
'            position: relative;'+
'        }'+
'        .box2 {'+
'            text-align: center;'+
'            width: 100px;'+
'            height: 30px;'+
'            display: inline-block;'+
'            background-color: burlywood;'+
'            position: absolute;'+
'            right: 0;'+
'        }'+
'    </style>'+
'    <div class="box1"> g g g g g g g g g g g g g g'+
'        <div class="box2">absolute</div>T T T T T T T T T T T T T T'+
'    </div>'+
'</div>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'> &lt;style&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;.box1&nbsp;{\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width:&nbsp;100%;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height:&nbsp;100px;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color:&nbsp;skyblue;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position:&nbsp;relative;\n &nbsp;&nbsp;&nbsp;&nbsp;}\n &nbsp;&nbsp;&nbsp;&nbsp;.box2&nbsp;{\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text-align:&nbsp;center;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width:&nbsp;100px;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height:&nbsp;30px;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display:&nbsp;inline-block;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color:&nbsp;burlywood;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position:&nbsp;absolute;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;right:&nbsp;0;\n &nbsp;&nbsp;&nbsp;&nbsp;}\n &lt;/style&gt;\n &lt;div&nbsp;class=&quot;box1&quot;&gt;&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g\n &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&nbsp;class=&quot;box2&quot;&gt;absolute&lt;/div&gt;T&nbsp;T&nbsp;T&nbsp;T&nbsp;T&nbsp;T&nbsp;T&nbsp;T&nbsp;T&nbsp;T&nbsp;T&nbsp;T&nbsp;T&nbsp;T\n &lt;/div&gt;</code></pre>'+
'</div>'+
'<hr />'+
'<h2>position: relative</h2>'+
'<h3 class=\'chinese-p\'>相對定位是以自己為目標，不會脫離文本，過去我曾經平凡使用相對定位來調整物件位置，這是個很糟糕的做法</h3>'+
'<div class=\'show\'>'+
'    <style>'+
'        .box3 {'+
'            width: 100%;'+
'            height: 100px;'+
'            background-color: skyblue;'+
'            position: relative;'+
'        }'+
'        .box4 {'+
'            text-align: center;'+
'            width: 100px;'+
'            height: 30px;'+
'            background-color: orange;'+
'            display: inline-block;'+
'            position: relative;'+
'            top: 30px;'+
'        }'+
'    </style>'+
'    <div class="box3"> g g g g g g g g g g g g g g'+
'        <div class="box4">relative</div>T T T T T T T T T T T T T T'+
'    </div>'+
'</div>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'> &lt;style&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;.box3&nbsp;{\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width:&nbsp;100%;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height:&nbsp;100px;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color:&nbsp;skyblue;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position:&nbsp;relative;\n &nbsp;&nbsp;&nbsp;&nbsp;}\n &nbsp;&nbsp;&nbsp;&nbsp;.box4&nbsp;{\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text-align:&nbsp;center;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width:&nbsp;100px;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height:&nbsp;30px;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color:&nbsp;orange;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display:&nbsp;inline-block;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position:&nbsp;relative;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;top:&nbsp;30px;\n &nbsp;&nbsp;&nbsp;&nbsp;}\n &lt;/style&gt;\n &lt;div&nbsp;class=&quot;box3&quot;&gt;&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g&nbsp;g\n &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&nbsp;class=&quot;box4&quot;&gt;relative&lt;/div&gt;T&nbsp;T&nbsp;T&nbsp;T&nbsp;T&nbsp;T&nbsp;T&nbsp;T&nbsp;T&nbsp;T&nbsp;T&nbsp;T&nbsp;T&nbsp;T\n &lt;/div&gt;</code></pre>'+
'</div>'+
'<hr />'+
'<h2>position: fixed</h2>'+
'<h3 class=\'chinese-p\'>固定定位是以整個窗口為目標，不會隨著窗口滾輪的移動而改變位置，如下方綠色長方形</h3>'+
'<style>'+
'    .box5 {'+
'        width: 100px;'+
'        height: 30px;'+
'        background-color: green;'+
'        display: inline-block;'+
'        line-height: 30px;'+
'        text-align: center;'+
'        position: fixed;'+
'        bottom: 0;'+
'        left: 50%;'+
'    }'+
'</style>'+
'<div class="box5">fixed</div>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'> &lt;style&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;.box5&nbsp;{\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width:&nbsp;100px;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height:&nbsp;30px;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color:&nbsp;green;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;line-height:&nbsp;30px;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text-align:&nbsp;center;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position:&nbsp;fixed;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bottom:&nbsp;0;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;left:&nbsp;50%;\n &nbsp;&nbsp;&nbsp;&nbsp;}\n &lt;/style&gt;\n &lt;div&nbsp;class=&quot;box5&quot;&gt;fixed&lt;/div&gt;</code></pre>'+
'</div>';
htmlArr[31]='<h1 class=\'chinese-h\'>z-index</h1>'+
'<h3 class=\'chinese-p\'>設置物件顯示的層級，有position的顯示權重比沒有 position 的高，若是都有 position 則 z-index 數值越大顯示的權重越高</h3>'+
'<div class=\'show\'>'+
'    <style>'+
'        .box1 {'+
'            width: 300px;'+
'            height: 300px;'+
'            background-color: skyblue;'+
'            position: relative;'+
'            z-index: 10;'+
'        }'+
'        .box2 {'+
'            width: 200px;'+
'            height: 200px;'+
'            background-color: blue;'+
'            z-index: 9;'+
'            position: relative;'+
'            bottom: 100px;'+
'        }'+
'    </style>'+
'    <div class="box1"></div>'+
'    <div class="box2"></div>'+
'</div>'+
'<hr/>'+
'<h1>程式碼</h1>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>&lt;style&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;.box1&nbsp;{\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width:&nbsp;300px;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height:&nbsp;300px;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color:&nbsp;skyblue;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position:&nbsp;relative;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;z-index:&nbsp;10;\n &nbsp;&nbsp;&nbsp;&nbsp;}\n &nbsp;&nbsp;&nbsp;&nbsp;.box2&nbsp;{\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width:&nbsp;200px;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height:&nbsp;200px;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color:&nbsp;blue;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;z-index:&nbsp;9;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;position:&nbsp;relative;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bottom:&nbsp;100px;\n &nbsp;&nbsp;&nbsp;&nbsp;}\n &lt;/style&gt;\n &lt;div&nbsp;class=&quot;box1&quot;&gt;&lt;/div&gt;\n &lt;div&nbsp;class=&quot;box2&quot;&gt;&lt;/div&gt;</code></pre>'+
'</div>';
htmlArr[32]='<h1 class=\'chinese-h\'>垂直居中</h1>'+
'<h3 class=\'chinese-p\'>這裡只示範flex的垂直居中方法，這也是最簡單的一種</h3>'+
'<div class=\'show\'>'+
'    <style>'+
'        .box1 {'+
'            display: flex;'+
'            align-items: center;'+
'            justify-content: center;'+
'            width: 200px;'+
'            height: 200px;'+
'            background-color: blue;'+
'        }'+
'        .box2 {'+
'            width: 50px;'+
'            height: 50px;'+
'            background-color: red;'+
'        }'+
'    </style>'+
'    <div class="box1">'+
'        <div class="box2"></div>'+
'    </div>'+
'</div>'+
'<hr />'+
'<h1>程式碼</h1>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'> &lt;style&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;.box1&nbsp;{\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display:&nbsp;flex;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;align-items:&nbsp;center;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;justify-content:&nbsp;center;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width:&nbsp;200px;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height:&nbsp;200px;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color:&nbsp;blue;\n &nbsp;&nbsp;&nbsp;&nbsp;}\n &nbsp;&nbsp;&nbsp;&nbsp;.box2&nbsp;{\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width:&nbsp;50px;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height:&nbsp;50px;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color:&nbsp;red;\n &nbsp;&nbsp;&nbsp;&nbsp;}\n &lt;/style&gt;\n &lt;div&nbsp;class=&quot;box1&quot;&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&nbsp;class=&quot;box2&quot;&gt;&lt;/div&gt;\n &lt;/div&gt;</code></pre>'+
'</div>';
htmlArr[33]='<h1 class=\'chinese-h\'>overflow</h1>'+
'<h3 class=\'chinese-p\'>處理溢出的屬性，也可解決某些高度坍塌跟margin錯位的問題</h3>'+
'<div class=\'show\'>'+
'    <style>'+
'        .box1,'+
'        .box2,'+
'        .box3 {'+
'            margin: 0 5px;'+
'            float: left;'+
'            width: 200px;'+
'            height: 100px;'+
'            background-color: blue;'+
'        }'+
'        .box1 {'+
'            overflow: visible;'+
'        }'+
'        .box2 {'+
'            overflow: hidden;'+
'        }'+
'        .box3 {'+
'            overflow: auto;'+
'        }'+
'    </style>'+
'    <div class="box1">'+
'        d d d d d d d d d d d d d d'+
'        d d d d d d d d d d d d d d'+
'        d d d d d d d d d d d d d d'+
'        d d d d d d d d d d d d d d'+
'        d d d d d d d d d d d d d d'+
'        d d d d d d d d d d d d d d'+
'    </div>'+
'    <div class="box2">'+
'        d d d d d d d d d d d d d d'+
'        d d d d d d d d d d d d d d'+
'        d d d d d d d d d d d d d d'+
'        d d d d d d d d d d d d d d'+
'        d d d d d d d d d d d d d d'+
'        d d d d d d d d d d d d d d'+
'    </div>'+
'    <div class="box3">'+
'        d d d d d d d d d d d d d d'+
'        d d d d d d d d d d d d d d'+
'        d d d d d d d d d d d d d d'+
'        d d d d d d d d d d d d d d'+
'        d d d d d d d d d d d d d d'+
'        d d d d d d d d d d d d d d'+
'    </div>'+
'</div>'+
'<hr />'+
'<h1>程式碼</h1>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'> &lt;style&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;.box1, .box2, .box3&nbsp;{\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;margin:&nbsp;0&nbsp;5px;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;float:&nbsp;left;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width:&nbsp;200px;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height:&nbsp;100px;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background-color:&nbsp;blue;\n &nbsp;&nbsp;&nbsp;&nbsp;}\n &nbsp;&nbsp;&nbsp;&nbsp;.box1&nbsp;{\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;overflow:&nbsp;visible;\n &nbsp;&nbsp;&nbsp;&nbsp;}\n &nbsp;&nbsp;&nbsp;&nbsp;.box2&nbsp;{\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;overflow:&nbsp;hidden;\n &nbsp;&nbsp;&nbsp;&nbsp;}\n &nbsp;&nbsp;&nbsp;&nbsp;.box3&nbsp;{\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;overflow:&nbsp;auto;\n &nbsp;&nbsp;&nbsp;&nbsp;}\n &lt;/style&gt;\n &lt;div&nbsp;class=&quot;box1&quot;&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d\n &nbsp;&nbsp;&nbsp;&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d\n &nbsp;&nbsp;&nbsp;&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d\n &nbsp;&nbsp;&nbsp;&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d\n &nbsp;&nbsp;&nbsp;&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d\n &nbsp;&nbsp;&nbsp;&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d\n &lt;/div&gt;\n &lt;div&nbsp;class=&quot;box2&quot;&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d\n &nbsp;&nbsp;&nbsp;&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d\n &nbsp;&nbsp;&nbsp;&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d\n &nbsp;&nbsp;&nbsp;&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d\n &nbsp;&nbsp;&nbsp;&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d\n &nbsp;&nbsp;&nbsp;&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d\n &lt;/div&gt;\n &lt;div&nbsp;class=&quot;box3&quot;&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d\n &nbsp;&nbsp;&nbsp;&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d\n &nbsp;&nbsp;&nbsp;&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d\n &nbsp;&nbsp;&nbsp;&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d\n &nbsp;&nbsp;&nbsp;&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d\n &nbsp;&nbsp;&nbsp;&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d&nbsp;d\n &lt;/div&gt;</code></pre>'+
'</div>'+
'<hr />'+
'<h1>屬性</h1>'+
'<div class="tablebox">'+
'    <table>'+
'        <tr>'+
'            <th style="width:40%">值</th>'+
'            <th>描述</th>'+
'        </tr>'+
'        <tr>'+
'            <td>visible</td>'+
'            <td>顯示超出部分</td>'+
'        </tr>'+
'        <tr>'+
'            <td>hidden</td>'+
'            <td>隱藏超出部分</td>'+
'        </tr>'+
'        <tr>'+
'            <td>auto</td>'+
'            <td>超出部分變成滾輪</td>'+
'        </tr>'+
'    </table>'+
'</div>';
htmlArr[34]='<h1 class=\'chinese-h\'>clearfix</h1>'+
'<h3 class=\'chinese-p\'>設置 float 時，該父節點是無法被帶有 float 屬性的物件撐開的，此處提供兩種可以撐開的方法</h3>'+
'<div class=\'show\'>'+
'    <style>'+
'        .box1 {'+
'            width: 200px;'+
'            background-color: red;'+
'        }'+
'        .box2 {'+
'            float: left;'+
'            width: 100px;'+
'            height: 100px;'+
'            background-color: blue;'+
'        }'+
'        .clearfix {'+
'            overflow: auto;'+
'        }'+
'    </style>'+
'    <div class=\'box1 clearfix\'>'+
'        <div class=\'box2\'></div>'+
'    </div>'+
'</div>'+
'<hr />'+
'<h1>程式碼</h1>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'>.clearfix&nbsp;{\n&nbsp;&nbsp;&nbsp;&nbsp;overflow:&nbsp;auto;\n}</code></pre>'+
'</div>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'css\'> .clearfix:before,\n .clearfix:after&nbsp;{\n &nbsp;&nbsp;&nbsp;&nbsp;content:&nbsp;&quot;&quot;;\n &nbsp;&nbsp;&nbsp;&nbsp;display:&nbsp;table;\n }\n .clearfix:after&nbsp;{\n &nbsp;&nbsp;&nbsp;&nbsp;clear:&nbsp;both;\n }\n .clearfix&nbsp;{\n &nbsp;&nbsp;&nbsp;&nbsp;*zoom:&nbsp;1;\n &nbsp;&nbsp;&nbsp;&nbsp;/*For&nbsp;IE&nbsp;6&amp;7&nbsp;only*/\n }</code></pre>'+
'</div>';
htmlArr[35]='';
htmlArr[36]='';



