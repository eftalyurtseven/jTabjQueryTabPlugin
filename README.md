# jQuery Tab Plugin With Animations and AJAX
You can use;
1. jQuery UI Animations
2. jQuery Animations

### Basic HTML Template
```html
        <div id="tabContainer">

            <div class="tabTitle">
                <ul>
                    <li><a href="#">First Section</a></li>
                    <li><a href="#">Second Section</a></li>
                    <li><a href="#">Third Section</a></li>
                    <li><a href="#">Fourth Section</a></li>
                    <div class="clearfix"></div>
                </ul>
            </div>

            <div id="tabContents">
                <div class="tabContent">
                    First Section
                </div>

                <div class="tabContent">
                    Second Section
                </div>

                <div class="tabContent">
                    Third Section [ AJAX ]
                </div>

                <div class="tabContent">
                    Fourth Section
                </div>

                <div class="clearfix"></div>
            </div>

        </div>
```

### Basic Usage
```javascript
  $("#tabContainer").jTab({
      jTab: '.tabTitle ul', 
      jTabElem: 'li',
      jActiveClass: 'active',
      jTabContent: '.tabContent'
  });
```
### All Options
```javascript
  $("#tabContainer").jTab({
        jTab: 'ul',
        jTabElem: 'li a',
        jClosestElem: '',
        jActiveClass: 'active',
        jActiveElem: 0,
        jTabContent: '.tabContent',
        jTabEvent: 'click',
        jUI: false,
        jUIEffect: '',
        jAnimation: 'fade',
        jAnimationDuration: 300,
  });
```
### jQuery UI Effect Usage
You can use jQuery UI Effects, jUI set to TRUE and choise your effect!
```javascript
  $("#tabContainer").jTab({
      jTab: '.tabTitle ul', 
      jTabElem: 'li',
      jActiveClass: 'active',
      jTabContent: '.tabContent',
      jUI: true,
      jUIEffect: 'slide', // bounce, shake etc.
      jAnimationDuration: 200
  });
```
### Upload the data with AJAX!
You can use AJAX load. Change HTML Template;
Set li attribute data-ajax="true" and fill the ajax data!
* Ajax Type: post/get
* Ajax URI: someurl.html / someurl.php etc.
* Loaded: false - default
* Ajax Data: Send data from file

```html
        <div id="tabContainer">

            <div class="tabTitle">
                <ul>
                    <li><a href="#">First Section</a></li>
                    <li><a href="#">Second Section</a></li>
                    <li data-ajax="true" data-ajaxType="post" data-ajaxURI="ajax.php" data-loaded="false" data-ajaxData="data=data"><a href="#">Third Section [ AJAX ]</a></li>
                    <li><a href="#">Fourth Section</a></li>
                    <div class="clearfix"></div>
                </ul>
            </div>

            <div id="tabContents">
                <div class="tabContent">
                    First Section
                </div>

                <div class="tabContent">
                    Second Section
                </div>

                <div class="tabContent">
                    Third Section [ AJAX ]
                </div>

                <div class="tabContent">
                    Fourth Section
                </div>

                <div class="clearfix"></div>
            </div>

        </div>
```
You can use with jTab basic usage!

