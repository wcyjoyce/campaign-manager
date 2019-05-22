module.exports = survey => {
  return `
    <html>
      <body>
        <div className="template">
          <h1>I'd like your input!</h1>
          <p>${survey.body}</p>
          <div className="feedback">
            <a href="http://localhost:3000/">Yes</a>
            <a href="http://localhost:3000/">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
