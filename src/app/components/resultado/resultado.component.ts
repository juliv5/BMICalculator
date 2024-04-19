import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrl: './resultado.component.scss'
})
export class ResultadoComponent {
  bmi: number = 0;
  resutado: string = '';
  interpretacion: string = '';
  constructor(private route: ActivatedRoute)
  {
    this.bmi = +route.snapshot.paramMap.get('valor')!;
  }
  ngOnInit(): void
  {
    this.getResultado();
  }
  getResultado()
  {
    if(this.bmi>=25)
    {
      this.resutado='Exceso de peso';
      this.interpretacion='Tienes un peso corporal superior al normal. Intente hacer más ejercicio.';
    }
    else if(this.bmi>=18.5)
    {
      this.resutado='Normal';
      this.interpretacion='Tienes un peso corporal normal. ¡Buen trabajo!';
    }
    else
    {
      this.resutado='Bajo de peso';
      this.interpretacion='Tienes un peso corporal más bajo de lo normal. Puedes comer un poco más!!';
    }
  }

}
