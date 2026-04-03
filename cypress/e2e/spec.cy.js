describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("adds 5 + 3 and shows 8", () => {
    cy.get("#btn-clear").click()
    cy.get("#btn-5").click()
    cy.get("#btn-add").click()
    cy.get("#btn-3").click()
    cy.get("#btn-equals").click()
    cy.get("#display").should("have.value", "8")
  })

  it("subtracts 10 - 4 and shows 6", () => {
    cy.get("#btn-clear").click()
    cy.get("#btn-1").click()
    cy.get("#btn-0").click()
    cy.get("#btn-subtract").click()
    cy.get("#btn-4").click()
    cy.get("#btn-equals").click()
    cy.get("#display").should("have.value", "6")
  })

  it("multiplies 6 * 7 and shows 42", () => {
    cy.get("#btn-clear").click()
    cy.get("#btn-6").click()
    cy.get("#btn-multiply").click()
    cy.get("#btn-7").click()
    cy.get("#btn-equals").click()
    cy.get("#display").should("have.value", "42")
  })

  it("divides 15 / 3 and shows 5", () => {
    cy.get("#btn-clear").click()
    cy.get("#btn-1").click()
    cy.get("#btn-5").click()
    cy.get("#btn-divide").click()
    cy.get("#btn-3").click()
    cy.get("#btn-equals").click()
    cy.get("#display").should("have.value", "5")
  })
})