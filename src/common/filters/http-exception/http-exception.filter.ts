import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    console.error('Error detectado:', exception);
    const message =
      exception instanceof HttpException
        ? exception.getResponse()
        : { message: 'Ocurrió un error interno en el servidor' };

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      error: message,
    });
  }
}