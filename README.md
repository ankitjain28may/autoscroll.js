# verticalScroller.js

>Vertical Scroller is a Jquery plugin which is used to auto-scroll your content smoothly .
It is less than 1KB when minified.


##How To use Vertical Scroller

It is very easy to install, just copy and paste the verticalScroller.js in your js root folder and then initialize its path
in your html file. It's better to initialize it in head tag.
```
<head>
 <script src="https://code.jquery.com/jquery-3.1.0.min.js" integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=" crossorigin="anonymous"></script>

 <script src="path/to/verticalScroller.js"></script>
</head>
```
*** Dependency : It depends on jquery. So initialize jquery before verticalScroller.js***

#General Notes

##Initialize
###With jQuery

```js
$('element').scroller();
```

###With vanilla JavaScript

```js
var scroll = new Scroller('{"element" : element }');
```

###With HTML
Add a `data-config` attribute to your element. Options can be set in JSON in the value.

``` html
<div class="scroller" id="id-1" data-config='{ "amount": 150, "delay": 1500 }'>
  <div class="item"></div>
  <div class="item"></div>
  ...
</div>
```
Note: element can be id or class or any html tag

##Default options
```
{"amount" : 100 , "delay" : 2000 } //2000ms and 100px
```

##Add your options
```
{"amount" : 200 , "delay" : 1500 }
```

#Example
for a div tag having id named "id-1"
```
<div id="id-1"></div>
```
you can initialize it like this
```
$("#id-1").scroller('{"amount" : 150, "delay" : 1500 }');
```
OR
```
var scroll = new Scroller('{"element" : "#id-1", "amount" : 150, "delay" : 1500 }');
```
OR

By using HTML
``` html
<div class="scroller" id="id-1" data-config='{ "amount": 150, "delay": 1500 }'>
  <div class="item"></div>
  <div class="item"></div>
  ...
</div>
```
#License
Copyright (c) 2016 Ankit Jain - Released under the MIT License

Run this script in your browser...
Enjoy Cheers !!


