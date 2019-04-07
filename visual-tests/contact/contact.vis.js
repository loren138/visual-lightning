Feature('Contact Form');

const subfolder = "contact/";
const outputFolder = "output/";

Scenario('Initial Form', (I) => {
    const imageName = subfolder + "contact-form.png";
    I.amOnPage("/contact");
    // Make sure the page has loaded
    I.waitForElement("#sendBtn");

    I.saveScreenshot(outputFolder + imageName);
    I.seeVisualDiff(imageName, { tolerance: 2, prepareBaseImage: false });
});

Scenario('Empty Form Errors', (I) => {
    const imageName = subfolder + "contact-form-invalid.png";
    I.amOnPage("/contact");
    // Make sure the page has loaded
    I.waitForElement("#sendBtn");
    I.click("#sendBtn");
    // Make sure at least one error message has loaded
    I.waitForElement(".form-group.has-feedback.has-error");
    I.waitForText("Please supply your first name");
    I.saveScreenshot(outputFolder + imageName);
    I.seeVisualDiff(imageName, { tolerance: 2, prepareBaseImage: false });
});
