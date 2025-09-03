import {ChangeDetectionStrategy, Component, input, output, OnInit} from "@angular/core";

@Component({
  selector: 'app-botao-menu',
  standalone: true,
  imports: [],
  templateUrl: './botao-menu.component.html',
  styleUrl: './botao-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BotaoMenuComponent implements OnInit {

  nome = input.required<string>();
  botaoSelecionado = input<boolean>(false);
  onClick = output();

  ngOnInit(): void {

  }
}