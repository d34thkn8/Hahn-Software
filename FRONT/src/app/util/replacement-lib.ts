import { ClipboardUtils } from './clipboard-utils';
import { ProjectModel } from './../main/home/model/project.interface';
export class ReplacementLib{
    static async replace(project:ProjectModel):Promise<string>{
        return new Promise(async (resolve,reject)=>{
            await ClipboardUtils.getText()
            .then(async (copiedText) => {
                project.infoList.forEach(el => {
                copiedText = this.replaceText(copiedText,el.valueX, el.valueY);
                });
                await ClipboardUtils.setText(copiedText).then((message) => {
                    resolve(message);
                }).catch((err)=>{
                    reject(err);
                });
            }).catch((err)=>{
                reject(err);
            });
        });
    }
    static replaceText(mainText:string, searchValue:string, replacementValue:string):string{
        const searchEscaped = searchValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(searchEscaped, 'g');
        return mainText.replace(regex, replacementValue);
      }
}