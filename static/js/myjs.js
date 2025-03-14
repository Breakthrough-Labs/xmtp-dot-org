window.onload = function () {
  const navItems = document.querySelectorAll(".menu__link");

  // Get the title of the current page
  const pageTitle = document.title;

  if (
    pageTitle === "Quickstart" ||
    pageTitle === "Local-first cache" ||
    pageTitle === "Content Types" ||
    pageTitle === "Marketing" ||
    pageTitle === "Interactive tutorial"
  ) {
    // Convert the page title to a suitable CSS class name
    const pageTitleClass = pageTitle.toLowerCase().replace(/ /g, "-");

    // Add the class to the body
    console.log("special-page", pageTitleClass);
    document.body.classList.add("special-page");
    document.body.classList.add(pageTitleClass);
  }
  // Add class to nav items based on their text
  navItems.forEach((item) => {
    if (
      item.innerText === "Quickstart" ||
      item.innerText === "Quickstarts" ||
      item.innerText === "Reference docs" ||
      item.innerText === "Example apps" ||
      item.innerText === "Overview" ||
      item.innerText === "Content Types" ||
      item.innerText === "Custom Content Types" ||
      item.innerText === "Get featured" ||
      item.innerText === "Launch your app" ||
      item.innerText === "Debug & Test" ||
      item.innerText === "Spam Filters" ||
      item.innerText === "Custom content type" ||
      item.innerText === "Query addresses" ||
      item.innerText === "Scale" ||
      item.innerText === "Reply" ||
      item.innerText === "Attachment" ||
      item.innerText === "Reaction" ||
      item.innerText === "Read Receipt" ||
      item.innerText === "Custom Content-Type"
    ) {
      item.classList.add("new");
    }
  });
};
