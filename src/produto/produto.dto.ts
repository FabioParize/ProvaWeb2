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
    data_de_validade: string;

    @IsString({ message: 'Não é um estoque válido!' })
    @MinLength(3, { message: 'O campo estoque deve ter no mínimo 3 caracteres' })
    @MaxLength(30, { message: 'O campo estoque deve ter no máximo 30 caracteres' })
    estoque: string;

    @IsString({ message: 'Não é um estoque válido!' })
    @MinLength(3, { message: 'O campo estoque deve ter no mínimo 3 caracteres' })
    @MaxLength(30, { message: 'O campo estoque deve ter no máximo 30 caracteres' })
    unidade_de_medida: string;

    @IsString({ message: 'Não é um preco válido!' })
    @MinLength(3, { message: 'O campo preco deve ter no mínimo 3 caracteres' })
    @MaxLength(30, { message: 'O campo preco deve ter no máximo 30 caracteres' })
    preco: string;


    @IsString({ message: 'Não é uma descrição válida!' })
    @MinLength(1, { message: 'O campo Descrição deve ter no mínimo 1 caracteres' })
    @MaxLength(30, { message: 'O campo Descrição deve ter no máximo 30 caracteres' })
    descricao: string;


  }