import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
          name: 'Joao Victor',
          email: 'jao@gmail.com',
          password: '123456',
      },
      {
         name: 'Naelly Vitoria',
         email: 'naelly@gmail.com',
         password: '654321'
      }
    ])
  }
}