function dropDownSearchBar() {
    document.querySelector(".dropdown-search-bar-content").classList.toggle("show");
  }

  function dropDownMenu() {
    document.querySelector(".grid-menu-list-content").classList.toggle("show");
    document.querySelector(".category-link").classList.toggle("category-link-active");
  }

  function dropDownMenuMobile() {
    document.querySelector(".mobile-menu-dropdown").classList.toggle("show");
    document.querySelector(".menu-mobile-item").classList.toggle("menu-mobile-item-active");
  }
