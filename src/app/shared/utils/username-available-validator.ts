import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";
import {catchError, map, Observable, of} from "rxjs";
import {Injector} from "@angular/core";
import {UserService} from "../data-access/user.service";

export const usernameAvailableValidator: ValidatorFn = (
  control: AbstractControl
): Observable<ValidationErrors | null> => {
  //We need to create our own injection cause it won't be available for us because our function is not running withing an injection context
  const injector = Injector.create([
    {provide: UserService, useClass: UserService}
  ]);
  return injector.get(UserService).checkUsernameAvailable(control.value)
    .pipe(
      map((isAvailable) => (isAvailable ? null : {usernameAvailable: true})),
      catchError(() => of(null))
    )
}
