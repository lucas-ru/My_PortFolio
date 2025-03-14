import { HttpClient } from '@angular/common/http';
import { Injectable  } from '@angular/core';
import { map, Observable } from 'rxjs';
import { me } from '../../interfaces/me'
import { Experience } from '../../interfaces/experience';
import { Degree } from '../../interfaces/degree';

@Injectable({
  providedIn: 'root'
})
export class LocalJSONService {

  private path:string = `../../../assets/data.json`

  constructor(
    private http: HttpClient) { }

  getAllLocalJSON$(): Observable<me>{
    return this.http
    .get<me>(this.path)
  }

  getExperienceLocalJSON$(): Observable<[Experience][]>{
    return this.http
      .get<me[]>(this.path)
      .pipe(
        map(data => data
          .map(exp => exp.experience)
        )
      )
  }

  getDegreeLocalJSON$(): Observable<[Degree][]>{
    return this.http
      .get<me[]>(this.path)
      .pipe(
        map(data => data
          .map(deg => deg.degree)
        )
      )
  }
}
