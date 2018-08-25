module.exports = (title, body, scripts) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>${title}</title>
      <style>
    #page-container {
      margin: 0;
      padding: 0;
      border: 0;
    }

    #banner {
      width: 100%;
      padding-bottom: 15px
    }

    #wrapper {
      padding: 8px;
      marging: 0;
      border: 0;
    }

    #photo-gallery {
      display: inline-block;
      width: 49%;
      vertical-align: top;
    }

    #product-info {
      width: 49%;
      display: inline-block;
    }
  </style>
    </head>
    <body id="page-container">
    <div id="wrapper">
    ${body}
    </div>
    </body>
    ${scripts}
  </html>
`;