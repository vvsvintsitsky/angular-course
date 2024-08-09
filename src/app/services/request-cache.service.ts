import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

type CachedValue = HttpResponse<unknown> | HttpErrorResponse;

@Injectable({
  providedIn: 'root',
})
export class RequestCacheService {
  private responses = new Map<string, CachedValue>();

  getResponse(key: string) {
    return this.responses.get(key);
  }

  setResponse(key: string, value: CachedValue) {
    this.responses.set(key, value);
  }
}
