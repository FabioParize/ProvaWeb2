import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { Estoque } from './estoque.entity';


@Controller('estoque')
export class EstoqueController {

    constructor(private readonly estoque : EstoqueService){}

 

    @Get(":id")
    findById(@Param() id : number){
        return this.estoque.findById(id);
    }

    @Get()
    findAll(){
        return this.estoque.findAll();
    }

    @Put(":id")
    update(@Body() id: number){
        return this.estoque.update(id);

    }

    }


