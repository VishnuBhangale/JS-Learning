btnCalculate.addEventListener("click", () => {
  const btnCalculate = document.querySelector("#btnCalculate");
  const getValue = document.querySelector("#txtValue");
  const discount = document.querySelector("#txtDiscount");
  const totalDiscount = getValue.value / discount.value;

  const elementPara = document.createElement("p");
  const textNodeSquare = document.createTextNode(
    `Total Discount Amount ${totalDiscount}`
  );
  elementPara.appendChild(textNodeSquare);
  const resultElement = document.querySelector(".result");
  resultElement.appendChild(elementPara);
});
