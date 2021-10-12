import { compare } from 'bcryptjs';
import {Request, Response} from 'express'
import { getCustomRepository } from 'typeorm';
import { sign } from 'jsonwebtoken'


import UserRepository from '../repositories/UserRpository';

class SessionController {

    async create(request: Request, response: Response){

        const {username, password} = request.body;

        const userRepository = getCustomRepository(UserRepository)

        const user = await userRepository.findOne({username}, {relations: ["roles"]})

        if(!user){
          return response.status(400).json({message: "User not found!"})
        }

        const matchPassword = await compare(password, user.password)

        if(!matchPassword){
          return response.status(400).json({message: "Incorrect password or username!"})
        }

        const roles = user.roles.map(role => role.name)

        const token = sign({roles}, process.env.TOKEN_JWT, {
        
          subject: user.id,
          expiresIn: '1d'
        })

        return response.json({
          token,
          user
        })





    }

}

export default new SessionController();