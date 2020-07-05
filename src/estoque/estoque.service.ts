import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import {Estoque} from './estoque.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EstoqueService {

  constructor(
    @InjectRepository(Estoque)
    private readonly repository: Repository<Estoque>) {
    }




    findAll() {
      return this.repository.find();

    }

    findById(id: number) {
        return  this.repository.findOne(id);
       
    }
    
   update(id: number){
    return  this.repository.findOne(id);
   }
    
}