import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column} from '@adonisjs/lucid/orm'
import type { BelongsTo} from '@adonisjs/lucid/types/relations'
import User from './user.js'
import Folder from './folder.js'

export default class Task extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare description: string | null

  @column()
  declare done: boolean

  @column()
  declare userId: number

  @column()
  declare folder_id: number

  @belongsTo(()=> User)
  declare user: BelongsTo<typeof User>

  @belongsTo(()=> Folder)
  declare folder: BelongsTo<typeof Folder>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}