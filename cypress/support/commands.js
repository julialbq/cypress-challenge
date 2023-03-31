// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("getByTestId", (testId) =>
  cy.get(`[data-testid=${testId}]`)
);
Cypress.Commands.add(
  "findByTestId",
  {
    prevSubject: true,
  },
  (subject, testId) => subject.find(`[data-testid="${testId}"]`)
);
Cypress.Commands.add("FormEntries", () => {
  cy.getByTestId("NewEntryButton").click();

  cy.getByTestId("EntryFormLabelInput").type("Groceries");
  cy.getByTestId("EntryFormAmountInput").type("100.23");
  cy.getByTestId("EntryFormDateInput").type("2020-01-01");

  cy.getByTestId("SaveButton").click();
});
Cypress.Commands.add("EditFormEntries", () => {
  cy.getByTestId("EditEntryButton").click();
  
  cy.getByTestId("EntryFormLabelInput")
    .type("{selectall}{backspace}")
    .type("Cat food");
  cy.getByTestId("EntryFormAmountInput")
    .type("{selectall}{backspace}")
    .type("50.90");
  cy.getByTestId("EntryFormDateInput").type("2022-02-02");
});
