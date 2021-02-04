export const focusElement = (el: HTMLElement) => {
  const tabindex = el.tabIndex;
  el.setAttribute("tabindex", "-1");
  el.focus();
  el.setAttribute("tabindex", tabindex.toString());
};
