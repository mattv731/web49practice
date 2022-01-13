const user = process.env.USERNAME
const cohort = process.argv[2]

if (process.argv[2] === 'web-49'){
    console.log(`welcome ${user} to ${cohort}`)
} else {
    console.log(`Boooooo ${cohort}`)
}