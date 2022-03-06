<h1>Create Todo</h1>

**URL**

`/` 

**Method**

`POST`

**Headers Request**

`token=[string]`

**Data Params**

```json
    {
        "title": "challenge",
        "description": "doing it",
        "status": "false",
        "due_date": "2020-08-03"
    }
```

**Success Response:**

**Code:** 201
**Content:**

```json
    {
        "todo": {
            "id": 1,
            "title": "challenge",
            "description": "doing it",
            "status": false,
            "UserId": 1,
            "due_date": "2020-08-03T00:00:00.000Z",
            "updatedAt": "2020-08-03T13:43:51.462Z",
            "createdAt": "2020-08-03T13:43:51.462Z"
        }
    }
```

**Error Response**

**Code:** 400
**Content:**
`
{
    "errors": [
        "title must be filled in"
    ]
}
`

**Code:** 400
**Content:**
`
{
    "errors": [
        "date must be greater than today"
    ]
}
`

OR

**Code:** 401
**Content:**
`
{
    "errors": [
        "authentication failed"
    ]
}
`

**Code:** 500

*************

<h1>Show All Todos</h1>

**URL**

`/todos` 

**Method**

`GET`

**Success Response:**

**Code:** 201
**Content:**

```json
    {
    "todo": [
        {
            "id": 1,
            "title": "mengerjakan challenge 1",
            "description": "untuk hari senin",
            "status": false,
            "due_date": "2020-08-03T00:00:00.000Z",
            "UserId": 1,
            "createdAt": "2020-08-03T08:53:14.821Z",
            "updatedAt": "2020-08-03T08:53:14.821Z"
        },
        {
            "id": 2,
            "title": "mengerjakan challenge 2",
            "description": "untuk hari selasa",
            "status": false,
            "due_date": "2020-08-04T00:00:00.000Z",
            "UserId": 1,
            "createdAt": "2020-08-03T08:57:29.399Z",
            "updatedAt": "2020-08-03T08:57:29.399Z"
        }
    ]
}
```

**Error Response**

**Code:** 401
**Content:**
`
{
    "errors": [
        "authentication failed"
    ]
}
`

OR

**Code:** 500

*************

<h1>Show One Todo</h1>

**URL**

`/todos/:id` 

**Method**

`GET`

**URL Params**
**Required:**

`id=[integer]`

**Headers Request**

`token=[string]`

**Success Response:**

**Code:** 201
**Content:**

```json
    {
        "todo": {
            "id": 1,
            "title": "challenge",
            "description": "doing it",
            "status": false,
            "UserId": 1,
            "due_date": "2020-08-03T00:00:00.000Z",
            "updatedAt": "2020-08-03T13:43:51.462Z",
            "createdAt": "2020-08-03T13:43:51.462Z"
        }
    }
```

**Error Response**

**Code:** 401
**Content:**
`
{
    "errors": [
        "authentication failed"
    ]
}
`

OR

**Code:** 404
**Content:**
`
{
    "errors": [
        "Todo not found"
    ]
}
`

OR

**Code:** 401
**Content:**
`
{
    "errors": [
        "you are not authorized to do this"
    ]
}
`

OR

**Code:** 500

*************

<h1>Update Todo</h1>

**URL**

`/todos/:id` 

**Method**

`PUT`

**URL Params**
**Required:**

`id=[integer]`

**Headers Request**

`token=[string]`

**Data Params**

```json
    {
        "title": "challenge",
        "description": "doing it",
        "status": false,
        "due_date": "2020-08-03T00:00:00.000Z"
    }
```

**Success Response:**

**Code:** 201
**Content:**

```json
    {
        "todo": {
            "id": 1,
            "title": "challenge",
            "description": "doing it",
            "status": false,
            "UserId": 1,
            "due_date": "2020-08-03T00:00:00.000Z",
            "updatedAt": "2020-08-03T13:43:51.462Z",
            "createdAt": "2020-08-03T13:43:51.462Z"
        }
    }
```

**Error Response**

**Code:** 401
**Content:**
`
{
    "errors": [
        "authentication failed"
    ]
}
`

OR

**Code:** 401
**Content:**
`
{
    "errors": [
        "you are not authorized to do this"
    ]
}
`

OR

**Code:** 400
**Content:**
`
{
    "errors": [
        "title must be filled in"
    ]
}
`

OR

**Code:** 400
**Content:**
`
{
    "errors": [
        "date must be greater than today"
    ]
}
`

