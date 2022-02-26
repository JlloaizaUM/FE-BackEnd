import { db } from '../firebase'

export const getMenus = async (req, res) => {
    try {
        const result = await db.collection('menu').get()

        const menus = result.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
    
        console.log(menus)
        res.send({ listMenus: menus })
        res.sendStatus("staus listMenu", 200);
    } catch (error) {
        res.sendStatus("server error get list menu", 500);
    }

}

export const createMenu = (req, res) => res.send('menu!!!')