import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from './produto.entity';


@Controller('produto')
export class ProdutoController {

    constructor(private readonly Produto : ProdutoService){}

    @Post()
    save(@Body() Produto : Produto){
        return this.Produto.save(Produto);
    }

    @Get(":id")
    findById(@Param() id : number){
        return this.Produto.findById(id);
    }

    @Get()
    findAll(){
        return this.Produto.findAll();
    }

    @Put()
    update(@Body() Produto : Produto){
        return this.Produto.update(Produto);

    }


    @Delete(":id")
    delete(@Param() id : number){
        return this.Produto.delete(id);
    }

    }


