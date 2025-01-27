import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosModule } from './productos/productos.module';
import { Producto } from './productos/entities/producto.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'productos.db',
      entities: [Producto],
      synchronize: true,
    }),
    ProductosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}