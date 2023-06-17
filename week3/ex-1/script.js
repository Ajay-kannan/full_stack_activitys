function strength(string) {
    return `plus${string}`;
  }

  function exclusion(string) {
    return `un${string}`;
  }

  function emphase(string) {
    return `doubleplus${string}`;
  }
document.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const str = document.getElementById("input").value;
  document.getElementById("3").value = exclusion(str);
  document.getElementById("2").value = strength(str);
  document.getElementById("1").value = emphase(str);
});