const UsersController = () => import('#controllers/users_controller')
const SessionController = () => import('#controllers/session_controller')
const TaskController = () => import('#controllers/tasks_controller')

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'


router.post('session', [SessionController, 'store'])
router.resource('user', UsersController).apiOnly()
router.group(()=> {
  router.resource('task', TaskController)
})
.use(middleware.auth())