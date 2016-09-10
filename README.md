# verticalScroller.js

verticalScroller.js is a 1 KB Javascript file based on Jquery which is used to scroll your content smoothly and automatically.


##How To use verticalScroller.js

It is very easy to install, just copy and paste the verticalScroller.js in your js root folder and then initialize its path
in your html file. It's better to initialize it in head tag.
```
<head>
 <script src="path/to/verticalScroller.js"></script>
</head>
```
##### Dependency : It depends on jquery. So initialize jquery before verticalScroller.js

#General Notes

##Initialize
With jQuery

Example use:
```
$('element').scroller();
```
Note: element can be id or class or any html tag

With vanilla JavaScript

Example use:
```
var scroll = new Scroller('element');
```
Note: element can be id or class or any html tag

Note: For id-
```
var scroll = new Scroller('#id');
```

Note: For class-
```
var scroll = new Scroller('.class');
```
<!-- ##Default options
```

``` -->
<!-- ##Add your options
```

``` -->
#Example
for a div tag having id named "id-1"
```
<div id="id-1"></div>
```
you can initialize it like this
```
$("#id-1").scroller();
```
OR
```
var scroll = new Scroller('#id-1');
```

Run this script in your browser...
Enjoy Cheers !!


