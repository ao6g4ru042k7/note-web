var htmlArr = [];
htmlArr[0]="<h1 class='chinese-h'>標題標籤</h1><hr/><h3 class='chinese-p'>最大為h1，最小為h6，皆為粗體字</h3><div class='show'><h1>H1</h1><h2>H2</h2><h3>H3</h3><h4>H4</h4><h5>H5</h5><h6>H6</h6></div><hr /><h1 class='chinese'>程式</h1><div class='coding'><pre><code class='html'>&lt;h1&gt;H1&lt;&sol;h1&gt;\n&lt;h2&gt;H2&lt;&sol;h2&gt;\n&lt;h3&gt;H3&lt;&sol;h3&gt;\n&lt;h4&gt;H4&lt;&sol;h4&gt;\n&lt;h5&gt;H5&lt;&sol;h5&gt;\n&lt;h6&gt;H6&lt;&sol;h6&gt;</code></pre></div>";
htmlArr[1]="<h1 class='chinese-h'>段落標籤</h1><hr /><h3 class='chinese-p'>h和p標籤會自動換行，而br換行無須輸入文本</h3><div class='show'><h3>h3文本</h3><p>p文本</p><p>下面有br</p><br /><p>上面有br</p></div><hr /><h1 class='chinese'>程式碼</h1><div class='coding'><pre><code class='html'>&lt;h3&gt;h3文本&lt;&sol;h3&gt;\n&lt;p&gt;p文本&lt;&sol;p&gt;\n&lt;p&gt;下面有br&lt;&sol;p&gt;\n&lt;br &sol;&gt;\n&lt;p&gt;上面有br&lt;&sol;p&gt;</code></pre></div>";
htmlArr[2]="<h1 class='chinese-h'>粗體字</h1><hr /><h3 class='chinese-p'>strong和b都可以加粗文字</h3><div class='show'><strong>strong標籤</strong><br/><b>b標籤</b></div><hr /><h1 class='chinese'>程式碼</h1><div class='coding'><pre><code class='html'>&lt;strong&gt;strong標籤&lt;&sol;strong&gt;\n&lt;b&gt;b標籤&lt;&sol;b&gt</code></pre></div>";
htmlArr[3]="<h1 class='chinese-h'>傾斜字</h1><hr /><h3 class='chinese-p'>i和em都可以使文字傾斜</h3><div class='show'><i>i標籤</i><br /><em>em標籤</em></div><hr /><h1 class='chinese'>程式碼</h1><div class='coding'><pre><code class='html'>&lt;i&gt;i標籤&lt;&sol;i&gt;\n&lt;em&gt;em標籤&lt;&sol;em&gt;</code></pre></div>";
htmlArr[4]="<h1 class='chinese-h'>下滑線</h1><hr /><h3 class='chinese-p'>u是下滑線標籤</h3><div class='show'><u>u標籤</u></div><hr /><h1 class='chinese'>程式碼</h1><div class='coding'><pre><code class='html'>&lt;u&gt;u標籤&lt;&sol;u&gt;</code></pre></div>";
htmlArr[5]="<h1 class='chinese-h'>上 / 下標註</h1><hr /><h3 class='chinese-p'>sup是上標註標籤，sub是下標註標籤</h3><div class='show'><p>p標籤<sup>sup</sup></p><p>p標籤<sub>sub</sub></p></div><hr /><h1 class='chinese'>程式碼</h1><div class='coding'><pre><code class='html'>&lt;sup&gt;上標註&lt;&sol;sup&gt;\n&lt;sub&gt;下標註&lt;&sol;sub&gt;</code></pre></div>";
htmlArr[6]="<h1 class='chinese-h'>特殊字符-Entities</h1><hr /><h3 class='chinese-p'>在HTML中有些符號無法直接顯示出來，像是 '&lt;' 必須使用Entities代碼中的 '&amp;lt;' 才能顯示</h3><div class='atext'><a href='https://dev.w3.org/html5/html-author/charref' target='_blank'>點擊查看詳細Entities代碼</a></div><div class='show'>&lt;h1&gt;H1&lt;&sol;h1&gt;</div><hr /><h1 class='chinese'>程式碼</h1><div class='coding'><pre><code class='html'>&amp;lt;h1&amp;gt;H1&amp;lt;&amp;sol;h1&amp;gt;</code></pre></div>";
htmlArr[7]="<h1 class='chinese-h'>超連結</h1><hr /><h3 class='chinese-p'>a標籤可以連接其他網頁，或連結自己內部網站</h3><div class='atext'><a href='http://www.w3school.com.cn/tags/tag_a.asp' target='_blank'>點擊查看詳細a標籤屬性</a></div><div class='show'><a href='https://www.google.com'>開啟GOOGLE</a><br/><a href='https://www.google.com' target='_blank'>新分頁開啟GOOGLE</a></div><hr /><h1 class='chinese'>程式碼</h1><div class='coding'><pre><code class='html'>&lt;a href='https:&sol;&sol;www.google.com'&gt;開啟GOOGLE&lt;&sol;a&gt;\n&lt;a href='https:&sol;&sol;www.google.com' target='_blank'&gt;新分頁開啟GOOGLE&lt;&sol;a&gt;</code></pre></div><hr /><h1 class='chinese'>屬性</h1><div class='tablebox'><table><tr><th style='width:20%'>屬性</th><th style='width:20%'>值</th><th>描述</th></tr><tr><td>href</td><td>URL</td><td>超連結網址</td></tr><tr><td>target</td><td>_blank</td><td>開新分頁</td></tr></table></div>";
htmlArr[8]="<h1 class='chinese-h'>列表</h1><hr /><h3 class='chinese-p'>文字前方會有小圖標，ul為一般列表，ol為有編號的列表</h3><div class='show'><ul><li>ul1</li><li>ul2</li><li>ul3</li></ul><ol type='a' start='5' style='font-family:none'><li>ol1</li><li>ol2</li><li>ol3</li></ol></div><hr /><h1 class='chinese'>程式碼</h1><div class='coding'><pre><code class='html'>&lt;ul&gt;\n    &lt;li&gt;ul1&lt;&sol;li&gt;\n    &lt;li&gt;ul2&lt;&sol;li&gt;\n    &lt;li&gt;ul3&lt;&sol;li&gt;\n&lt;&sol;ul&gt;\n&lt;ol type='a' start='5'&gt;\n    &lt;li&gt;ol1&lt;&sol;li&gt;\n    &lt;li&gt;ol2&lt;&sol;li&gt;\n    &lt;li&gt;ol3&lt;&sol;li&gt;\n&lt;&sol;ol&gt;</code></pre></div><hr /><h1 class='chinese'>屬性</h1><div class='tablebox'><table><tr><th style='width:20%'>屬性</th><th style='width:20%'>值</th><th>描述</th></tr><tr><td>type</td><td>1,a,A,i,I</td><td>ol的列表開頭的種類</td></tr><tr><td>start</td><td>數字</td><td>ol列表開頭從第幾開始</td></tr></table></div>";
htmlArr[9]='<h1 class=\'chinese-h\'>表格</h1>'+
'<hr />'+
'<h3 class=\'chinese-p\'>使用table建立基礎的html表格</h3>'+
'<div class=\'show\'>'+
'    <table width="300" height="200" border="1" cellspacing="0" align="left" bordercolor="red">'+
'        <tr align="center">'+
'            <td>1</td>'+
'            <td>2</td>'+
'            <td>3</td>'+
'            <td>4</td>'+
'        </tr>'+
'        <tr valign="bottom">'+
'            <td>1</td>'+
'            <td>2</td>'+
'            <td>3</td>'+
'            <td>4</td>'+
'        </tr>'+
'        <tr>'+
'            <td>1</td>'+
'            <td align=\'center\' valign=\'top\'>2</td>'+
'            <td>3</td>'+
'            <td>4</td>'+
'        </tr>'+
'    </table>'+
'</div>'+
'<hr />'+
'<h1 class=\'chinese\'>程式碼</h1>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'html\'>&lt;table&nbsp;width=&quot;300&quot;&nbsp;height=&quot;200&quot;&nbsp;border=&quot;1&quot;&nbsp;cellspacing=&quot;0&quot;&nbsp;align=&quot;left&quot;&nbsp;bordercolor=&quot;red&quot;&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&nbsp;align=&quot;center&quot;&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;1&lt;/td&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;2&lt;/td&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;3&lt;/td&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;4&lt;/td&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&nbsp;valign=&quot;bottom&quot;&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;1&lt;/td&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;2&lt;/td&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;3&lt;/td&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;4&lt;/td&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;1&lt;/td&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&nbsp;align=&#39;center&#39;&nbsp;valign=&#39;top&#39;&gt;2&lt;/td&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;3&lt;/td&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;4&lt;/td&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;\n &lt;/table&gt;</code></pre>'+
'</div>'+
'<hr />'+
'<h1 class=\'chinese\'>Table tags</h1>'+
'<div class=\'tablebox\'>'+
'    <table>'+
'        <tr>'+
'            <th style=\'width:20%\'>表格標籤</th>'+
'            <th>描述</th>'+
'        </tr>'+
'        <tr>'+
'            <td>table</td>'+
'            <td>設置表格</td>'+
'        </tr>'+
'        <tr>'+
'            <td>tr</td>'+
'            <td>設置表格行</td>'+
'        </tr>'+
'        <tr>'+
'            <td>th</td>'+
'            <td>設置表格標題樣式</td>'+
'        </tr>'+
'        <tr>'+
'            <td>td</td>'+
'            <td>設置表格內容樣式</td>'+
'        </tr>'+
'        <tr>'+
'            <td>caption</td>'+
'            <td>設置表格名稱</td>'+
'        </tr>'+
'    </table>'+
'</div>'+
'<hr />'+
'<h1 class=\'chinese\'>屬性</h1>'+
'<div class=\'tablebox\'>'+
'    <table>'+
'        <tr>'+
'            <th style=\'width:20%\'>屬性</th>'+
'            <th>值</th>'+
'            <th>描述</th>'+
'        </tr>'+
'        <tr>'+
'            <td>width</td>'+
'            <td>px<br />%</td>'+
'            <td>設置寬度</td>'+
'        </tr>'+
'        <tr>'+
'            <td>border</td>'+
'            <td>px<br />%</td>'+
'            <td>設置邊框大小</td>'+
'        </tr>'+
'        <tr>'+
'            <td>bordercolor</td>'+
'            <td>color</td>'+
'            <td>設置邊框顏色</td>'+
'        </tr>'+
'        <tr>'+
'            <td>cellspacing</td>'+
'            <td>px<br />%</td>'+
'            <td>設置單元格間距</td>'+
'        </tr>'+
'        <tr>'+
'            <td>align</td>'+
'            <td>left<br />center<br />right</td>'+
'            <td>水平對齊方式</td>'+
'        </tr>'+
'        <tr>'+
'            <td>valign</td>'+
'            <td>top<br />middle<br />bottom</td>'+
'            <td>垂直對齊方式</td>'+
'        </tr>'+
'    </table>'+
'</div>'+
'<hr /><br />'+
'<h1 class=\'chinese-h\'>合併單元格</h1>'+
'<div class=\'show\'>'+
'    <table width="300" height="200" border="1" cellspacing="0" bordercolor="red">'+
'        <tr>'+
'            <td colspan="2">1</td>'+
'            <td>2</td>'+
'            <td>3</td>'+
'        </tr>'+
'        <tr>'+
'            <td>1</td>'+
'            <td rowspan="2">2</td>'+
'            <td>3</td>'+
'            <td>4</td>'+
'        </tr>'+
'        <tr>'+
'            <td>1</td>'+
'            <td>2</td>'+
'            <td>3</td>'+
'        </tr>'+
'    </table>'+
'</div>'+
'<hr />'+
'<h1 class=\'chinese\'>程式碼</h1>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'html\'>&lt;table&nbsp;width=&quot;300&quot;&nbsp;height=&quot;200&quot;&nbsp;border=&quot;1&quot;&nbsp;cellspacing=&quot;0&quot;&nbsp;bordercolor=&quot;red&quot;&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&nbsp;colspan=&quot;2&quot;&gt;1&lt;/td&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;2&lt;/td&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;3&lt;/td&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;1&lt;/td&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&nbsp;rowspan=&quot;2&quot;&gt;2&lt;/td&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;3&lt;/td&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;4&lt;/td&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;1&lt;/td&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;2&lt;/td&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;3&lt;/td&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;\n &lt;/table&gt;</code></pre>'+
'</div>'+
'<hr />'+
'<h1 class=\'chinese\'>屬性</h1>'+
'<div class=\'tablebox\'>'+
'    <table>'+
'        <tr>'+
'            <th style=\'width:20%\'>屬性</th>'+
'            <th>值</th>'+
'            <th>描述</th>'+
'        </tr>'+
'        <tr>'+
'            <td>colspan</td>'+
'            <td>num</td>'+
'            <td>合併水平單元格</td>'+
'        </tr>'+
'        <tr>'+
'            <td>rowspan</td>'+
'            <td>num</td>'+
'            <td>合併垂直單元格</td>'+
'        </tr>'+
'    </table>'+
'</div>';
htmlArr[10]='<h1 class=\'chinese-h\'>表單</h1>'+
'<hr />'+
'<h3 class=\'chinese-p\'>表單 form 內的 tags 非常多種，這裡只介紹 form 的基本屬性</h3>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'html\'>&lt;form&nbsp;name=&quot;test&quot;&nbsp;method=&quot;get&quot;&nbsp;action=&quot;https://www.google.com&quot;&gt;</code></pre>'+
'</div>'+
'<hr />'+
'<h1 class=\'chinese\'>屬性</h1>'+
'<div class=\'tablebox\'>'+
'    <table>'+
'        <tr>'+
'            <th style=\'width:20%\'>屬性</th>'+
'            <th>值</th>'+
'            <th>描述</th>'+
'        </tr>'+
'        <tr>'+
'            <td>name</td>'+
'            <td>string</td>'+
'            <td>表單域名稱</td>'+
'        </tr>'+
'        <tr>'+
'            <td>method</td>'+
'            <td>get<br />post</td>'+
'            <td>請求方式</td>'+
'        </tr>'+
'        <tr>'+
'            <td>action</td>'+
'            <td>URL</td>'+
'            <td>提交URL</td>'+
'        </tr>'+
'    </table>'+
'</div>';
htmlArr[11]='<h1 class=\'chinese-h\'>輸入框</h1>'+
'<hr />'+
'<h3 class=\'chinese-p\'>input的基本用法，讓使用者輸入內容</h3>'+
'<div class=\'atext\'>'+
'    <a href="http://www.w3school.com.cn/tags/tag_input.asp" target="_blank">點擊查看詳細input屬性</a>'+
'    </div>'+
'<div class=\'show\'>'+
'    <input type="text" placeholder="請輸入帳號" value="帳號ID" />'+
'    <br/>'+
'    <input type="password" placeholder="請輸入密碼" />'+
'</div>'+
'<hr/>'+
'<h1 class=\'chinese\'>程式碼</h1>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'html\'>&lt;input&nbsp;type=&quot;text&quot;&nbsp;placeholder=&quot;請輸入帳號&quot;&nbsp;value=&quot;帳號ID&quot;&nbsp;/&gt;\n&lt;input&nbsp;type=&quot;password&quot;&nbsp;placeholder=&quot;請輸入密碼&quot;&nbsp;/&gt;</code></pre>'+
'</div>'+
'<hr />'+
'<h1 class=\'chinese\'>屬性</h1>'+
'<div class=\'tablebox\'>'+
'    <table>'+
'        <tr>'+
'            <th style=\'width:20%\'>屬性</th>'+
'            <th>值</th>'+
'            <th>描述</th>'+
'        </tr>'+
'        <tr>'+
'            <td>type</td>'+
'            <td>text<br/>password</td>'+
'            <td>設定input的種類</td>'+
'        </tr>'+
'        <tr>'+
'            <td>placeholder</td>'+
'            <td>string</td>'+
'            <td>設定輸入框提示訊息</td>'+
'        </tr>'+
'        <tr>'+
'            <td>value</td>'+
'            <td>string</td>'+
'            <td>設定輸入框內的值</td>'+
'        </tr>'+
'    </table>'+
'</div>';
htmlArr[12]='<h1 class=\'chinese-h\'>圓形單選框</h1>'+
'<hr />'+
'<h3 class=\'chinese-p\'>input預設的圓形單選框，一次只能選一個</h3>'+
'<div class=\'show\'>'+
'    <input type="radio" name="sex" checked="checked" />男'+
'    <input type="radio" name="sex" />女'+
'    <input type="radio" name="sex" />中性'+
'</div>'+
'<hr />'+
'<h1 class=\'chinese\'>程式碼</h1>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'html\'>&lt;input&nbsp;type=&quot;radio&quot;&nbsp;name=&quot;sex&quot;&nbsp;checked=&quot;checked&quot;&nbsp;/&gt;男\n&lt;input&nbsp;type=&quot;radio&quot;&nbsp;name=&quot;sex&quot;&nbsp;/&gt;女\n&lt;input&nbsp;type=&quot;radio&quot;&nbsp;name=&quot;sex&quot;&nbsp;/&gt;中性</code></pre>'+
'</div>'+
'<hr />'+
'<h1 class=\'chinese\'>屬性</h1>'+
'<div class=\'tablebox\'>'+
'    <table>'+
'        <tr>'+
'            <th style=\'width:20%\'>屬性</th>'+
'            <th>值</th>'+
'            <th>描述</th>'+
'        </tr>'+
'        <tr>'+
'            <td>type</td>'+
'            <td>radio</td>'+
'            <td>設定input的種類</td>'+
'        </tr>'+
'        <tr>'+
'            <td>name</td>'+
'            <td>string</td>'+
'            <td>設定input的名稱，提交時會用到</td>'+
'        </tr>'+
'        <tr>'+
'            <td>checked</td>'+
'            <td>string</td>'+
'            <td>設定是否選取</td>'+
'        </tr>'+
'    </table>'+
'</div>';
htmlArr[13]='<h1 class=\'chinese-h\'>方形複選框</h1>'+
'<hr />'+
'<h3 class=\'chinese-p\'>input預設的方形複選框，一次可以選多個</h3>'+
'<div class=\'show\'>'+
'    <input type="checkbox" name="" checked="checked" />牛肉麵'+
'    <input type="checkbox" name="sex" />肉圓'+
'    <input type="checkbox" name="sex" />滷肉飯'+
'</div>'+
'<hr />'+
'<h1 class=\'chinese\'>程式碼</h1>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'html\'>&lt;input&nbsp;type=&quot;checkbox&quot;&nbsp;name=&quot;&quot;&nbsp;checked=&quot;checked&quot;&nbsp;/&gt;牛肉麵\n&lt;input&nbsp;type=&quot;checkbox&quot;&nbsp;name=&quot;sex&quot;&nbsp;/&gt;肉圓\n&lt;input&nbsp;type=&quot;checkbox&quot;&nbsp;name=&quot;sex&quot;&nbsp;/&gt;滷肉飯</code></pre>'+
'</div>'+
'<hr />'+
'<h1 class=\'chinese\'>屬性</h1>'+
'<div class=\'tablebox\'>'+
'    <table>'+
'        <tr>'+
'            <th style=\'width:20%\'>屬性</th>'+
'            <th>值</th>'+
'            <th>描述</th>'+
'        </tr>'+
'        <tr>'+
'            <td>type</td>'+
'            <td>checkbox</td>'+
'            <td>設定input的種類</td>'+
'        </tr>'+
'        <tr>'+
'            <td>name</td>'+
'            <td>string</td>'+
'            <td>設定input的名稱，提交時會用到</td>'+
'        </tr>'+
'        <tr>'+
'            <td>checked</td>'+
'            <td>string</td>'+
'            <td>設定是否選取</td>'+
'        </tr>'+
'    </table>'+
'</div>';
htmlArr[14]='<h1 class=\'chinese-h\'>下拉菜單</h1>'+
'<hr />'+
'<h3 class=\'chinese-p\'>可以將多個項目合成一列，並提供選取功能</h3>'+
'<div class=\'show\'>'+
'    <select>'+
'        <option>選單1</option>'+
'        <option>選單2</option>'+
'        <option>選單3</option>'+
'    </select>'+
'</div>'+
'<hr />'+
'<h1 class=\'chinese\'>程式碼</h1>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'html\'> &lt;select&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&lt;option&gt;選單1&lt;/option&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&lt;option&gt;選單2&lt;/option&gt;\n &nbsp;&nbsp;&nbsp;&nbsp;&lt;option&gt;選單3&lt;/option&gt;\n &lt;/select&gt;</code></pre>'+
'</div>';
htmlArr[15]='<h1 class=\'chinese-h\'>按鈕</h1>'+
'<hr />'+
'<h3 class=\'chinese-p\'>button 為一般按鈕，submit 按鈕點擊時會將表單中 name 的數值傳送到表單屬性中 action 的網址</h3>'+
'<div class=\'show\'>'+
'    <input type="button" value="button" />'+
'    <input type="submit" value="submit" />'+
'</div>'+
'<hr />'+
'<h1 class=\'chinese\'>程式碼</h1>'+
'<div class=\'coding\'>'+
'    <pre><code class=\'html\'>&lt;input&nbsp;type=&quot;button&quot;&nbsp;value=&quot;button&quot;&nbsp;/&gt;\n&lt;input&nbsp;type=&quot;submit&quot;&nbsp;value=&quot;submit&quot;&nbsp;/&gt;</code></pre>'+
'</div>';
htmlArr[16]="<h1 class='chinese-h'>圖片</h1><hr /><h3 class='chinese-p'>img標籤可以連接其他網頁的圖片，或連結自己內部網站的圖片</h3><div class='show'><img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' /></div><hr /><h1 class='chinese'>程式碼</h1><div class='coding'><pre><code class='html'>&lt;img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'/&gt;</code></pre></div><hr /><h1 class='chinese'>屬性</h1><div class='tablebox'><table><tr><th style='width:20%'>屬性</th><th style='width:20%'>值</th><th>描述</th></tr><tr><td>src</td><td>URL</td><td>設置圖片的來源</td></tr><tr><td>width</td><td>px<br />%</td><td>設置圖像的寬度</td></tr><tr><td>height</td><td>px<br />%</td><td>設置圖像的高度</td></tr></table></div>";