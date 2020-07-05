import { IsString, MinLength, MaxLength,  } from "class-validator";

  export class ClienteDto {

    @IsString({ message: 'Não é um nome válido!' })
    @MinLength(3, { message: 'O campo primeiro nome deve ter no mínimo 2 caracteres' })
    @MaxLength(30, { message: 'O campo primeiro nome deve ter no máximo 30 caracteres' })
    nome: string;

    @IsString({ message: 'Não é um cpf válido!' })
    @MinLength(12, { message: 'O campo cpf  deve ter 12 caracteres' })
    cpf: string;

    @IsString({ message: 'Não é um rg válido!' })
    @MinLength(10, { message: 'O campo rg deve ter 10 caracteres' })
    rg: string;

    @IsString({ message: 'Não é um bairro válido!' })
    @MaxLength(80, { message: 'O campo bairro deve ter no máximo 80 caracteres' })
    bairro: string;

    @IsString({ message: 'Não é uma cidade válida!' })
    @MaxLength(30, { message: 'O campo cidade deve ter no máximo 30 caracteres' })
    cidade: string;

    @IsString({ message: 'Não é um endereço válido!' })
    endereco: string;

    @IsString({ message: 'Não é um cep válido!' })
    @MinLength(8, { message: 'O campo cep deve ter no mínimo 8 caracteres' })
    @MaxLength(15, { message: 'O campo cep deve ter no máximo 15 caracteres' })
    cep: string;


  }