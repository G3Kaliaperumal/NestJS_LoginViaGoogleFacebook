import { Controller, Get, Param, Post, Body, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('googleLogin')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) { }

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.appService.googleLogin(req)
  }

  @Get('facebookLogin')
  @UseGuards(AuthGuard('facebook'))
  async facebookAuth(@Req() req) { }

  @Get('facebook/redirect')
  @UseGuards(AuthGuard('facebook'))
  facebookAuthRedirect(@Req() req) {
    return this.appService.facebookLogin(req)
  }

}
