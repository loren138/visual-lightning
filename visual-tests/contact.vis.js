Feature('Contact Form');

Scenario('Initial Form', (I) => {
    const imageName = "contact-form.png";
    I.amOnPage("/contact");
    // Make sure the page has loaded
    I.waitForElement("#sendBtn");

    I.saveScreenshot(imageName);
    I.seeVisualDiff(imageName, { tolerance: 2, prepareBaseImage: false });
});

Scenario('Empty Form Errors', (I) => {
    const imageName = "contact-form-invalid.png";
    I.amOnPage("/contact");
    // Make sure the page has loaded
    I.waitForElement("#sendBtn");
    I.click("#sendBtn");
    // Make sure at least one error message has loaded
    I.waitForElement(".form-group.has-feedback.has-error");
    I.waitForText("Please supply your first name");
    I.saveScreenshot(imageName);
    I.seeVisualDiff(imageName, { tolerance: 2, prepareBaseImage: false });
});
