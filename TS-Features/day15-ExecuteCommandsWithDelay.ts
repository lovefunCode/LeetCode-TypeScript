
// 1. chain-of-responsibility design pattern  reduce
// 2. Returns a cleanup function(Closure) that cancels all scheduled commands when called.
const dispatchExecuteCommands = (commands: string)=>{
    const timerIds = commands.split('').reduce<number[]>((ids, command, index)=>{
        const id = setTimeout(()=>{
            if(command in COMMAND_TO_ACTION){
                COMMAND_TO_ACTION[command]()
            }else{
                throw new Error(`Invalid Command${command}`)
            }
        }, index*1000)
        return [...ids, id]
    }, [])

    return ()=>{
        timerIds.forEach((id)=>clearTimeout(id))
    }
}

const COMMAND_TO_ACTION: Record<string, ()=>void> = {
    'A': () => console.log('Action A'),
    'B': () => console.log('Action B'),
    'C': () => console.log('Action C')
};

const cancel = dispatchExecuteCommands("ABC");
setTimeout(cancel, 3000);  // Cancels remaining scheduled commands after 1.5 sec

