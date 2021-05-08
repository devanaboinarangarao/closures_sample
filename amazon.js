function userAmazon() {

    const users = [
        {
            name : 'rangarao',
            password : '',
            active : true,
            cart : [],
            purchases : [],
        },
        {
            name : 'admin',
            password : '',
            active : true,
            cart : [],
            purchases : [],
        },
        {
            name : 'ranga',
            password : '',
            active : true,
            cart : [],
            purchases : [],
        }
    ];
    
    const authenticate = (uname, password) => {
        let uid = users.findIndex(u => u.name === uname && u.password === password);
        if(uid != -1) {

           

            let user = users[uid];
 
            const makeOrder = (name, cost) => {
                let obj = {
                    name,
                    cost: cost + ((cost / 100) * 5)
                };
                // console.log(this);
                user.cart.push(obj);
                console.log(`Mr ${uname},  your order is added to cart`);
                return user.cart;
            }
        
            const makePurchase = (name)  => {
                let index = user.cart.findIndex(item => item.name === name);
                user.purchases.push(user.cart[index]);
                user.cart.splice(index, 1);
                console.log(`Mr ${uname},  thank you for purchase`)
                return user.purchases;
            }

            const getCartItems = () => {
                return user.cart;
            }

            const getPurchases = () => {
                return user.purchases;
            }

            const getAllUsers = () => {
                return users;
            }
            
            let finalRes = {
                makeOrder,
                makePurchase,
                getCartItems ,
                getPurchases ,
            }

            if(uname === 'admin') {
                finalRes.getAllUsers = getAllUsers
            }
            return finalRes;
        } else {
            return 'Invalid Credentials';
        }
    }

    return {
        authenticate
    }


}

let user = userAmazon();


let ranUser = user.authenticate('rangarao', '');
console.log(ranUser);
ranUser.makeOrder('laptop', 30000);
ranUser.makePurchase('laptop');
console.log(ranUser.getCartItems());
console.log(ranUser.getPurchases());

let rUser = user.authenticate('ranga', '');
console.log(rUser);
rUser.makeOrder('laptop', 30000);
console.log(rUser.getCartItems());
console.log(rUser.getPurchases());



let adm = user.authenticate('admin', '');

console.log(adm.getAllUsers()[2].cart);

