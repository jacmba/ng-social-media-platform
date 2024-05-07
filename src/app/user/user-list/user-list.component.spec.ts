import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';
import jasmine from 'jasmine';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userService: UserService;
  let userServiceSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [UserService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;

    userService = TestBed.inject(UserService);
    userServiceSpy = spyOn(userService, 'getUsers').and.returnValue(
      of([
        {id: 1, name: 'John'},
        {id: 2, name: 'Jane'}
      ])
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve users from UserService on init', () => {
    fixture.detectChanges();
    expect(userServiceSpy).toHaveBeenCalled();
    expect(component.users.length).toEqual(2);
    expect(component.users[0].id).toEqual(1);
    expect(component.users[0].name).toEqual('John');
    expect(component.users[1].id).toEqual(2);
    expect(component.users[1].name).toEqual('Jane');
  });

  it('should retrieve users when refresh button is clicked', () => {
    fixture.detectChanges();

    userServiceSpy.calls.reset();

    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click');

    expect(userServiceSpy).toHaveBeenCalled();
    expect(component.users.length).toEqual(2);
    expect(component.users[0].id).toEqual(1);
    expect(component.users[0].name).toEqual('John');
    expect(component.users[1].id).toEqual(2);
    expect(component.users[1].name).toEqual('Jane');
  });
});
