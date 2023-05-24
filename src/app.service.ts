import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getRoutes(): Observable<Array<object>> {
    const URL = `http://apicms.ebms.vn/businfo/getallroute`;
    return this.httpService.get(URL).pipe(
      map((axiosResponse: AxiosResponse) => {
        return axiosResponse.data;
      }),
    );
  }

  getRouteDetail(id): Observable<object> {
    const URL = `http://apicms.ebms.vn/businfo/getroutebyid/` + id;
    return this.httpService.get(URL).pipe(
      map((axiosResponse: AxiosResponse) => {
        return axiosResponse.data;
      }),
    );
  }
}
