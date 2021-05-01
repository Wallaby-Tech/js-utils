
const expect = require('expect')
const time = require('../time')

describe('time.js tests', () => {
    describe('get_days_diff', () => {
        it('Working get_days_diff positive result', () => {
            expect(time.get_days_diff('1998-12-12', '1998-12-17')).toEqual(5);
        })
        it('Working get_days_diff negative result', () => {
            expect(time.get_days_diff('1998-12-22', '1998-12-17')).toEqual(-5);
        })
        it('Throws if invalid from date', () => {
            const from_date = 'x'
            expect(() => {
                time.get_days_diff(from_date, '1998-12-17')
            }).toThrow(`${from_date} is not a valid date.`);
        })
        it('Throws if invalid to date', () => {
            const to_date = 'z'
            expect(() => {
                time.get_days_diff('1998-12-17', to_date)
            }).toThrow(`${to_date} is not a valid date.`);
        })
    })
    describe('generate_day_from_n_days ', () => {
        it('generate_day_from_n_days +n working default date', () => {
            expect(time.generate_day_from_n_days(5).getTime()).toBeGreaterThan((new Date()).getTime());
        })
        it('generate_day_from_n_days -n working default date', () => {
            expect(time.generate_day_from_n_days(-5).getTime()).toBeLessThan((new Date()).getTime());
        })
        it('generate_day_from_n_days +n designated date', () => {
            expect(time.generate_day_from_n_days(5, '1998-12-12')).toEqual(new Date('1998-12-17'));
        })
        it('generate_day_from_n_days -n designated date', () => {
            expect(time.generate_day_from_n_days(-5, '1998-12-12')).toEqual(new Date('1998-12-07'));
        })
        it('generate_day_from_n_days invalid n', () => {
            const invalid_n = 's'
            expect(
                () => time.generate_day_from_n_days(invalid_n, '1998-12-12')
            ).toThrow(`\"value\" must be a number`);
        })
        it('generate_day_from_n_days invalid n', () => {
            const invalid_date = 's'
            expect(
                () => time.generate_day_from_n_days(5, invalid_date)
            ).toThrow(`${invalid_date} is not a valid date.`);
        })
    })
})