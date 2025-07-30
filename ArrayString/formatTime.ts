function formatTime(date:string): string{
    const t = new Date(date) || new Date()
    const year = t.getFullYear()
    const month = String(t.getMonth()+1).padStart(2, '0')
    const day = String(t.getDate()).padStart(2, '0')

    const hours = t.getHours().toString().padStart(2, '0')
    const minutes = t.getMinutes().toString().padStart(2, '0')
    const seconds = t.getSeconds().toString().padStart(2, '0')

    console.log('---', year, month, day, hours, minutes, seconds)

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} `
}

console.log(formatTime('2025-7-29'))