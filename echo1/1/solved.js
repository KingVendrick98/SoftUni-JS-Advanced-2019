function solve() {
    let totalPrice = 0;
    document.querySelector("#add-new > button").addEventListener("click", addProduct);

    document.querySelector("#products > div > button").addEventListener("click", filter);

    function addProduct(e) {
        e.preventDefault();
        let name = document.querySelector("#add-new > input[type=text]:nth-child(2)").value;
        let quantity = Number(document.querySelector("#add-new > input[type=text]:nth-child(3)").value);
        let price = Number(document.querySelector("#add-new > input[type=text]:nth-child(4)").value);
        if (!name || Number.isNaN(quantity) || Number.isNaN(price)) {
            return;
        }
        let productsList = document.querySelector("#products > ul");
        let li = document.createElement("li");
        let spanName = document.createElement("span");
        spanName.textContent = `${name}`;
        let strongQuantity = document.createElement("strong");
        strongQuantity.textContent = `Available: ${quantity}`;
        let div = document.createElement("div");
        let strongPrice = document.createElement("strong");
        strongPrice.textContent = price.toFixed(2);
        let btn = document.createElement("button");
        btn.textContent = "Add to Client's List";
        btn.addEventListener("click", addToCart);
        productsList.appendChild(li);
        li.appendChild(spanName);
        li.appendChild(strongQuantity);
        li.appendChild(div);
        div.appendChild(strongPrice);
        div.appendChild(btn);

        function addToCart(e) {
            let myProducts = document.querySelector("#myProducts > ul");
            let li = document.createElement("li");
            li.textContent = name;
            let strong = document.createElement("strong");
            strong.textContent = price.toFixed(2);
            strongQuantity.textContent = `Available: ${--quantity}`;
            if (quantity === 0) {
                e.target.parentNode.parentNode.remove();
            }
            li.appendChild(strong);
            myProducts.appendChild(li);

            let totalPriveElem = document.querySelector("body > h1:nth-child(4)");
            totalPrice += price;
            totalPriveElem.textContent = `Total Price: ${totalPrice.toFixed(2)}`;
        }
        document.querySelector("#myProducts > button").addEventListener("click", buy);

        function buy(e) {
            let ul = document.querySelector("#myProducts > ul");
            while (ul.firstChild) ul.removeChild(ul.firstChild);
            let totalPriveElem = document.querySelector("body > h1:nth-child(4)");
            totalPrice = 0;
            totalPriveElem.textContent = `Total Price: ${totalPrice.toFixed(2)}`;
        }
    }

    function filter() {
        let ctriteria = document.querySelector("#filter").value;
        let ul = document.querySelector("#products > ul");
        let elements = document.querySelectorAll("#products > ul > li");
        let elemArr = Array.from(elements).map(x => {
            if (
                !x.children[0].textContent
                .toLowerCase()
                .includes(ctriteria.toLowerCase())
            ) {
                x.setAttribute("style", "display: none");
            }
        });
        console.log(elements);
        //  while (ul.firstChild) ul.removeChild(ul.firstChild);
        //  elemArr.forEach(x => ul.appendChild(x));
    }
}