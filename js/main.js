document.addEventListener("DOMContentLoaded", (e) => {
  e.stopPropagation();
  let burgerBtn = document.querySelector(".header-mob__burger");
  let crossBtn = document.querySelector(".header-mob__cross");
  let nav = document.querySelector(".header-mob__nav--cont");

  burgerBtn.addEventListener("click", (e) => {
    burgerBtn.classList.add("roate-full");
    nav.classList.remove("hidden");
    nav.classList.add("pop-up");
  });

  crossBtn.addEventListener("click", (e) => {
    nav.classList.add("hidden");
    nav.classList.remove("pop-up");
  });

  let allTabs = document.querySelectorAll(".tab");
  let allTabPanel = document.querySelectorAll(".tab_content");
  if (allTabs && allTabPanel) {
    let tabList = document.querySelector(".tablist");
    if (tabList) {
      tabList.addEventListener("click", (e) =>
      
        changeTab(e, allTabs, allTabPanel)
      );
    }
  }
});

//changes tab
function changeTab(e, allTabs, allTabPanel) {
    e.preventDefault();
  if (e.target.dataset.controls) {
    let target = e.target; //a element
    let targetLi = target.parentElement;

    let tabPanel = e.target.dataset.controls; //tavbpanel id

    //updating aria-selected attr value to false for all tabs
    allTabs.forEach((tab) => {
      tab.setAttribute("aria-selected", "false");
      tab.setAttribute("tabindex", -1);
    });

    let allLi = document.querySelectorAll('.tablist li');

    allLi.forEach(li => {
        li.classList.remove('tab-border');
    })
    //updating aria-selected, tabindex attr value and applying focus to selected tab
    target.setAttribute("aria-selected", "true");
    target.setAttribute("tabindex", 0);
    targetLi.classList.add('tab-border');
    target.focus();

    //updating  all tab panels to hidden
    allTabPanel.forEach((tabPanel) => {
      tabPanel.classList.add("hidden");
    });

    //removing hidden class from selected tab's controlled tab panel
    document.querySelector(`#${tabPanel}`).classList.remove("hidden");

  }
}