OR

**Code:** 500

*************

<h1>Delete Todo</h1>

**URL**

`/todos/:id` 

**Method**

`DELETE`

**URL Params**
**Required:**

`id=[integer]`

**Headers Request**

`token=[string]`

**Success Response:**

**Code:** 201
**Content:**

```json
    {
        "todo": {
            "id": 1,
            "title": "challenge",
            "description": "doing it",
            "status": false,
            "TodoId": 1,
            "due_date": "2020-08-03T00:00:00.000Z",
            "updatedAt": "2020-08-03T13:43:51.462Z",
            "createdAt": "2020-08-03T13:43:51.462Z"
        }
    }
```

**Error Response**

**Code:** 401
**Content:**
`
{
    "errors": [
        "authentication failed"
    ]
}
`

OR

**Code:** 401
**Content:**
`
{
    "errors": [
        "you are not authorized to do this"
    ]
}
`

OR

**Code:** 500

*************

<h1>Register User</h1>

**URL**

`/users/register` 

**Method**

`POST`

**Data Params**

```json
    {
        "email": "abc@mail.com",
        "password": "123456"
    }
```

**Success Response:**

**Code:** 201
**Content:**

```json
{
    "user": {
        "id": "1",
        "email": "abc@mail.com",
        "password": "$2a$10$eP6kWJFrxXjg8cpXnv/toesDnONmRXkX.4MCEaH.YeHxWB928e5D2",
        "updatedAt": "2020-08-04T15:06:48.658Z",
        "createdAt": "2020-08-04T15:06:48.658Z"
    }
}
```

**Error Response**

**Code:** 400
**Content:**
`
{
    "errors": [
        "invalid email format"
    ]
}
`

OR

**Code:** 400
**Content:**
`
{
    "errors": [
        "email must be unique"
    ]
}
`

OR

**Code:** 500

************

<h1>Login User</h1>

**URL**

`/users/login` 

**Method**

`POST`

**Data Params**

```json
    {
        "email": "abc@mail.com",
        "password": "123456"
    }
```

**Success Response:**

