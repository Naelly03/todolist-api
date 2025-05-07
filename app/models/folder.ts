import { BaseModel, belongsTo, column, hasMany } from "@adonisjs/lucid/orm";
import User from './user.js'
import Task from './task.js'
import type { BelongsTo, HasMany } from "@adonisjs/lucid/types/relations";
import { DateTime } from "luxon";

export default class Folder extends BaseModel{
    @column({ isPrimary: true })
    declare id: number
    
    @column()
    declare name: string

    @column()
    declare userId: number
    
    @belongsTo(()=> User)
    declare user: BelongsTo<typeof User>

    @hasMany(()=> Task)
    declare tasks: HasMany<typeof Task>

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime
    
    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime

}
