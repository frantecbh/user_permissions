import { EntityRepository, Repository } from "typeorm";
import Product from "../model/Product";


@EntityRepository(Product)
class ProductRepository extends Repository<Product> {

}

export default ProductRepository