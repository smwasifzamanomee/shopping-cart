function handleProductChange(product, isIncrease) {
  const productInput = document.getElementById(product + "-count");
  const productCount = parseInt(productInput.value);
  let productNewCount = productCount;
  if (isIncrease == true) {
    productNewCount = productCount + 1;
  }
  if (isIncrease == false && productCount > 0) {
    productNewCount = productCount - 1;
  }
  productInput.value = productNewCount;
  let productTotal = 0;
  if (product == "phone") {
    productTotal = productNewCount * 1219;
  }
  if (product == "case") {
    productTotal = productNewCount * 59;
  }
  document.getElementById(product + "-total").innerText = "$" + productTotal;
  calculateTotal();
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-amount').innerText = totalPrice;
}

function getInputValue(product) {
  const productInput = document.getElementById(product + "-count");
  const productCount = parseInt(productInput.value);
  return productCount;
}

document.getElementById("phone-plus").addEventListener("click", function () {
    handleProductChange("phone", true);
    }
);

document.getElementById("phone-minus").addEventListener("click", function () {
    handleProductChange("phone", false);
    }
);

document.getElementById("case-plus").addEventListener("click", function () {
    handleProductChange("case", true);
    }
);

document.getElementById("case-minus").addEventListener("click", function () {
    handleProductChange("case", false);
    }
);





