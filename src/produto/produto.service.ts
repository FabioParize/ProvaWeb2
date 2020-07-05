import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import {Produto} from './produto.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProdutoService {

  constructor(
    @InjectRepository(Produto)
    private readonly repository: Repository<Produto>) {
    }


    save(Produto: Produto) {
      return this.repository.save(Produto);

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

    update(Produto : Produto) {
    return this.repository.findOne(Produto);
    }   
}