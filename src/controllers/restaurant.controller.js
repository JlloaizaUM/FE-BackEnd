import { storage, db } from '../database/connection.js';
import { v4 } from 'uuid';

export const upload_img = async (req, res) => {

    let pageid = req.headers.userid;

    if (!req.file) {
        console.error("No se ha enviado un archivo");
        res.status(400).json({ message: "No se ha enviado un archivo" });
        return;
    }

    try {
        await uploadFile(req.file, pageid);
    } catch (err) {
        if (err.code == "LIMIT_FILE_SIZE") {
            console.error("El archivo no puede tener un peso mayor a 2MB");
            return res.status(500).json({
                message: "El archivo no puede tener un peso mayor a 2MB",
            });
        }
        console.error(`No se pudo subir el archivo: ${req.file.originalname}. ${err}`);
        res.status(500).json({
            message: `No se pudo subir el archivo: ${req.file.originalname}. ${err}`,
        });
    }

    async function uploadFile(file, pageId) {
        let metadata = {
            firebaseStorageDownloadTokens: v4(),
            public: true
        }
        console.log(file);
        await storage.bucket().upload(file.path, {
            destination: pageId.concat('/', file.originalname),
            metadata: {
                metadata
            },
        }).then((result) => {
            res.status(200).json({
                url: 'https://firebasestorage.googleapis.com/v0/b/'.concat(
                    storage.bucket().name, '/o/', result[0].id,
                    '?alt=media&token=', metadata.firebaseStorageDownloadTokens)
            }
            );
        });

    }
}

export const upload_dish = async (req, res) => {
    let page = req.body;

    console.log(page.dish);
    const response = await db.collection(`users/${page.userid}/${page.cat}`).add(page.dish);

    console.log('Added document with ID: ', response.id);
    res.status(200).json({ id: response.id });
}

export const update_dish = async (req, res) => {
    let page = req.body;
    console.log('users'.concat('/', page.userid, '/', page.dish.cat, '/', page.dish.id));

    const response = await db.collection('users')
        .doc(`${page.userid}/${page.dish.cat}/${page.dish.id}`).update(page.dish);

    console.log('updated document with ID: ', page.dish.id);
    res.status(200).json({ message: `updated document with ID: ${page.dish.id}` });
}

export const delete_dish = async (req, res) => {
    let page = req.query;
    const response = await db.collection('users')
        .doc(`${page.userid}/${page.cat}/${page.id}`).delete();
    res.status(200).json({ message: `deleted document with ID: ${page.id}` });
}