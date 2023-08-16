import { ToastrService } from 'ngx-toastr';
import { ClipboardUtils } from './../../util/clipboard-utils';
import { Component } from '@angular/core';
import { ReplacementLib } from 'src/app/util/replacement-lib';

@Component({
  selector: 'app-copy-tool',
  templateUrl: './copy-tool.component.html',
  styleUrls: ['./copy-tool.component.scss']
})
export class CopyToolComponent {
  constructor(private toast:ToastrService){}
  valores:string[]=[
    `.ToString())`,
    `DbType tipo = (DbType)objeto.GetType().GetProperty(string.Concat(campo, ComprobantesVenta_Recursos.Tipo)).GetValue(objeto);
    OracleDbType OracleTipo = ConversionUtils.OracleTypeConverter(tipo);
    if (!tieneSecuencial){
        comando.Parameters.Add(campo, tipo).Value = ConversionUtils.GetOracleValue(tipo, objeto.GetType().GetProperty(campo).GetValue(objeto));
    }
    else
        comando.Parameters.Add(campo, OracleTipo, ParameterDirection.Output).Value= 0;
tieneSecuencial = false;`,
`{
  DbType tipo = (DbType)objeto.GetType().GetProperty(string.Concat(campo, ComprobantesVenta_Recursos.Tipo)).GetValue(objeto);
  OracleDbType OracleTipo= ConversionUtils.OracleTypeConverter(tipo);
  comando.Parameters.Add(campo, tipo).Value=ConversionUtils.GetOracleValue(tipo, objeto.GetType().GetProperty(campo).GetValue(objeto));
}`,
`ConversionUtils.OracleTypeConverter(`,
`)).Value=`
  ];
  copiar(value:string){
    ClipboardUtils.setText(value).then(()=>{
      this.toast.success('Copiado!')
    }).catch((err)=>{
      this.toast.error('Error:'+'err')
    })
  }
}
