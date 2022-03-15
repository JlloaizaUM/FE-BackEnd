import { db } from '../database/connection';

export async function getRestaurantPage(req, res) {

    var path = req.params['path'];

    const query = db.collection("users").where("user_url", "==", path);
    const users = await query.get();
    if (users.empty) {
        res.status(400).json({
            'error': 'No existe restaurante'
        });
    }

    let response = {};

    response.restaurant = users.docs.at(0).data();
    response.categories = [];
    var id = users.docs.at(0).id;

    const userRef = db.collection('users').doc(id);
    const collections = await userRef.listCollections();

    for (const collection of collections) {
        const catRef = db.collection("users/" + id + "/" + collection.id);
        const snapshot = await catRef.get();

        var dishes = [];
        snapshot.docs.forEach(doc => {
            dishes.push(doc.data());
        });

        var cat = { name: "", dishes: [] };
        cat.name = collection.id;
        cat.dishes = dishes;

        response.categories.push(cat);


        /*
        response
        {
            restaurant: {
                name: frisby
                ...
            },
            categories: [
                {
                    name: Platos fuertes
                    dishes: [
                        name: Combo 1
                        url: ...
                        ...
                    ]
                },
                {
                    name: Postres
                    dishes: [
                        name: Helado
                        url: ...
                        ...
                    ]
                },
            ]
        }
        */
    }

    res.status(200).json(response);
    
}

export async function getFeaturedRestaurant(req, res) {

    const usersRef = db.collection("users").where("name", "!=", "admin");
    const snapshot = await usersRef.get();

    let response = {};
    response.users = [];
    snapshot.docs.forEach(doc => {
        response.users.push(doc.data());
    });

    if (snapshot.size > 3) {
        response.users = getThreeUsers(response.users);
    }

    res.status(200).json(response.users);

}

function getThreeUsers(users) {
    return [...users]
        .sort(() => Math.random() > 0.5 ? 1 : -1)
        .slice(0, 3);
}