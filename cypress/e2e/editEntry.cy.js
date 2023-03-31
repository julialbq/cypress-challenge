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

  it("sends edited entry successfully by keyboard shortcut", () => {
    cy.visit("http://localhost:3000/");

    cy.FormEntries();

    const label = "Cat food";
    const amount = "50.90";
    const date = "2022-02-02";

    cy.EditFormEntries();

    cy.get("body").trigger("keydown", { key: "Enter" });

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

  it("allows user to return to dashboard without editing", () => {
    cy.visit("http://localhost:3000/");

    cy.FormEntries();

    cy.getByTestId("EditEntryButton").click();

    cy.getByTestId("EntryFormLabelInput").type("{selectall}{backspace}");

    cy.get("body").trigger("keydown", { key: "Escape" });

    cy.getByTestId("DashboardEntries").should("have.length", 1);
    cy.getByTestId("DashboardEntry")
      .findByTestId("DashboardEntryLabel")
      .should("have.text", "Groceries");
  });

  it("shows notification to inform entry edition", () => {
    cy.visit("http://localhost:3000/");

    cy.FormEntries();

    cy.EditFormEntries();

    cy.getByTestId("SaveButton").click();

    cy.getByTestId("Notification").contains("Entry edited!");
  });
});
