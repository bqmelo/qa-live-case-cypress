describe('Product Sorting', () => {
  beforeEach(() => {
    cy.login('standard_user', 'secret_sauce');
  });

  it('should sort products by price low to high', () => {
    cy.get('[data-test="product-sort-container"]').select('lohi');

    cy.wait(300);

    let firstPrice;
    let lastPrice;

    cy.document().then((doc) => {
      const prices = doc.querySelectorAll('.inventory_item_price');
      firstPrice = parseFloat(prices[0].textContent.replace('$', ''));
      lastPrice = parseFloat(prices[prices.length - 1].textContent.replace('$', ''));
    });

    cy.then(() => {
      expect(firstPrice).to.be.lessThan(lastPrice);
    });
  });

  it('should sort products by name Z to A', () => {
    cy.get('[data-test="product-sort-container"]').select('za');

    cy.wait(300);

    let names = [];

    cy.document().then((doc) => {
      doc.querySelectorAll('.inventory_item_name').forEach((el) => {
        names.push(el.textContent);
      });
    });

    cy.then(() => {
      const sorted = [...names].sort().reverse();
      expect(names).to.deep.equal(sorted);
    });
  });
});
