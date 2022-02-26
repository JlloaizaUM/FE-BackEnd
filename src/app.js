import express from 'express'
import config from './config'

import menuRoutes from './routes/menu.routes'

const app = express()

// settings
app.set('port', config.port)

app.use(menuRoutes)

export default app