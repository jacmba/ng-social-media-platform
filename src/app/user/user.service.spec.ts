import { UserService } from "./user.service";
import { TestBed } from '@angular/core/testing';

describe('UserService', () => {
  
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('User service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should get users', () => {
    service.getUsers().subscribe(users => {
      expect(users.length).toBeGreaterThan(0);
    });
  });
});
