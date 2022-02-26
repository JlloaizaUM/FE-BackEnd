import { Router } from 'express'
import { getMenus, createMenu } from '../controllers/menu.controller'

const router = Router()

router.get('/menus', getMenus)

router.post('/create', createMenu)

router.delete('/menu', createMenu)

export default router
