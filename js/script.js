document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('student-info').innerHTML = `<p>Student ID: 200520350 <br> Name: Suraj Kumar Dhiman</p>`;

    document.getElementById('pizzaOrderForm').addEventListener('submit', function(e) {
        e.preventDefault();

        let size = document.getElementById('size').value;
        let toppings = getCheckedValues('toppings');
        let extras = getCheckedValues('extras');

        let pizza = new Pizza(size, toppings, extras);
        document.getElementById('pizzaDescription').innerHTML = pizza.getDescription();
    });
});

function getCheckedValues(name) {
    return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(el => el.value);
}

class Pizza {
    constructor(size, toppings, extras) {
        this.size = size;
        this.toppings = toppings;
        this.extras = extras;
    }

    getDescription() {
        let description = `You ordered a ${this.size} pizza with ${this.toppings.join(', ')}.`;
        if (this.extras.length) {
            description += ` Extras: ${this.extras.join(', ')}.`;
        }
        return description;
    }
}
