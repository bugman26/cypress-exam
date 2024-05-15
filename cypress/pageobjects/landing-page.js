class LandingPage {
  logCategoriesAndActions() {
    let actions = {};

    // Find and iterate over each category
    cy.get('div.linkbox').each(($category) => {
      // Extract the category name
      const categoryName = $category.find('h1').text().trim();
      // Find and extract the action names within the category
      cy.xpath("//h1[text()='" + categoryName + "']/following-sibling::ul/li/a/h2").each(($action) => {
        // Extract the action name
        const actionName = $action.text().trim();
        // Check if the category exists in the actions object, if not, create it
        if (!actions[categoryName]) {
          actions[categoryName] = [];
        }
        // Push the action name into the respective category array
        actions[categoryName].push(actionName);
      });
    }).then(() => {
      // Log the actions in JSON format
      cy.log(JSON.stringify(actions, null, 2));
    });
  }

  visitTheURLOfActionsItem(actionItemText) {
    cy.contains(actionItemText).parent().find('a').invoke('attr', 'href').then(($url) => {
      cy.visit($url);
    })
  }

}

export default LandingPage;