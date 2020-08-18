import { inject, injectable } from 'tsyringe';

import IOrdersRepository from '../repositories/IOrdersRepository';
import Order from '../infra/typeorm/entities/Order';

interface IRequest {
  id: string;
}

@injectable()
class FindOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Order | undefined> {
    const order = await this.ordersRepository.findById(id);

    return order;
  }
}

export default FindOrderService;
