import { ProjectModel } from './../main/home/model/project.interface';
export class ReplacementLib{
    static async replace(project:ProjectModel):Promise<string>{
        return new Promise(async (resolve,reject)=>{
            await navigator.clipboard
            .readText()
            .then(async (copiedText) => {
                project.infoList.forEach(el => {
                copiedText = this.replaceText(copiedText,el.valueX, el.valueY);
                });
                await navigator.clipboard.writeText(copiedText).then(() => {
                    resolve('Text copied to the clipboard');
                }).catch((err)=>{
                    reject('Clipboard Error'+err)
                });
            }).catch((err)=>{
                reject('Clipboard Error');
            });
        });
    }
    static replaceText(mainText:string, searchValue:string, replacementValue:string):string{
        const searchEscaped = searchValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(searchEscaped, 'g');
        return mainText.replace(regex, replacementValue);
      }
}