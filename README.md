자바스크립트 모음
=============

> Sangria Javascript Library

---------------------------------------

### 목록
> 체크박스 전체 선택 및 해제   
> How to check all checkboxes using javascript
> 
> 두번째 기능

---------------------------------------

### 체크박스 전체 선택 및 해제   
#### How to check all checkboxes using javascript

```html
<label><input type="checkbox" class="all_check">전체</label>
<label><input type="checkbox" class="check_list" value="a">a</label>
<label><input type="checkbox" class="check_list" value="b">b</label>
<label><input type="checkbox" class="check_list" value="c">c</label>
```

```javascript
let sangria = new SangriaJavascriptLibrary();
sangria.checkBoxToggleEvent('.all_check', '.check_list');
```

---------------------------------------