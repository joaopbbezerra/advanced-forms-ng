import { Component } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

type Mood = 'sad' | 'happy' | 'neutral';

@Component({
  selector: 'app-happiness-level',
  standalone: true,
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: HappinessLevelComponent,
      //The multi allows us to add the Happiness component to the NG VALUE ACCESSOR token rather than overwriting the token
      multi: true,
    },
  ],
  templateUrl: './happiness-level.component.html',
  styleUrl: './happiness-level.component.scss'
})
export class HappinessLevelComponent implements ControlValueAccessor {
  mood = 'neutral';

  onChange = (value: Mood) => {};
  onTouch = () => {};

  setMood(mood: Mood) {
    this.mood = mood;
    this.onChange(mood);
    this.onTouch();
  }

  writeValue(value: Mood) {
    this.mood = value;
  }

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }
}
