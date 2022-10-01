export const uniqueDates = (tasks) => {
    const unique = [];

    tasks.forEach( task => {
        if( !unique.includes(task.dateFormat) ) unique.push(task.dateFormat);
    });
    return unique;
}

export const orderDates = (dates) => {
    dates.sort((a, b) => {
            const firstDate = moment(a, 'DD/MM/YYYY');
            const seconDate = moment(b, 'DD/MM/YYYY');
            return firstDate - seconDate;
        });
};

