import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/routes')
  getRoutes() {
    return this.appService.getRoutes();
  }

  @Get('/route/:id')
  async getRouteDetail(@Param() id) {
    const routes = this.appService.getRoutes();
    const ids = [];
    await routes.forEach((element) => {
      element.forEach((route) => {
        if (route['RouteNo'].search(id.id) !== -1) ids.push(route['RouteId']);
      });
    });
    if (ids.length == 0) return [];
    const metvl = async () => {
      const searchResults = [];
      await ids.forEach(async (element) => {
        let taomet;
        const temp = this.appService.getRouteDetail(element);
        await temp.forEach((ok) => {
          taomet = ok;
        });
        searchResults.push(taomet);
      });
      console.log(searchResults);
    };
    // await console.log(searchResults);
    return metvl();
  }
}
