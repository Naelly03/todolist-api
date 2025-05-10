import Task from '#models/task'
import { createTaskValidator, updateTaskValidator } from '#validators/task'
import type { HttpContext } from '@adonisjs/core/http'

export default class TasksController {
  async index({ auth, request }: HttpContext) {
    const user = auth.user!
    const folderId = request.input('folderId') // Obter folderId da query string
    
    const query = user.related('tasks').query()
    
    if (folderId) {
      query.where('folder_id', folderId) // Filtra por folder_id se fornecido
    }

    return await query.exec()
  }

  async store({ request, auth, response }: HttpContext) {
    try {
      const { title, description, folder_id } = await request.validateUsing(createTaskValidator)
      const user = auth.user!
      
      const task = await user.related('tasks').create({
        title,
        description,
        folderId: folder_id
      })
      
      return response.status(201).json(task)
    } catch (error) {
      return response.status(400).json({ 
        error: 'Error creating task',
        details: error.messages?.messages || error.message
      })
    }
  }

  async show({ params, response }: HttpContext) {
    try {
      const task = await Task.findOrFail(params.id) 
      return task
    } catch (error) {
      return response.status(404).json({ error: 'Task not found' })
    }
  }

  async update({ request, params, response }: HttpContext) {
    try {
      const task = await Task.findOrFail(params.id)
      const { title, description, done } = await request.validateUsing(updateTaskValidator)
      
      task.merge({ title, description, done })
      await task.save()
      
      return task
    } catch (error) {
      return response.status(400).json({ 
        error: 'Error updating task',
        details: error.messages?.messages || error.message
      })
    }
  }

  async destroy({ params, response }: HttpContext) {
    try {
      const task = await Task.findOrFail(params.id)
      await task.delete()
      return response.status(204).send(null)
    } catch (error) {
      return response.status(404).json({ error: 'Task not found' })
    }
  }
}