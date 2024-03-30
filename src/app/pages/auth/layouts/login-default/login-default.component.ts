import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'app-login-default',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './login-default.component.html',
  styleUrl: './login-default.component.scss',
})
export class LoginDefaultComponent {
  @Input() description: string = '';
  @Input() primaryBtnText: string = '';
  @Input() secondaryBtnText: string = '';
  @Input() disablePrimaryBtn: boolean = true;

  @Output('submit') onSubmit = new EventEmitter();
  @Output('navigate') onNavigate = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }

  navigate() {
    this.onNavigate.emit();
  }
}
