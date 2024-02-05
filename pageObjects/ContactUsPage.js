// ContactUsPage.js
module.exports = {
  elements: {
    idContactDropdown: 'select[name="id_contact"]',
    emailInput: 'input[name="from"]',
    messageTextarea: 'textarea[name="message"]',
    submitButton: 'button[name="submitMessage"]',
    successMessage: '.alert-success',
    errorMessage: '.alert-danger',
    fileInput: 'input[type="file"]'
  },
  
    commands: {
      selectContactOption(optionValue) {
        const script = `document.querySelector('select[name="id_contact"]').value = '${optionValue}';`;
         this.api.execute(script);
         return this;
      },
      setEmail(email) {
        return this.setValue('@emailInput', email);
      },
      setMessage(message) {
        return this.setValue('@messageTextarea', message);
      },
      uploadAndSetFile(filePath) {
        return this.setValue('@fileInput', filePath);
      },
      submitAndVerify(type) {
        if (type === 'success') {
          return this.click('@submitButton')
            .waitForSuccessMessage();
        } else if (type === 'error') {
          return this.click('@submitButton')
            .waitForErrorMessage();
        } else {
          throw new Error('Invalid type provided for submitAndVerify command.');
        }
      },
      waitForSuccessMessage() {
        return this.waitForElementVisible('@successMessage', 10000, 'Success message not visible.');
      },
      waitForErrorMessage() {
        return this.waitForElementVisible('@errorMessage', 10000, 'Error message not visible.');
      }
    }
    
  
};
