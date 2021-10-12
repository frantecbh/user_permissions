import { EntityRepository, Repository } from "typeorm";
import Permission from "../model/Permissions";


@EntityRepository(Permission)
class PermissionRepository extends Repository<Permission> {

}

export default PermissionRepository