**Code:** 200
**Content:**

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJhZ3VuZ0BnbWFpbC5jb20iLCJpYXQiOjE1OTY1NTM3Njh9.Xj_Ow4Rel67mldzhNuf-h0iNoo_-37LExdUPGAcL0UU"
}
```

**Error Response**

**Code:** 400
**Content:**
`
{
    "errors": [
        "invalid email or password"
    ]
}
`

OR

**Code:** 500

************

<h1>Get Holiday</h1>

**URL**

`/holiday/:year` 

**Method**

`GET`

**URL Params**
**Required:**

`year=[integer]`

**Headers Request**

`token=[string]`

**Success Response:**

**Code:** 200
**Content:**

```json
{
    "data": {
        "meta": {
            "code": 200
        },
        "response": {
            "holidays": [
                {
                    "name": "New Year's Day",
                    "description": "New Year’s Day is the first day of the year, or January 1, in the Gregorian calendar.",
                    "country": {
                        "id": "id",
                        "name": "Indonesia"
                    },
                    "date": {
                        "iso": "1950-01-01",
                        "datetime": {
                            "year": 1950,
                            "month": 1,
                            "day": 1
                        }
                    },
                    "type": [
                        "National holiday"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "January 2 Joint Holiday",
                    "description": "January 2 Joint Holiday is a joint holiday in Indonesia",
                    "country": {
                        "id": "id",
                        "name": "Indonesia"
                    },
                    "date": {
                        "iso": "1950-01-02",
                        "datetime": {
                            "year": 1950,
                            "month": 1,
                            "day": 2
                        }
                    },
                    "type": [
                        "National holiday"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Chinese Lunar New Year's Day",
                    "description": "Chinese New Year is the first day of the Chinese calendar, which is a lunisolar calendar mainly used for traditional celebrations.",
                    "country": {
                        "id": "id",
                        "name": "Indonesia"
                    },
                    "date": {
                        "iso": "1950-02-17",
                        "datetime": {
                            "year": 1950,
                            "month": 2,
                            "day": 17
                        }
                    },
                    "type": [
                        "National holiday"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "March Equinox",
                    "description": "March Equinox in Indonesia (Jakarta)",
                    "country": {
                        "id": "id",
                        "name": "Indonesia"
                    },
                    "date": {
                        "iso": "1950-03-21T12:35:06+08:00",
                        "datetime": {
                            "year": 1950,
                            "month": 3,
                            "day": 21,
                            "hour": 12,
                            "minute": 35,
                            "second": 6
                        },
                        "timezone": {
                            "offset": "+08:00",
                            "zoneabb": "WIB",
                            "zoneoffset": 28800,
                            "zonedst": 0,
                            "zonetotaloffset": 28800
                        }
                    },
                    "type": [
                        "Season"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Good Friday",
                    "description": "Good Friday is a global Christian observance two days before Easter Sunday.",
                    "country": {
                        "id": "id",
                        "name": "Indonesia"
                    },
                    "date": {
                        "iso": "1950-04-07",
                        "datetime": {
                            "year": 1950,
                            "month": 4,
                            "day": 7
                        }
                    },
                    "type": [
                        "National holiday"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Easter Sunday",
                    "description": "Easter Sunday commemorates Jesus Christ’s resurrection, according to Christian belief.",
                    "country": {
                        "id": "id",
                        "name": "Indonesia"
                    },
                    "date": {
                        "iso": "1950-04-09",
                        "datetime": {
                            "year": 1950,
                            "month": 4,
                            "day": 9
                        }
                    },
                    "type": [
                        "Observance"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Ascension of the Prophet Muhammad",
                    "description": "Isra and Mi'raj (Isra Me'raj, Israa and Mi'raaj, Laylat Al-Isra wa Al-Miraj, Lailat al Miraj, Night Journey and Ascension to Heaven) marks the night that the Prophet Mohammad traveled from Mecca to Jerusalem, ascended to heaven and returned.",
                    "country": {
                        "id": "id",
                        "name": "Indonesia"
                    },
                    "date": {
                        "iso": "1950-05-15",
                        "datetime": {
                            "year": 1950,
                            "month": 5,
                            "day": 15
                        }
                    },
                    "type": [
                        "National holiday"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Ascension Day of Jesus Christ",
                    "description": "Ascension Day is the 40th day of Easter. It is a religious holiday that commemorates the ascension of Jesus Christ into heaven.",
                    "country": {
                        "id": "id",
                        "name": "Indonesia"
                    },
                    "date": {
                        "iso": "1950-05-18",
                        "datetime": {
                            "year": 1950,
                            "month": 5,
                            "day": 18
                        }
                    },
                    "type": [
                        "National holiday"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "June Solstice",
                    "description": "June Solstice in Indonesia (Jakarta)",
                    "country": {
                        "id": "id",
                        "name": "Indonesia"
                    },
                    "date": {
                        "iso": "1950-06-22T07:05:59+07:30",
                        "datetime": {
                            "year": 1950,
                            "month": 6,
                            "day": 22,
                            "hour": 7,
                            "minute": 5,
                            "second": 59
                        },
                        "timezone": {
                            "offset": "+07:30",
                            "zoneabb": "WIB",
                            "zoneoffset": 27000,
                            "zonedst": 0,
                            "zonetotaloffset": 27000
                        }
                    },
                    "type": [
                        "Season"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Idul Fitri Day 1",
                    "description": "Eid-al-Fitr is a holiday to mark the end of the Islamic month of Ramadan, during which Muslims fast during the hours of daylight.",
                    "country": {
                        "id": "id",
                        "name": "Indonesia"
                    },
                    "date": {
                        "iso": "1950-07-17",
                        "datetime": {
                            "year": 1950,
                            "month": 7,
                            "day": 17
                        }
                    },
                    "type": [
                        "National holiday"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Idul Fitri Holiday",
                    "description": "Idul Fitri Holiday is a public holiday in Indonesia",
                    "country": {
                        "id": "id",
                        "name": "Indonesia"
                    },
                    "date": {
                        "iso": "1950-07-18",
                        "datetime": {
                            "year": 1950,
                            "month": 7,
                            "day": 18
                        }
                    },
                    "type": [
                        "National holiday"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Indonesian Independence Day",
                    "description": "Indonesian Independence Day is a public holiday in Indonesia",
                    "country": {
                        "id": "id",
                        "name": "Indonesia"
                    },
                    "date": {
                        "iso": "1950-08-17",
                        "datetime": {
                            "year": 1950,
                            "month": 8,
                            "day": 17
                        }
                    },
                    "type": [
                        "National holiday"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "September Equinox",
                    "description": "September Equinox in Indonesia (Jakarta)",
                    "country": {
                        "id": "id",
                        "name": "Indonesia"
                    },
                    "date": {
                        "iso": "1950-09-23T22:13:31+07:30",
                        "datetime": {
                            "year": 1950,
                            "month": 9,
                            "day": 23,
                            "hour": 22,
                            "minute": 13,
                            "second": 31
                        },
                        "timezone": {
                            "offset": "+07:30",
                            "zoneabb": "WIB",
                            "zoneoffset": 27000,
                            "zonedst": 0,
                            "zonetotaloffset": 27000
                        }
                    },
                    "type": [
                        "Season"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Eid al-Adha",
                    "description": "Eid al-Adha (Id ul-Adha) is an Islamic festival falling on the 10th day of the month of Dhul Hijja (Thou al-Hijja) to commemorate the willingness of Ibrahim (Abraham) to sacrifice his son.",
                    "country": {
                        "id": "id",
                        "name": "Indonesia"
                    },
                    "date": {
                        "iso": "1950-09-23",
                        "datetime": {
                            "year": 1950,
                            "month": 9,
                            "day": 23
                        }
                    },
                    "type": [
                        "National holiday"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Muharram / Islamic New Year",
                    "description": "Muharram is the first month of the Islamic calendar and a time of remembrance or mourning.",
                    "country": {
                        "id": "id",
                        "name": "Indonesia"
                    },
                    "date": {
                        "iso": "1950-10-13",
                        "datetime": {
                            "year": 1950,
                            "month": 10,
                            "day": 13
                        }
                    },
                    "type": [
                        "National holiday"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "December 21 Joint Holiday",
                    "description": "December 21 Joint Holiday is a joint holiday in Indonesia",
                    "country": {
                        "id": "id",
                        "name": "Indonesia"
                    },
                    "date": {
                        "iso": "1950-12-21",
                        "datetime": {
                            "year": 1950,
                            "month": 12,
                            "day": 21
                        }
                    },
                    "type": [
                        "National holiday"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "December Solstice",
                    "description": "December Solstice in Indonesia (Jakarta)",
                    "country": {
                        "id": "id",
                        "name": "Indonesia"
                    },
                    "date": {
                        "iso": "1950-12-22T17:43:17+07:30",
                        "datetime": {
                            "year": 1950,
                            "month": 12,
                            "day": 22,
                            "hour": 17,
                            "minute": 43,
                            "second": 17
                        },
                        "timezone": {
                            "offset": "+07:30",
                            "zoneabb": "WIB",
                            "zoneoffset": 27000,
                            "zonedst": 0,
                            "zonetotaloffset": 27000
                        }
                    },
                    "type": [
                        "Season"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Christmas Eve",
                    "description": "Christmas Eve is the day before Christmas Day and falls on December 24 in the Gregorian calendar.",
                    "country": {
                        "id": "id",
                        "name": "Indonesia"
                    },
                    "date": {
                        "iso": "1950-12-24",
                        "datetime": {
                            "year": 1950,
                            "month": 12,
                            "day": 24
                        }
                    },
                    "type": [
                        "Observance"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "Christmas Day",
                    "description": "Christmas Day is one of the biggest Christian celebrations and falls on December 25 in the Gregorian calendar.",
                    "country": {
                        "id": "id",
                        "name": "Indonesia"
                    },
                    "date": {
                        "iso": "1950-12-25",
                        "datetime": {
                            "year": 1950,
                            "month": 12,
                            "day": 25
                        }
                    },
                    "type": [
                        "National holiday"
                    ],
                    "locations": "All",
                    "states": "All"
                },
                {
                    "name": "New Year's Eve",
                    "description": "New Year’s Eve is the last day of the year, December 31, in the Gregorian calendar.",
                    "country": {
                        "id": "id",
                        "name": "Indonesia"
                    },
                    "date": {
                        "iso": "1950-12-31",
                        "datetime": {
                            "year": 1950,
                            "month": 12,
                            "day": 31
                        }
                    },
                    "type": [
                        "Observance"
                    ],
                    "locations": "All",
                    "states": "All"
                }
            ]
        }
    }
}
```

**Error Response**

**Code:** 401
**Content:**
`
{
    "errors": [
        "authentication failed"
    ]
}
`

OR

**Code:** 401
**Content:**
`
{
    "errors": [
        "you are not authorized to do this"
    ]
}
`

OR

**Code:** 500