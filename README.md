# jQuery Tab Plugin With Animations and AJAX
You can use;
1. jQuery UI Animations
2. jQuery Animations

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
