import { format, parseISO } from "date-fns";

describe("When creating entry", () => {
  it("Creates entry successfully", () => {
    cy.visit("http://localhost:3000/");

    const label = "Groceries";
    const amount = "100.23";
    const date = "2020-01-01";

    cy.FormEntries(label, amount, date);

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
  it("shows notification to inform entry creation", () => {
    cy.visit("http://localhost:3000/");

    const label = "Groceries";
    const amount = "100.23";
    const date = "2020-01-01";

    cy.FormEntries(label, amount, date);

    cy.getByTestId("Notification").contains("Entry created!");
  });
});
