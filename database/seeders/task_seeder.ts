import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Task from '#models/task'

export default class extends BaseSeeder {
  async run() {
    await Task.createMany([
      {
        title: 'Concluir Api do projeto',
        description: 'Configurar Jwt e criar as rotas',
        userId: 2,
      },
      {
        title: 'Concluir Frontend do projeto',
        description: 'Criar as telas de login e dashboard',
        userId: 1
      },
      {
        title: 'Fazer o deploy do projeto',
        description: 'Fazer o deploy do projeto no Railway',
        userId: 2
      }
    ])
  }
}