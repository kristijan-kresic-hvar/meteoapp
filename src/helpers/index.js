export const queryBuilder = (url, filters) => {
    if (!url) return
    if (!filters.length) return url

    let query = url
    let dailyOptions = ''
    let hourlyOptions = ''

    filters.forEach(filter => {
        if (filter.daily) {
            dailyOptions += `${filter.daily.value},`
        } else if (filter.hourly) {
            hourlyOptions += `${filter.hourly.value},`
        }
    })

    // Remove the trailing comma from the daily and hourly options
    dailyOptions = dailyOptions.slice(0, -1)
    hourlyOptions = hourlyOptions.slice(0, -1)

    // Append the daily and hourly options to the query string
    if (dailyOptions) {
        query += `&daily=${dailyOptions}`
    }
    if (hourlyOptions) {
        query += `&hourly=${hourlyOptions}`
    }

    return query
}