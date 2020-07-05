import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import {Pedido} from './pedido.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PedidoService {

  constructor(
    @InjectRepository(Pedido)
    private readonly repository: Repository<Pedido>) {
    }


    save(pedido: Pedido) {
      return this.repository.save(pedido);

    }

    findAll() {
      return this.repository.find();

    }

    findById(id: number) {
        return  this.repository.findOne(id);
       
    }

    delete(id: number) {
        return  this.repository.delete(id);
        
    }

    update(pedido : Pedido) {
    return this.repository.findOne(pedido);
    }   
}