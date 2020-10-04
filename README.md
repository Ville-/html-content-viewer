# HTMLContentViewer


HTMLContentViewer is a small js utility library that opens a new browser window with provided html content and optional print and close buttons. It can be used to print output from rich text editors such as Quill.js, for example.

![HTMLContentViewer](https://i.ibb.co/HhRv1Dd/html-content-viewer.png)

### Installation
```sh
yarn add html-content-viewer
```

### Usage
```js
const HTMLContentViewer = require('html-content-viewer');

...

//Initialization
HTMLContentViewer.init();

...

//Open your HTML content in a new browser window
HTMLContentViewer.showHTMLContentInNewWindow("<p>Your HTML content</p>");
```

#### Optional settings


```js
var settings = {
  height: 800, //default: 600
  width: 500, //default: 400
  showPrintButton: true, //default: true
  showCloseButton: true, //default: true
  printButtonText: "Tulosta", //default: "Print"
  closeButtonText: "Sulje" //default: "Close"
}

HTMLContentViewer.init(settings);
```

### Things to consider
The content is injected inside the html tag of the new window as is meaning the library will not prevent JavaScript injection attacks, for example. Therefore **you should sanitize your HTML content before passing it to HTMLContentViewer** 
### Acknowledgements
* Button styling by https://www.bestcssbuttongenerator.com




