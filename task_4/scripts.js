document.addEventListener("DOMContentLoaded", function() {
    let items = document.querySelector('.items'),
        itemsHtml = '';

    fetch('http://54.39.188.42/')
        .then(response => response.text())
        .then(responseText => window.atob(responseText))
        .then(decodeText => JSON.parse(decodeText))
        .then(result => {
            result.forEach((item) => {
                const {id, currency, image, price, sku, title, options} = item;
                const {gemstone_color, metal_color, metal_type, stone_shape} = options[0];

                const itemHTML =
                    `<div class="item">
                       <span># ${id}</span>
                       <span>${title}</span>
                       <span>${sku}</span>
                       <img src="${image}" alt="image">
                       <span class="options-title">product options:</span>
                       <ul class="options">
                           <li>Metal type: ${metal_type}</li>
                           <li>Metal color: ${metal_color}</li>
                           <li>Stone shape: ${stone_shape}</li>
                           <li>Gemstone color: ${gemstone_color}</li>
                       </ul>
                       <span class="price">${parseFloat(price).toFixed(2)} ${currency}</span>
                    </div>`;

                itemsHtml += itemHTML;
            });

            items.innerHTML = itemsHtml;
        });
});