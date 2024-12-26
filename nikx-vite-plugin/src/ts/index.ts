const fileRegex = /\.(nikx)$/
import {compile} from 'nikx-compiler'


export default function nikxPlugin() {
    return {
        name: 'nikx-vite-plugin',

        transform(src: string, id: string) {
            if (fileRegex.test(id)) {
                const compiledCode = compile(src);
                console.log("compiled code:"+compiledCode)
                return {
                    code: compiledCode,
                    //code:'console.log("nikx")',
                    //map: null, // provide source map if available
                }
            }
        },
    }
}
