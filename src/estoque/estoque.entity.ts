import {  PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Estoque {
    @PrimaryGeneratedColumn()
id: number;

@Column({name: 'quantidade_estoque', type: 'int' })
quantidade_estoque: number;





}