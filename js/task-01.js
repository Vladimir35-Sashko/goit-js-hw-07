const listContainer = document.querySelectorAll(".item");
console.log(`В списке ${listContainer.length} категории.`);

const categoriesArray = [...listContainer]
  .map(
    categories => `Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);