/* CODE BY: SEAN HULSE */
export default function () {
    $(document.body).on('click', '#bulk-product-to-cart', (event) => {
        event.preventDefault();

        const cartItems = JSON.stringify({
            "lineItems": [
                {
                    "quantity": 1,
                    "productId": 86,
                },
                {
                    "quantity": 1,
                    "productId": 93,
                    "optionSelections": [
                        {
                            "optionId": 111,
                            "optionValue": 8
                        },
                        {
                            "optionId": 112,
                            "optionValue": 95
                        }
                    ]
                },
                {
                    "quantity": 1,
                    "productId": 93,
                    "optionSelections": [
                        {
                            "optionId": 111,
                            "optionValue": 10
                        },
                        {
                            "optionId": 112,
                            "optionValue": 95
                        }
                    ]
                },
                {
                    "quantity": 1,
                    "productId": 93,
                    "optionSelections": [
                        {
                            "optionId": 111,
                            "optionValue": 13
                        },
                        {
                            "optionId": 112,
                            "optionValue": 95
                        }
                    ]
                }
            ]
        });

        fetch("/api/storefront/carts", {
            "Content-Type": "application/json",
            "method": "POST",
            "body": cartItems
        })
            .then(res => res.json())
            .then(() => window.location.replace("/cart.php"))
            .catch(error => {
                console.error(error);    
            })
    });   
}
/* END CODE BY: SEAN HULSE */
