import { EntityRepository, Repository } from "typeorm";
import Role from "../model/Role";


@EntityRepository(Role)
class RoleRepository extends Repository<Role> {

}

export default RoleRepository