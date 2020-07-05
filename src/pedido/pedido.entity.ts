import {  PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Pedido {
    @PrimaryGeneratedColumn()
id: number;

@Column({name: 'Código', type: 'varchar' })
codigo: string;

@Column({name: 'Data', type: 'date' })
data : Date;

@Column({name: 'Data de Entrega Prevista', type: 'date' })
data_de_entrega_prevista: Date;

@Column({name: 'Transportadora', type: 'varchar' })
transportadora: string;

@Column({name: 'Valor Total', type: 'varchar' })
valot_total: string;

@Column({name: 'Valor dos Produtos', type: 'varchar' })
valor_dos_produtos: string;

@Column({name: 'Valor de descontos', type: 'varchar' })
valor_de_descontos: string;

@Column({name: 'Cliente', type: 'varchar' })
cliente : string;

@Column({name: 'Endereço de Entrega', type: 'varchar' })
endereco_de_entrega: string;

}