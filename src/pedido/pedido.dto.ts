import { IsString, MinLength, MaxLength,  } from "class-validator";

  export class PedidoDto {

    @IsString({ message: 'Não é um codigo válido!' })
    @MinLength(2, { message: 'O campo código deve ter no mínimo 2 caracteres' })
    @MaxLength(10, { message: 'O campo código deve ter no máximo 10 caracteres' })
    codigo: string;

    @IsString({ message: 'Não é uma data válida!' })
    @MinLength(8, { message: 'O campo data  deve ter 8 caracteres' })
    data: Date;

    @IsString({ message: 'Não é uma data de entrega válida!' })
    @MinLength(9, { message: 'O campo rg deve ter 8 caracteres' })
    data_de_entrega: string;

    @IsString({ message: 'Não é uma Transportadora válida!' })
    @MaxLength(80, { message: 'O campo Transportadora deve ter no máximo 80 caracteres' })
    transportadora: string;

    @IsString({ message: 'Não é um valor válido!' })
    @MaxLength(15, { message: 'O campo Valor Total deve ter no máximo 15 caracteres' })
    valor_total: string;

    @IsString({ message: 'Não é um valor válido!' })
    @MaxLength(15, { message: 'O campo Valor dos Produtos deve ter no máximo 15 caracteres' })
    valor_dos_produtos: string;

    @IsString({ message: 'Não é um valor válido!' })
    @MaxLength(5, { message: 'O campo Valor de descontos deve ter no máximo 5 caracteres' })
    valor_de_descontos: string;

    @IsString({ message: 'Não é um cep válido!' })
    @MinLength(3, { message: 'O campo Endereço de Entrega deve ter no mínimo 3 caracteres' })
    @MaxLength(30, { message: 'O campo Endereço de Entrega deve ter no máximo 30 caracteres' })
    endereco_de_entrega: string;

    @IsString({ message: 'Não é um Cliente válido!' })
    @MinLength(2, { message: 'O campo Cliente deve ter no mínimo 2 caracteres' })
    @MaxLength(30, { message: 'O campo Cliente deve ter no máximo 30 caracteres' })
    cliente: string;


  }