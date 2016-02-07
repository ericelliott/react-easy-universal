export default ({ rootMarkup, initialState }) => {
  return `
    <!doctype html>
    <html>
      <head>
        <title>${ initialState.title }</title>
      </head>
      <body>
        <div id='root'>${ rootMarkup }</div>
        <script>
          window.BOOTSTRAP_CLIENT_STATE = ${JSON.stringify(initialState)}
        </script>
        <script src="/static/index.js"></script>
      </body>
    </html>
  `;
};
