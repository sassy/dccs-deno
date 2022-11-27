import { open } from "https://deno.land/x/opener/mod.ts";
import { readText, writeText } from "https://deno.land/x/copy_paste/mod.ts";

const now = new Date();
const year = String(now.getFullYear());
const month = ('0' + (now.getMonth() + 1)).slice(-2);
const date = ('0' + now.getDate()).slice(-2);

const requestUrl = new URL(
    './pop.aspx?D=' + year + month + date + '&R=07&T=02',
    'https://traininfo.jreast.co.jp/delay_certificate/',
);
console.log(requestUrl.toString());
await open(requestUrl);
await writeText(requestUrl.toString()); 
