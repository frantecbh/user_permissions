import { Request, Response } from "express";
import {getCustomRepository} from 'typeorm'
import PermissionRepository from "../repositories/PermissionRepository";
import RoleRepository from "../repositories/RoleRepository";


class RoleController {

    async create(request: Request, response: Response){
      const roleRepository = getCustomRepository(RoleRepository)
      const permissionsRepository = getCustomRepository(PermissionRepository)

      const {name, description, permissions} = request.body;

      const existRole = await roleRepository.findOne({name})

      if(existRole){
        return response.status(400).json({message: "Permission already exists!"})
      }

      const existsPermissions = await permissionsRepository.findByIds(permissions)

      const role = roleRepository.create({
                name, 
                description,
                permissions: existsPermissions
               
              })

      await roleRepository.save(role);

      return response.status(201).json(role)




    }

}

export default new RoleController();