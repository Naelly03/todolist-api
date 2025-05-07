import { createFolderValidator, updateFolderValidator } from "#validators/folder"
import Folder from "#models/folder"
import { HttpContext } from "@adonisjs/core/http"

export default class FolderController{
    async index({ auth }: HttpContext){
            const user = auth.user!
            await user.preload('tasks')
            return user.tasks
        }

    async store({ request, auth, response}: HttpContext){
            try {
                const {name} = await request.validateUsing(createFolderValidator)
                const user = auth.user!
                await user.related('folders').create({
                    name
                })
                return {
                    name
                }
            } catch (error) {
                return response.status(400).json({error: 'Error creating folder'})
            }
        }

    async show({ params, response}: HttpContext){
            try {
                const folder = await Folder.findOrFail('id', params.id)
                return folder
            } catch (error) {
                return response.status(400).json({error: 'Folder not found'})
            }
        }
    
    async update({ request, params, response }: HttpContext) {
            try {
              const folder = await Folder.findByOrFail('id', params.id)
              const { name } = await request.validateUsing(updateFolderValidator)
              folder.merge({ name})
              await folder.save()
              return folder
            } catch (error) {
              return response.status(400).json({ error: 'Folder not found ' })
            }
          }
          
    async destroy({ params, response }: HttpContext) {
            try {
              const folder = await Folder.findByOrFail('id', params.id)
              await folder.delete()
              return response.status(203)
            } catch (error) {
              return response.status(400).json({ error: 'Folder not found ' })
            }
          }
}