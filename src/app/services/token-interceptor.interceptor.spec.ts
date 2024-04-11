// import { TestBed } from '@angular/core/testing';
// import { HttpInterceptorFn } from '@angular/common/http';

// import { tokenInterceptorInterceptor } from './token-interceptor.interceptor';

// describe('tokenInterceptorInterceptor', () => {
//   const interceptor: HttpInterceptorFn = (req, next) => 
//     TestBed.runInInjectionContext(() => tokenInterceptorInterceptor(req, next));

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//   });

//   it('should be created', () => {
//     expect(interceptor).toBeTruthy();
//   });
// });


import { TestBed } from '@angular/core/testing';

import { TokenInterceptorInterceptor } from './token-interceptor.interceptor';

describe('TokenInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenInterceptorInterceptor = TestBed.inject(TokenInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
