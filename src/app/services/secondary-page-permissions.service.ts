import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SecondaryPagePermissionsService {
  canActivate(id: number) {
    return !!(id % 2);
  }
}
