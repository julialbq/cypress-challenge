describe("When deleting entry", () => {
  it("Deletes entry successfully", () => {
    cy.visit("http://localhost:3000/");

    cy.FormEntries();

    cy.getByTestId("DeleteEntryButton").click();

    cy.getByTestId("DashboardEntries").should("be.empty");
  });

  it.only("Deletes entry successfully by keyboard shortcut", () => {
    cy.visit("http://localhost:3000/");

    cy.FormEntries();

    cy.EditFormEntries();

    cy.get("body").trigger("keydown", { key: "Delete" });

    cy.getByTestId("DashboardEntries").should("be.empty");
  });
});
