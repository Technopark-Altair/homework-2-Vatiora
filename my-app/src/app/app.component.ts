import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  firstOperand: number;
  secondOperand: number;
  operator: string;
  result: number;
  Error: string;

  doCalc()
  {
    if(this.firstOperand != null && this.secondOperand != null && this.operator !=  null)
    {
      if(this.operator == "-")
      {
        this.result = this.firstOperand - this.secondOperand;
        this.Error = "Нет ошибки";
      }
      else if(this.operator == "+")
      {
        this.result = this.firstOperand + this.secondOperand;
        this.Error = "Нет ошибки";
      }
      else if(this.operator == "*")
      {
        this.result = this.firstOperand * this.secondOperand;
        this.Error = "Нет ошибки";
      }
      else if(this.operator == "/")
      {
        if(this.secondOperand == 0)
        {
          this.Error = "На ноль делить нельзя!"
        }
        else
        {
          this.result = this.firstOperand / this.secondOperand;
          this.Error = "Нет ошибки";
        }
      }
    }
    else
    {
      if(this.firstOperand == null)
      {
        this.Error = "Нет первого числа";
      }
      else if(this.secondOperand == null)
      {
        this.Error = "Нет второго числа";
      }
      else if(this.operator == null)
      {
        this.Error = "Нет оператора действия";
      }
    }
  }
}
