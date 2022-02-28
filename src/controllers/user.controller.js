import { db } from '../database/connection';

export async function getRestaurantPage(req, res) {

    var id = req.params['id'];

    const userRef = db.collection("users").doc(id);
    const user = await userRef.get();
    if (!doc.exists) {
        res.status(400).json({
            'error': 'No existe restaurante'
        });
    }

    const dishesRef = db.collection("users/" + user.id + "/dishes");
    const snapshot = await dishesRef.get();

    response = user.data();
    response.dishes = snapshot.docs;

    res.status(200).json(response);

}

export async function getFeaturedRestaurant(req, res) {

    const usersRef = db.collection("users");
    const snapshot = await usersRef.get();

    response = {};
    if (snapshot.size > 3) {
        response.users = getThreeUsers(snapshot.docs);
    } else {
        response.users = snapshot.docs;
    }

    res.status(200).json(response);

}

function getThreeUsers(users) {
    return [...lista]
        .sort(() => Math.random() > 0.5 ? 1 : -1)
        .slice(0, 3);
}