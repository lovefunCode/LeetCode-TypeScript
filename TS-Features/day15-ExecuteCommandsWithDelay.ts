
// 1. chain-of-responsibility design pattern  reduce
// 2. Returns a cleanup function(Closure) that cancels all scheduled commands when called.
const dispatchExecuteCommands = (commands: string) => {
    if (!commands.length) return;
    const timerIds = commands.split('').reduce<number[]>((ids, command, index) => {
        const id = setTimeout(() => {
            if (command in COMMAND_TO_ACTION) {
                // Strategy design pattern
                COMMAND_TO_ACTION[command]()
            } else {
                throw new Error(`Invalid Command${command}`)
            }
        }, index * 1000)
        return [...ids, id]
    }, [])

    return () => {
        timerIds.forEach((id) => clearTimeout(id))
    }
}

const upgradeDispatchExecuteCommands = (commands: string) => {
    if (!commands.length) {
        return Promise.resolve()
    }
    const timerIds: number[] = []
    const commandPromise = commands.split('').map((command, index) => {
        return new Promise<void>((resolve, reject) => {
            const id = setTimeout(() => {
                if (command in COMMAND_TO_ACTION) {
                    try {
                        COMMAND_TO_ACTION[command]()
                        resolve()
                    } catch (err) {
                        reject(`Error executing command ${command}: ${err}`);
                    }
                } else {
                    reject(`Invalid Command${command}`)
                }
            }, index * 1000);
            timerIds.push(id)
        })
    })

    return Promise.all(commandPromise).then(()=>{
        console.log('All commands executed successfully');
    }).catch((err)=>{
        console.error('Error executing commands:', err);
    }).finally(()=>{
        // Cleanup timeouts regardless of success or failure
        timerIds.forEach(clearTimeout);
    })

}

const COMMAND_TO_ACTION: Record<string, () => void> = {
    'A': () => console.log('Action A'),
    'B': () => console.log('Action B'),
    'C': () => console.log('Action C')
};

const cancel = dispatchExecuteCommands("ABC");
setTimeout(cancel, 3000);  // Cancels remaining scheduled commands after 1.5 sec

