export class TokenUtils{
    static tokenExpired(expiry: number) {
        var actual=Math.floor((new Date).getTime() / 1000);
        return actual >= expiry;
      }
}