import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './produto/produto.entity';
import { Cliente } from './cliente/cliente.entity';
import { Pedido } from './pedido/pedido.entity';
import { ProdutoController } from './produto/produto.controller';
import { ClienteController } from './cliente/cliente.controller';
import { ClienteService } from './cliente/cliente.service';
import { PedidoService } from './pedido/pedido.service';
import { ProdutoService } from './produto/produto.service';
import { PedidoController } from './pedido/pedido.controller';
import { EstoqueController } from './estoque/estoque.controller';
import { EstoqueService } from './estoque/estoque.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'ecf',
      entities: [Produto, Cliente, Pedido,],
      synchronize: true,
      logging: true
    }),
    TypeOrmModule.forFeature([ Cliente, Pedido, Produto ])
  ],
  controllers: [ AppController, ProdutoController, PedidoController, ClienteController, EstoqueController ],
  providers: [ AppService, ClienteService, PedidoService, ProdutoService, EstoqueService ],
})
export class AppModule {}