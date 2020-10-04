var HTMLContentViewer = {
  init: function (settings) {
    settings = settings ? settings : {};

    this.settings = {
      height: settings.height ? settings.height : 600,
      width: settings.height ? settings.height : 400,
      showPrintButton: settings.showPrintButton || settings.showPrintButton == undefined ? true : false,
      showCloseButton: settings.showCloseButton || settings.showCloseButton == undefined ? true : false,
      printButtonText: settings.printButtonText ? settings.printButtonText : "Print",
      closeButtonText: settings.closeButtonText ? settings.closeButtonText : "Close"
    }

  },

  showHTMLContentInNewWindow: function (content, title = "") {
    if (!this.settings)
      throw new Error("Run HTMLContentViewer.init first");

    var printWindow = openWindow(this.settings.height, this.settings.width);

    printWindow.document.write('<html><head>');
    printWindow.document.write(getTitle(title));
    printWindow.document.write(getStyles());
    printWindow.document.write(getScript(this.settings.showPrintButton, this.settings.showCloseButton));
    printWindow.document.write('</head><body >');
    printWindow.document.write(
      getUIComponents(
        this.settings.showPrintButton,
        this.settings.showCloseButton,
        this.settings.printButtonText,
        this.settings.closeButtonText
      )
    );
    printWindow.document.write(content);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
  }
}

function getUIComponents(showPrintButton, showCloseButton, printButtonText, closeButtonText) {
  var ui = '<div class="no-print">';

  if (showPrintButton) {
    ui +=
      '<a href="#" class="html-content-viewer-btn" onclick="printContent()">' +
      printButtonText +
      '</a>';
  }

  if (showCloseButton) {
    ui +=
      '<a href="#" class="html-content-viewer-btn" onclick="closeWindow()">' +
      closeButtonText +
      '</a>';
  }

  ui += '<br></div>';

  return ui;
}

function getScript(showPrintButton, showCloseButton) {
  var script = '<script>';
  if (showPrintButton) {
    script += 'function printContent(){this.print();}';
  }

  if (showCloseButton) {
    script += 'function closeWindow(){this.close();}';
  }

  script += '</script>';

  return script;
}

function getTitle(title) {
  return '<title>' + title + '</title>';
}

function openWindow(height, width) {
  return window.open('', '', 'height=' + height + 'width=' + width);
}

function getStyles() {
  return (
    '<style>' +
    "\r\n.html-content-viewer-btn {\r\n\tmargin-left: 2em; -moz-box-shadow:inset 0px 1px 0px 0px #ffffff;\r\n\t-webkit-box-shadow:inset 0px 1px 0px 0px #ffffff;\r\n\tbox-shadow:inset 0px 1px 0px 0px #ffffff;\r\n\tbackground:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #f9f9f9), color-stop(1, #e9e9e9));\r\n\tbackground:-moz-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);\r\n\tbackground:-webkit-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);\r\n\tbackground:-o-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);\r\n\tbackground:-ms-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);\r\n\tbackground:linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);\r\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f9f9f9', endColorstr='#e9e9e9',GradientType=0);\r\n\tbackground-color:#f9f9f9;\r\n\t-webkit-border-radius:6px;\r\n\t-moz-border-radius:6px;\r\n\tborder-radius:6px;\r\n\tborder:1px solid #dcdcdc;\r\n\tdisplay:inline-block;\r\n\tcursor:pointer;\r\n\tcolor:#666666;\r\n\tfont-family:Arial;\r\n\tfont-size:15px;\r\n\tfont-weight:bold;\r\n\tpadding:6px 24px;\r\n\ttext-decoration:none;\r\n\ttext-shadow:0px 1px 0px #ffffff;\r\n}\r\n.html-content-viewer-btn:hover {\r\n\tbackground:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #e9e9e9), color-stop(1, #f9f9f9));\r\n\tbackground:-moz-linear-gradient(top, #e9e9e9 5%, #f9f9f9 100%);\r\n\tbackground:-webkit-linear-gradient(top, #e9e9e9 5%, #f9f9f9 100%);\r\n\tbackground:-o-linear-gradient(top, #e9e9e9 5%, #f9f9f9 100%);\r\n\tbackground:-ms-linear-gradient(top, #e9e9e9 5%, #f9f9f9 100%);\r\n\tbackground:linear-gradient(to bottom, #e9e9e9 5%, #f9f9f9 100%);\r\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#e9e9e9', endColorstr='#f9f9f9',GradientType=0);\r\n\tbackground-color:#e9e9e9;\r\n}\r\n.html-content-viewer-btn:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}\r\n\r\n        \r\n\r\n@media print\r\n{    \r\n    .no-print, .no-print *\r\n    {\r\n        display: none !important;\r\n    }\r\n}" +
    '</style>'
  );
}

module.exports = HTMLContentViewer;