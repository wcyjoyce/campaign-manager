const keys = require("../../config/keys.js");

module.exports = survey => {
  return `
    <html>
      <body>
        <div className="template">
          <h1>${survey.subject}</h1>
          <p>${survey.body}</p>
          <div className="feedback">
            <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>
            <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
