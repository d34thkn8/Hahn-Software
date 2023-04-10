import { ProgressSpinnerService } from 'src/app/core/components/progress-spinner/progress-spinner/services/progress-spinner.service';
import { ToastrService } from 'ngx-toastr';
import { ClipboardUtils } from './../../util/clipboard-utils';
import { Component,HostListener  } from '@angular/core';

@Component({
  selector: 'app-parameter-finder',
  templateUrl: './parameter-finder.component.html',
  styleUrls: ['./parameter-finder.component.scss']
})
export class ParameterFinderComponent {

  constructor(private messages:ToastrService,
    private loading:ProgressSpinnerService){

  }
  lista:string[]=[];

  async onClick(){
    this.loading.show();
    await ClipboardUtils.getText().then(async (copiedText) => {
        this.lista=this.findVariables(this.removeComments(copiedText));
        this.loading.hide();
    }).catch((err)=>{
      this.messages.error(err);
      this.loading.hide();
    });
  }
  async onClick2(){
    this.loading.show();
    await ClipboardUtils.getText().then(async (copiedText) => {
        var output=this.ordenarYMultiplicar(this.lista,copiedText);
        await ClipboardUtils.setText(output).then((e)=>{this.messages.success(e)}).catch((err)=>{this.messages.error(err)});
        this.loading.hide();
    }).catch((err)=>{
      this.messages.error(err);
      this.loading.hide();
    });
  }
  ordenarYMultiplicar(lista: string[], texto: string): string {
    // Separamos el texto por líneas
    const lineas = texto.split('\n');
  
    // Creamos una variable para el resultado final
    let output = '';
  
    // Recorremos la lista de acuerdo a los elementos de la primera lista
    for (const elemento of lista) {
      // Filtramos las líneas que contienen el elemento actual
      const lineasFiltradas = lineas.filter((linea) => linea.includes(elemento));
  
      // Concatenamos las líneas filtradas al resultado final
      output += lineasFiltradas.join('\n') + '\n';
    }
    console.log(output);
    return output;
  }
  @HostListener('document:keydown.f1', ['$event'])
  handleF1Key(event: KeyboardEvent) {
    console.log('F1 key pressed');
    event.preventDefault(); // Prevenir comportamiento por defecto de la tecla
    this.onClick();
  }
  removeComments(code: string): string {
    let inSingleLineComment = false;
    let inMultiLineComment = false;
    let inString = false;
    let result = '';
  
    for (let i = 0; i < code.length; i++) {
      if (!inSingleLineComment && !inMultiLineComment && !inString) {
        if (code[i] === '/' && code[i + 1] === '/') {
          inSingleLineComment = true;
          i++;
        } else if (code[i] === '/' && code[i + 1] === '*') {
          inMultiLineComment = true;
          i++;
        } else if (code[i] === '"' || code[i] === "'") {
          inString = true;
          result += code[i];
        } else {
          result += code[i];
        }
      } else if (inSingleLineComment && code[i] === '\n') {
        inSingleLineComment = false;
        result += '\n';
      } else if (inMultiLineComment && code[i] === '*' && code[i + 1] === '/') {
        inMultiLineComment = false;
        i++;
      } else if (inString && code[i] === '\\') {
        result += code[i] + code[i + 1];
        i++;
      } else if (inString && (code[i] === '"' || code[i] === "'")) {
        inString = false;
        result += code[i];
      } else if (!inSingleLineComment && !inMultiLineComment) {
        result += code[i];
      }
    }
  
    return result;
  }
  
  findVariables(text: string): string[] {
    const regex = new RegExp(`[@:](\\w+)`, "g");
    const matches = text.matchAll(regex);
    const variables:string[] = [];
  
    for (const match of matches) {
      const variable = match[1];
      variables.push(variable);
    }
  
    return variables;
  }
  

}
