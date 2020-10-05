# HTMLContentViewer


HTMLContentViewer is a small JavaScript utility library that opens a new browser window with provided html content and optional print and close buttons. It can be used to print output from rich text editors such as Quill.js, for example.

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
HTMLContentViewer.showHTMLContentInNewWindow("<p>Your HTML content</p>", "Title for the new window");
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
* The content is injected inside the html tag of the new window as is meaning the library will not prevent JavaScript injection attacks, for example. Therefore **you should sanitize your HTML content before passing it to HTMLContentViewer**.
* For CSS styling to work you should use inline styles for your content. For QuillJS this can be done by registering your styles as descriped here https://github.com/quilljs/quill/issues/1451#issuecomment-523559508.

### License
[MIT](https://github.com/Ville-/html-content-viewer-js/blob/main/LICENSE)

### Acknowledgements
* Button styling provided by https://www.bestcssbuttongenerator.com




