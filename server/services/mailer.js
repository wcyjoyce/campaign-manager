const sendgrid = require("sendgrid");
const helper = sendgrid.mail;
const keys = require("../config/keys.js");

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();

    this.sendGridApi = sendgrid(keys.sendGridKey);
    this.from_email = new helper.Email("hello@campaigns-manager.com");
    this.subject = subject;
    this.body = new helper.Content("text/html", content); // content displayed in HTML format
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body); // add body as actual content in email (addContent function is part of helper)
    this.addClickTracking(); // track clicking
    this.addRecipients();
  };

  // map recipient array into individual emails (formatted into email addresses through email helper)
  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new helper.Email(email);
    });
  };

  addClickTracking() { // SendGrid configuration for click tracking
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);
    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  };

  addRecipients() {
    const personalize = new helper.Personalization();
    this.recipients.forEach(recipient => {
      personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
  };
};

module.exports = Mailer;
