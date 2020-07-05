import {  PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
id: number;

@Column({name: 'nome', type: 'varchar' })
nome: string;

@Column({name: 'cpf', type: 'varchar' })
cpf : string;

@Column({name: 'endereco', type: 'varchar' })
endereco: string;

@Column({name: 'rg', type: 'varchar' })
rg: string;

@Column({name: 'bairro', type: 'varchar' })
bairro: string;

@Column({name: 'cidade', type: 'varchar' })
cidade: string;

@Column({name: 'cep', type: 'varchar' })
cep: string;
}