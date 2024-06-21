# Clean Architecture Example

Este projeto é um exemplo de implementação do padrão de Clean Architecture em TypeScript. Ele inclui casos de uso para operações comuns em entidades como produtos e pedidos.

## Estrutura do Projeto

O projeto está dividido em várias camadas seguindo os princípios da Clean Architecture:

- **Entities**: Contém as entidades do domínio.
- **Use Cases**: Contém a lógica de negócios.
- **Interfaces**: Contém as interfaces para os repositórios que interagem com a base de dados.
- **Repositories**: Implementação dos repositórios que efetivamente realizam as operações de dados.

## Casos de Uso Implementados

- **Gestão de Usuários**: Inclui casos de uso para criar, atualizar e deletar usuários.
- **Gestão de Produtos**: Inclui casos de uso para criar, atualizar e deletar produtos.
- **Gestão de Pedidos**: Inclui casos de uso para atualizar e cancelar pedidos.

## Como Executar

Para executar este projeto, você precisará ter Node.js instalado. Siga os passos abaixo:

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/clean-architecture-example.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd clean-architecture-example
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Compile o projeto:

   ```bash
   npm run build
   ```

5. Inicie o projeto:

   ```bash
   npm start
   ```

6. Para desenvolvimento, você pode usar o modo de observação:

   ```bash
   npm run dev
   ```
