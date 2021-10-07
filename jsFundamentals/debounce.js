/**
 * In JavaScript a debouce function makes sure that your code is only
 * triggered once per user input . Search box suggestions, tex-filed auto-saves,
 * and eliminating double-button clicks are all use cases for debounce;
 *
 * Let's say you want to show suggestions for a search query, but only after a visitor
 * has finished typing.
 */

function debounce(func, timeout = 300) {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
};

function saveInput(){
  console.log('Saving data');
}

const processChange = debounce(() => saveInput());
processChange()