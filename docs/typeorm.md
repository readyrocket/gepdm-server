#1 - Problema na utilização de UUID, o postgres não instala por padrão o módulo `uuid_ossp`. A solução para isso foi implementada pelo Typeorm para utilização do `uuidExtension: pgcrypto`
```javascript
const config: ConnectionOptions = {
  /* ... */
  uuidExtension: `pgcrypto`,
};

// #2 - Solução para criptografia
await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS 'uuid-ossp';`);
```
