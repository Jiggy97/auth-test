import { applyDecorators, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from './auth/local-auth.guard';

export const AppController = () =>
  applyDecorators(Controller({ path: '/app', version: ['1'] }), ApiTags('App'));

export const CreateUser = () =>
  applyDecorators(
    UseGuards(LocalAuthGuard), // @UseGuards()는 인증 여부에 따라 접근을 제한합니다.
    Post('auth/login'),
    ApiOperation({
      summary: '유저 생성 API',
    }),
  );
