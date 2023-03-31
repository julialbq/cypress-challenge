describe("When deleting entry", () => {
  it("Deletes entry successfully", () => {
    cy.visit("http://localhost:3000/");

    const label = "Groceries";
    const amount = "100.23";
    const date = "2020-01-01";

    cy.FormEntries(label, amount, date);

    cy.getByTestId("DeleteEntryButton").click();

    cy.getByTestId("DashboardEntries").should("be.empty");
  });

  it("Deletes entry successfully by keyboard shortcut", () => {
    cy.visit("http://localhost:3000/");

    const label = "Groceries";
    const amount = "100.23";
    const date = "2020-01-01";

    cy.FormEntries(label, amount, date);

    const labelEdited = "Cat food";
    const amountEdited = "50.90";
    const dateEdited = "2022-02-02";

    cy.EditFormEntries(labelEdited, amountEdited, dateEdited);

    cy.get("body").trigger("keydown", { key: "Delete" });

    cy.getByTestId("DashboardEntries").should("be.empty");
  });

  it("shows notification to inform entry deletion", () => {
    cy.visit("http://localhost:3000/");
    const label = "Groceries";
    const amount = "100.23";
    const date = "2020-01-01";

    cy.FormEntries(label, amount, date);

    cy.getByTestId("DeleteEntryButton").click();

    cy.getByTestId("Notification").contains("Entry deleted!");
  });
});
