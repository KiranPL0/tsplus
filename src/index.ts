export const tsplus = (name: string) => `Hello ${name}`;

const https = require('https')


export function print(arg: any){
    console.log(arg)
    return arg
}

export function random(arg: number){
    return Math.floor(Math.random() * arg)
}

export function get(link: string){
    https.get(link, (res: any) => {
        let data: any = []

        res.on('data', (chunk: any) => {
            data.push(chunk)
        })

        res.on('end', () => {
            return data
            
        })
        
    }).on('error', (err: any) => {
        return "Error: " + err.message
        console.log("Error: " + err.message)
    })
}