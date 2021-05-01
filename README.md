# js-utils

A library with some util functions for testing purposes or documentating purposes.


## Time

    get_days_diff(date from_date, date to_date): Get the rounded amount of days's difference.
    generate_day_from_n_days(integer n, date from_date): Get a date with n days of difference from a date. If from_date is not defined, new Date() is used.
## Values generator

    uuid: Random uuid value for testing o documentating with some examples. Example:  9820b9c3-78d4-465a-8499-20b07dad98cc
    date: Random date value for testing o documentating with some examples. Example:  2021-05-01T22:50:34.003Z
    integer: Random integer value for testing o documentating with some examples. Example:  24
    number: Random number value for testing o documentating with some examples. Example:  52.322243405971825
    name: Random name value for testing o documentating with some examples. Example:  Sabryna
    surname: Random surname value for testing o documentating with some examples. Example:  Marguerite
    boolean: Random boolean value for testing o documentating with some examples. Example:  true
    string: Random string value for testing o documentating with some examples. Example:  Dynamic Paradigm Planner
    link: Random link value for testing o documentating with some examples. Example:  https://colleen.info
    year: Random year value for testing o documentating with some examples. Example:  2021

## Constants

    DAY_IN_MS: Day in MS, equals to 24*60*60*1000 = 86400000000
