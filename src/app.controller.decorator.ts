import {
  applyDecorators,
  Controller,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

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

export const GetProfile = () =>
  applyDecorators(
    UseGuards(JwtAuthGuard),
    Get('/profile'),
    ApiOperation({
      summary: 'jwt 유효성 검증',
    }),
  );
