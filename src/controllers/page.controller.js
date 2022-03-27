import { db } from '../database/connection';

export async function getRestaurantPage(req, res) {
    var params = req.query;
    if (!params.user_url) {
        res.status(400).json({
            error: "No se proporcionan los datos suficientes para la búsqueda"
        });
        return;
    }

    const query = db.collection("users").where("user_url", "==", params.user_url);
    const users = await query.get();
    if (users.empty) {
        res.status(400).json({
            'error': 'No existe restaurante'
        });
        return;
    }

    let response = {};

    var id = users.docs[0].id;
    response.restaurant = Object.assign({}, { id }, users.docs[0].data());
    response.categories = [];

    const userRef = db.collection('users').doc(id);
    const collections = await userRef.listCollections();

    for (const collection of collections) {
        const catRef = db.collection("users/" + id + "/" + collection.id);
        const snapshot = await catRef.get();

        var dishes = [];
        snapshot.docs.forEach(doc => {
            dishes.push(Object.assign({}, { "id": doc.id, "cat": collection.id }, doc.data()));
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

export async function getRestaurantData(req, res) {
    var params = req.query;
    if (!params.user_url) {
        res.status(400).json({
            error: "No se proporcionan los datos suficientes para la búsqueda"
        });
        return;
    }

    const query = db.collection("users").where("user_url", "==", params.user_url);
    
    const users = await query.get();
    if (users.empty) {
        res.status(400).json({
            'error': 'No existe restaurante'
        });
        return;
    }

    let response = Object.assign({id:users.docs[0].id}, users.docs[0].data());

    res.status(200).json(response);
    return;
}

export async function updateRestaurantData(req, res){
    let page = req.body;

    const response = await db.collection('users')
        .doc(page.id).update(page);

    console.log('updated document with ID: ', page.id);
    res.status(200).json({ message: `updated document with ID: ${page.id}` });
}

export async function getExistsURL(req, res) {
    var params = req.query;
    if (!params.user_url) {
        res.status(400).json({
            error: "No se proporcionan los datos suficientes para la búsqueda"
        });
        return;
    }
    const query = db.collection("users").where("user_url", "==", params.user_url);
    const users = await query.get();
    if (users.empty) {
        res.status(200).json({ exists: false });
        return;
    }
    res.status(200).json({ exists: true });
    return;
}

function getThreeUsers(users) {
    return [...users]
        .sort(() => Math.random() > 0.5 ? 1 : -1)
        .slice(0, 3);
}