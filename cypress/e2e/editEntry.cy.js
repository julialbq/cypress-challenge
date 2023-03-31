const { parseISO, format } = require("date-fns");

describe("When editing entry", () => {
  it("edits entry successfully", () => {
    cy.visit("http://localhost:3000/");

    cy.FormEntries();

    const label = "Cat food";
    const amount = "50.90";
    const date = "2022-02-02";

    cy.EditFormEntries();

    cy.getByTestId("SaveButton").click();

    cy.getByTestId("DashboardEntry")
      .findByTestId("DashboardEntryLabel")
      .should("have.text", label);
    cy.getByTestId("DashboardEntry")
      .findByTestId("DashboardEntryAmount")
      .should("contain.text", amount);
    cy.getByTestId("DashboardEntry")
      .findByTestId("DashboardEntryDate")
      .should("have.text", format(parseISO(date, "yyyy-MM-dd"), "M/d/yyyy"));
  });

    const label = "Cat food";
    const amount = "50.90";
    const date = "2022-02-02";
    cy.getByTestId("EntryFormLabelInput").type('{selectall}{backspace}').type(label)
    cy.getByTestId("EntryFormAmountInput").type('{selectall}{backspace}').type(amount);
    cy.getByTestId("EntryFormDateInput").type(date);

    cy.getByTestId("SaveButton").click();

    cy.getByTestId("DashboardEntry")
      .findByTestId("DashboardEntryLabel")
      .should("have.text", label);
    cy.getByTestId("DashboardEntry")
      .findByTestId("DashboardEntryAmount")
      .should("contain.text", amount);
    cy.getByTestId("DashboardEntry")
      .findByTestId("DashboardEntryDate")
      .should("have.text", format(parseISO(date, "yyyy-MM-dd"), "M/d/yyyy"));
  })
})
