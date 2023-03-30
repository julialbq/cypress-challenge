describe("When deleting entry", () => {
  it("Deletes entry successfully", () => {
    cy.visit("http://localhost:3000/");

    cy.FormEntries();

    cy.getByTestId("DeleteEntryButton").click();

    cy.getByTestId("DashboardEntries").should("be.empty");
  });

  it("Deletes entry successfully by keyboard shortcut", () => {
    cy.visit("http://localhost:3000/");

    cy.FormEntries();
    cy.wait(1)

    cy.get("body").type("{del}");

    cy.getByTestId("DashboardEntries").should("be.empty");
  });
});
