export class ClipboardUtils{
    static async getText():Promise<string>{
        return new Promise(async (resolve,reject)=>{
            await navigator.clipboard
            .readText()
            .then(async (copiedText) => {
                resolve(copiedText);
            }).catch((err)=>{
                reject(err);
            });
        });
    }
    static async setText(text:string):Promise<string>{
        return new Promise(async (resolve,reject)=>{
            await navigator.clipboard.writeText(text).then(() => {
                resolve('Text copied to the clipboard');
            }).catch((err)=>{
                reject('Clipboard Error'+err)
            });
        });
    }
}