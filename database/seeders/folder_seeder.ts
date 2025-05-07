import Folder from '#models/folder'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Folder.createMany([
          {
            name: 'Projeto Mobile',
            userId: 2,
          }
        ])
  }
}