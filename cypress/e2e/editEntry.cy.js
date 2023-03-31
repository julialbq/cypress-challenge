const { parseISO, format } = require("date-fns");

describe("When editing entry", () => {
  it("edits entry successfully", () => {
    cy.visit("http://localhost:3000/");
    const label = "Groceries";
    const amount = "100.23";
    const date = "2020-01-01";

    cy.FormEntries(label, amount, date);

    const labelEdited = "Cat food";
    const amountEdited = "50.90";
    const dateEdited = "2022-02-02";

    cy.EditFormEntries(labelEdited, amountEdited, dateEdited);

    cy.getByTestId("SaveButton").click();

    cy.getByTestId("DashboardEntry")
      .findByTestId("DashboardEntryLabel")
      .should("have.text", labelEdited);
    cy.getByTestId("DashboardEntry")
      .findByTestId("DashboardEntryAmount")
      .should("contain.text", amountEdited);
    cy.getByTestId("DashboardEntry")
      .findByTestId("DashboardEntryDate")
      .should("have.text", format(parseISO(dateEdited, "yyyy-MM-dd"), "M/d/yyyy"));
  });

  it("sends edited entry successfully by keyboard shortcut", () => {
    cy.visit("http://localhost:3000/");

    const label = "Groceries";
    const amount = "100.23";
    const date = "2020-01-01";

    cy.FormEntries(label, amount, date);

    const labelEdited = "Cat food";
    const amountEdited = "50.90";
    const dateEdited = "2022-02-02";

    cy.EditFormEntries(labelEdited, amountEdited, dateEdited);

    cy.get("body").trigger("keydown", { key: "Enter" });

    cy.getByTestId("DashboardEntry")
      .findByTestId("DashboardEntryLabel")
      .should("have.text", labelEdited);
    cy.getByTestId("DashboardEntry")
      .findByTestId("DashboardEntryAmount")
      .should("contain.text", amountEdited);
    cy.getByTestId("DashboardEntry")
      .findByTestId("DashboardEntryDate")
      .should("have.text", format(parseISO(dateEdited, "yyyy-MM-dd"), "M/d/yyyy"));
  });

  it("allows user to return to dashboard without editing", () => {
    cy.visit("http://localhost:3000/");

    const label = "Groceries";
    const amount = "100.23";
    const date = "2020-01-01";

    cy.FormEntries(label, amount, date);

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
