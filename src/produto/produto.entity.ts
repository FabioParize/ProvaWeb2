import {  PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Produto {
    @PrimaryGeneratedColumn()
id: number;

@Column({name: 'nome', type: 'varchar' })
nome: string;

@Column({name: 'descricao', type: 'varchar' })
descricao : string;

@Column({name: 'Estoque', type: 'varchar' })
estoque: string;

@Column({name: 'preco', type: 'varchar' })
preco: string;

@Column({name: 'data_de_validade', type: 'date' })
data_de_validade: Date;

@Column({name: 'unidade_de_medida', type: 'varchar' })
unidade_de_medida: string;
}