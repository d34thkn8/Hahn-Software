import * as CryptoJS from 'crypto-js';

export class Cifrado {

    private static readonly encryptSecretKey = "09.mPtQ";

    public static encryptData(data: string): string {
        try {
            return CryptoJS.AES.encrypt(data, this.encryptSecretKey).toString();
        } catch (e) {
            
            return "";
        }
    }

    public static decryptData(data: string): string {
        try {
            const bytes = CryptoJS.AES.decrypt(data, this.encryptSecretKey);
            if (bytes.toString()) {
                return bytes.toString(CryptoJS.enc.Utf8);
            }
            return data;
        } catch (e) {
            
            return "";
        }
    }

}