import vine from '@vinejs/vine'

export const createTaskValidator = vine.compile(
    vine.object({
        title: vine.string().trim(),
        description: vine.string().optional(),
        folder_id: vine.number().optional()
    })
)

export const updateTaskValidator = vine.compile(
    vine.object({
        title: vine.string().trim(),
        description: vine.string().optional(),
        done: vine.boolean().optional()
    })
)