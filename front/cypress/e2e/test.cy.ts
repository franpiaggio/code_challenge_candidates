describe("Basic e2e test", () => {
  it("Verify title and first load", () => {
    cy.visit("http://localhost:5174/");
    cy.intercept("GET", "/candidates*", { fixture: "users.json" });
    cy.title().should(
      "include",
      "Emi | Recruiting Automation for the Frontline and the Future"
    );
    cy.contains("Anthony Warren");
    cy.contains("Rejected reason");
    cy.contains("Approve").click();
    cy.wait(1000); // This can be improved with the actual server ersponse
    cy.contains("Reject");
  });
});
