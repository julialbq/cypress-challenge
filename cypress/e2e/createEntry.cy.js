import { format, parse, parseISO } from "date-fns";

describe("When creating entry", () => {
  it("Creates entry successfully", () => {
    cy.visit("http://localhost:3000/");

    // Go to new entry page
    cy.getByTestId("NewEntryButton").click();

    // Fill out form
    const label = "Groceries";
    const amount = "100.23";
    const date = "2020-01-01";
    cy.getByTestId("EntryFormLabelInput").type(label);
    cy.getByTestId("EntryFormAmountInput").type(amount);
    cy.getByTestId("EntryFormDateInput").type(date);

    cy.getByTestId("SaveButton").click();

    // Check that entry was created
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
});
