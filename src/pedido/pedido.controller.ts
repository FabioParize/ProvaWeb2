import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { Pedido } from './pedido.entity';


@Controller('pedido')
export class PedidoController {

    constructor(private readonly pedido : PedidoService){}

    @Post()
    save(@Body() pedido : Pedido){
        return this.pedido.save(pedido);
    }

    @Get(":id")
    findById(@Param() id : number){
        return this.pedido.findById(id);
    }

    @Get()
    findAll(){
        return this.pedido.findAll();
    }

    @Put()
    update(@Body() Pedido : Pedido){
        return this.pedido.update(Pedido);

    }


    @Delete(":id")
    delete(@Param() id : number){
        return this.pedido.delete(id);
    }

    }


