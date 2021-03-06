import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente.entity';


@Controller('cliente')
export class ClienteController {

    constructor(private readonly service : ClienteService){}

    @Post()
    save(@Body() cliente : Cliente){
        return this.service.save(cliente);
    }

    @Get(":id")
    findById(@Param() id : number){
        return this.service.findById(id);
    }

    @Get()
    findAll(){
        return this.service.findAll();
    }

    @Put()
    update(@Body() cliente : Cliente){
        return this.service.update(cliente);

    }


    @Delete(":id")
    delete(@Param() id : number){
        return this.service.delete(id);
    }

    }


