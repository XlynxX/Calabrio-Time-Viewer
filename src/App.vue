<script setup lang="ts">
import { ref, onMounted } from 'vue';
const message = ref('Понедельник');
const data = ref({
  "PeriodSelection": {
    "StartDate": "2025-01-20T00:00:00",
    "EndDate": "2025-01-26T00:00:00",
    "Display": "20.01.2025 – 26.01.2025",
    "Date": "2025-01-21",
    "SelectedDateRange": {
      "MinDate": "2025-01-20",
      "MaxDate": "2025-01-26"
    },
    "SelectableDateRange": {
      "MinDate": "1900-04-30",
      "MaxDate": "2077-11-16"
    },
    "PeriodNavigation": {
      "NextPeriod": "2025-01-27",
      "HasNextPeriod": true,
      "PrevPeriod": "2025-01-19",
      "HasPrevPeriod": true,
      "CanPickPeriod": false
    }
  },
  "Days": [
    {
      "RequestsCount": 0,
      "Date": "20.01.2025",
      "FixedDate": "2025-01-20",
      "State": 0,
      "Header": {
        "Title": "понедельник",
        "Date": "20.01.2025",
        "DayDescription": "Январь",
        "DayNumber": "20"
      },
      "Note": {
        "Message": ""
      },
      "OvertimeAvailabililty": {
        "HasOvertimeAvailability": false,
        "StartTime": null,
        "EndTime": null,
        "EndTimeNextDay": false,
        "DefaultStartTime": "03:00 +1",
        "DefaultEndTime": "04:00 +1",
        "DefaultEndTimeNextDay": true
      },
      "HasMainShift": true,
      "HasOvertime": false,
      "IsFullDayAbsence": false,
      "IsDayOff": false,
      "Summary": {
        "Title": "Evening",
        "TimeSpan": "18:30 – 03:00 +1",
        "Summary": "8 h",
        "StyleClassName": "color_00008B",
        "Color": "rgb(0,0,139)"
      },
      "Periods": [
        {
          "Title": "Training",
          "TimeSpan": "18:30 – 18:40",
          "StartTime": "2025-01-20T18:30:00",
          "EndTime": "2025-01-20T18:40:00",
          "Summary": "10 min",
          "StyleClassName": "color_00FFFF",
          "Meeting": null,
          "StartPositionPercentage": 0.7708333333333334,
          "EndPositionPercentage": 0.7777777777777778,
          "Color": "0,255,255",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": true,
          "ShiftLayerId": "606df107-0f9f-4421-9fbc-b25000e744bd",
          "IsLunch": false,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-20"
        },
        {
          "Title": "Ready",
          "TimeSpan": "18:40 – 19:00",
          "StartTime": "2025-01-20T18:40:00",
          "EndTime": "2025-01-20T19:00:00",
          "Summary": "20 min",
          "StyleClassName": "color_00C000",
          "Meeting": null,
          "StartPositionPercentage": 0.7777777777777778,
          "EndPositionPercentage": 0.7916666666666666,
          "Color": "0,192,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "49dd23b7-f707-4f89-940d-b25000e744bd",
          "IsLunch": false,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-20"
        },
        {
          "Title": "Meeting",
          "TimeSpan": "19:00 – 19:30",
          "StartTime": "2025-01-20T19:00:00",
          "EndTime": "2025-01-20T19:30:00",
          "Summary": "30 min",
          "StyleClassName": "color_808080",
          "Meeting": {
            "Title": "Team meeting",
            "Location": "",
            "Description": "",
            "Agenda": null,
            "ExternalMeetingId": null
          },
          "StartPositionPercentage": 0.7916666666666666,
          "EndPositionPercentage": 0.8125,
          "Color": "128,128,128",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": true,
          "ShiftLayerId": null,
          "IsLunch": false,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-20"
        },
        {
          "Title": "Break",
          "TimeSpan": "19:30 – 19:45",
          "StartTime": "2025-01-20T19:30:00",
          "EndTime": "2025-01-20T19:45:00",
          "Summary": "15 min",
          "StyleClassName": "color_FF8000",
          "Meeting": null,
          "StartPositionPercentage": 0.8125,
          "EndPositionPercentage": 0.8229166666666666,
          "Color": "255,128,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "5baf677f-e4e8-435d-9544-b25000e744bd",
          "IsLunch": false,
          "IsShortBreak": true,
          "BelongsToDate": "2025-01-20"
        },
        {
          "Title": "Ready",
          "TimeSpan": "19:45 – 20:00",
          "StartTime": "2025-01-20T19:45:00",
          "EndTime": "2025-01-20T20:00:00",
          "Summary": "15 min",
          "StyleClassName": "color_00C000",
          "Meeting": null,
          "StartPositionPercentage": 0.8229166666666666,
          "EndPositionPercentage": 0.8333333333333334,
          "Color": "0,192,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "49dd23b7-f707-4f89-940d-b25000e744bd",
          "IsLunch": false,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-20"
        },
        {
          "Title": "Meeting",
          "TimeSpan": "20:00 – 20:30",
          "StartTime": "2025-01-20T20:00:00",
          "EndTime": "2025-01-20T20:30:00",
          "Summary": "30 min",
          "StyleClassName": "color_808080",
          "Meeting": {
            "Title": "121 HP ",
            "Location": "",
            "Description": "",
            "Agenda": null,
            "ExternalMeetingId": null
          },
          "StartPositionPercentage": 0.8333333333333334,
          "EndPositionPercentage": 0.8541666666666666,
          "Color": "128,128,128",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": true,
          "ShiftLayerId": null,
          "IsLunch": false,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-20"
        },
        {
          "Title": "Ready",
          "TimeSpan": "20:30 – 20:45",
          "StartTime": "2025-01-20T20:30:00",
          "EndTime": "2025-01-20T20:45:00",
          "Summary": "15 min",
          "StyleClassName": "color_00C000",
          "Meeting": null,
          "StartPositionPercentage": 0.8541666666666666,
          "EndPositionPercentage": 0.8645833333333334,
          "Color": "0,192,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "49dd23b7-f707-4f89-940d-b25000e744bd",
          "IsLunch": false,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-20"
        },
        {
          "Title": "Lunch",
          "TimeSpan": "20:45 – 21:15",
          "StartTime": "2025-01-20T20:45:00",
          "EndTime": "2025-01-20T21:15:00",
          "Summary": "30 min",
          "StyleClassName": "color_FFFF00",
          "Meeting": null,
          "StartPositionPercentage": 0.8645833333333334,
          "EndPositionPercentage": 0.8854166666666666,
          "Color": "255,255,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "c12a06a4-db25-4e05-b3a8-b25000e744bd",
          "IsLunch": true,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-20"
        },
        {
          "Title": "Ready",
          "TimeSpan": "21:15 – 22:45",
          "StartTime": "2025-01-20T21:15:00",
          "EndTime": "2025-01-20T22:45:00",
          "Summary": "1 h 30 min",
          "StyleClassName": "color_00C000",
          "Meeting": null,
          "StartPositionPercentage": 0.8854166666666666,
          "EndPositionPercentage": 0.9479166666666666,
          "Color": "0,192,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "49dd23b7-f707-4f89-940d-b25000e744bd",
          "IsLunch": false,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-20"
        },
        {
          "Title": "Health & Safety",
          "TimeSpan": "22:45 – 23:15",
          "StartTime": "2025-01-20T22:45:00",
          "EndTime": "2025-01-20T23:15:00",
          "Summary": "30 min",
          "StyleClassName": "color_FF8000",
          "Meeting": null,
          "StartPositionPercentage": 0.9479166666666666,
          "EndPositionPercentage": 0.96875,
          "Color": "255,128,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "454ccd76-ede8-49a7-82a1-b25000e744bd",
          "IsLunch": false,
          "IsShortBreak": true,
          "BelongsToDate": "2025-01-20"
        },
        {
          "Title": "Ready",
          "TimeSpan": "23:15 – 01:00 +1",
          "StartTime": "2025-01-20T23:15:00",
          "EndTime": "2025-01-21T01:00:00",
          "Summary": "1 h 45 min",
          "StyleClassName": "color_00C000",
          "Meeting": null,
          "StartPositionPercentage": 0.96875,
          "EndPositionPercentage": 1,
          "Color": "0,192,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "49dd23b7-f707-4f89-940d-b25000e744bd",
          "IsLunch": false,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-20"
        }
      ],
      "DayOfWeekNumber": 1,
      "Availability": true,
      "HasNote": false,
      "ProbabilityClass": "",
      "ProbabilityText": "",
      "OpenHourPeriod": null,
      "HasNotScheduled": false,
      "BankHolidayCalendar": null,
      "BaseLayer": null
    },
    {
      "RequestsCount": 0,
      "Date": "21.01.2025",
      "FixedDate": "2025-01-21",
      "State": 2,
      "Header": {
        "Title": "вторник",
        "Date": "21.01.2025",
        "DayDescription": "",
        "DayNumber": "21"
      },
      "Note": {
        "Message": ""
      },
      "OvertimeAvailabililty": {
        "HasOvertimeAvailability": false,
        "StartTime": null,
        "EndTime": null,
        "EndTimeNextDay": false,
        "DefaultStartTime": "08:00",
        "DefaultEndTime": "17:00",
        "DefaultEndTimeNextDay": false
      },
      "HasMainShift": false,
      "HasOvertime": false,
      "IsFullDayAbsence": false,
      "IsDayOff": true,
      "Summary": {
        "Title": "Day Off",
        "TimeSpan": null,
        "Summary": null,
        "StyleClassName": "dayoff striped",
        "Color": null
      },
      "Periods": [
        {
          "Title": "Ready",
          "TimeSpan": "23:15 – 01:00 +1",
          "StartTime": "2025-01-20T23:15:00",
          "EndTime": "2025-01-21T01:00:00",
          "Summary": "1 h 45 min",
          "StyleClassName": "color_00C000",
          "Meeting": null,
          "StartPositionPercentage": 0,
          "EndPositionPercentage": 0.041666666666666664,
          "Color": "0,192,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "49dd23b7-f707-4f89-940d-b25000e744bd",
          "IsLunch": false,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-20"
        },
        {
          "Title": "Break",
          "TimeSpan": "01:00 – 01:15",
          "StartTime": "2025-01-21T01:00:00",
          "EndTime": "2025-01-21T01:15:00",
          "Summary": "15 min",
          "StyleClassName": "color_FF8000",
          "Meeting": null,
          "StartPositionPercentage": 0.041666666666666664,
          "EndPositionPercentage": 0.052083333333333336,
          "Color": "255,128,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "09b6c8bc-3baa-4dc5-a090-b25000e744bd",
          "IsLunch": false,
          "IsShortBreak": true,
          "BelongsToDate": "2025-01-20"
        },
        {
          "Title": "Ready",
          "TimeSpan": "01:15 – 03:00",
          "StartTime": "2025-01-21T01:15:00",
          "EndTime": "2025-01-21T03:00:00",
          "Summary": "1 h 45 min",
          "StyleClassName": "color_00C000",
          "Meeting": null,
          "StartPositionPercentage": 0.052083333333333336,
          "EndPositionPercentage": 0.125,
          "Color": "0,192,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "49dd23b7-f707-4f89-940d-b25000e744bd",
          "IsLunch": false,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-20"
        }
      ],
      "DayOfWeekNumber": 2,
      "Availability": true,
      "HasNote": false,
      "ProbabilityClass": "good",
      "ProbabilityText": "Хорошая",
      "OpenHourPeriod": null,
      "HasNotScheduled": false,
      "BankHolidayCalendar": null,
      "BaseLayer": null
    },
    {
      "RequestsCount": 0,
      "Date": "22.01.2025",
      "FixedDate": "2025-01-22",
      "State": 0,
      "Header": {
        "Title": "среда",
        "Date": "22.01.2025",
        "DayDescription": "",
        "DayNumber": "22"
      },
      "Note": {
        "Message": ""
      },
      "OvertimeAvailabililty": {
        "HasOvertimeAvailability": false,
        "StartTime": null,
        "EndTime": null,
        "EndTimeNextDay": false,
        "DefaultStartTime": "08:00",
        "DefaultEndTime": "17:00",
        "DefaultEndTimeNextDay": false
      },
      "HasMainShift": false,
      "HasOvertime": false,
      "IsFullDayAbsence": false,
      "IsDayOff": true,
      "Summary": {
        "Title": "Day Off",
        "TimeSpan": null,
        "Summary": null,
        "StyleClassName": "dayoff striped",
        "Color": null
      },
      "Periods": [],
      "DayOfWeekNumber": 3,
      "Availability": true,
      "HasNote": false,
      "ProbabilityClass": "good",
      "ProbabilityText": "Хорошая",
      "OpenHourPeriod": null,
      "HasNotScheduled": false,
      "BankHolidayCalendar": null,
      "BaseLayer": null
    },
    {
      "RequestsCount": 0,
      "Date": "23.01.2025",
      "FixedDate": "2025-01-23",
      "State": 0,
      "Header": {
        "Title": "четверг",
        "Date": "23.01.2025",
        "DayDescription": "",
        "DayNumber": "23"
      },
      "Note": {
        "Message": ""
      },
      "OvertimeAvailabililty": {
        "HasOvertimeAvailability": false,
        "StartTime": null,
        "EndTime": null,
        "EndTimeNextDay": false,
        "DefaultStartTime": "08:00",
        "DefaultEndTime": "17:00",
        "DefaultEndTimeNextDay": false
      },
      "HasMainShift": false,
      "HasOvertime": false,
      "IsFullDayAbsence": false,
      "IsDayOff": true,
      "Summary": {
        "Title": "Day Off",
        "TimeSpan": null,
        "Summary": null,
        "StyleClassName": "dayoff striped",
        "Color": null
      },
      "Periods": [],
      "DayOfWeekNumber": 4,
      "Availability": false,
      "HasNote": false,
      "ProbabilityClass": "",
      "ProbabilityText": "",
      "OpenHourPeriod": null,
      "HasNotScheduled": false,
      "BankHolidayCalendar": null,
      "BaseLayer": null
    },
    {
      "RequestsCount": 0,
      "Date": "24.01.2025",
      "FixedDate": "2025-01-24",
      "State": 0,
      "Header": {
        "Title": "пятница",
        "Date": "24.01.2025",
        "DayDescription": "",
        "DayNumber": "24"
      },
      "Note": {
        "Message": ""
      },
      "OvertimeAvailabililty": {
        "HasOvertimeAvailability": false,
        "StartTime": null,
        "EndTime": null,
        "EndTimeNextDay": false,
        "DefaultStartTime": "17:00",
        "DefaultEndTime": "18:00",
        "DefaultEndTimeNextDay": false
      },
      "HasMainShift": true,
      "HasOvertime": false,
      "IsFullDayAbsence": false,
      "IsDayOff": false,
      "Summary": {
        "Title": "Morning",
        "TimeSpan": "08:30 – 17:00",
        "Summary": "8 h",
        "StyleClassName": "color_ADD8E6",
        "Color": "rgb(173,216,230)"
      },
      "Periods": [
        {
          "Title": "Training",
          "TimeSpan": "08:30 – 08:40",
          "StartTime": "2025-01-24T08:30:00",
          "EndTime": "2025-01-24T08:40:00",
          "Summary": "10 min",
          "StyleClassName": "color_00FFFF",
          "Meeting": null,
          "StartPositionPercentage": 0.3541666666666667,
          "EndPositionPercentage": 0.3611111111111111,
          "Color": "0,255,255",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": true,
          "ShiftLayerId": "967a9829-5a8e-4ddd-be04-b25000e744bd",
          "IsLunch": false,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-24"
        },
        {
          "Title": "Ready",
          "TimeSpan": "08:40 – 10:00",
          "StartTime": "2025-01-24T08:40:00",
          "EndTime": "2025-01-24T10:00:00",
          "Summary": "1 h 20 min",
          "StyleClassName": "color_00C000",
          "Meeting": null,
          "StartPositionPercentage": 0.3611111111111111,
          "EndPositionPercentage": 0.4166666666666667,
          "Color": "0,192,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "1cc49ce8-3826-4716-9699-b25000e744bd",
          "IsLunch": false,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-24"
        },
        {
          "Title": "Break",
          "TimeSpan": "10:00 – 10:15",
          "StartTime": "2025-01-24T10:00:00",
          "EndTime": "2025-01-24T10:15:00",
          "Summary": "15 min",
          "StyleClassName": "color_FF8000",
          "Meeting": null,
          "StartPositionPercentage": 0.4166666666666667,
          "EndPositionPercentage": 0.4270833333333333,
          "Color": "255,128,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "8b8889df-8b42-4337-97a2-b25000e744bd",
          "IsLunch": false,
          "IsShortBreak": true,
          "BelongsToDate": "2025-01-24"
        },
        {
          "Title": "Training",
          "TimeSpan": "10:15 – 10:35",
          "StartTime": "2025-01-24T10:15:00",
          "EndTime": "2025-01-24T10:35:00",
          "Summary": "20 min",
          "StyleClassName": "color_00FFFF",
          "Meeting": {
            "Title": "PKT",
            "Location": "",
            "Description": "",
            "Agenda": null,
            "ExternalMeetingId": null
          },
          "StartPositionPercentage": 0.4270833333333333,
          "EndPositionPercentage": 0.4409722222222222,
          "Color": "0,255,255",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": true,
          "ShiftLayerId": null,
          "IsLunch": false,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-24"
        },
        {
          "Title": "Ready",
          "TimeSpan": "10:35 – 11:45",
          "StartTime": "2025-01-24T10:35:00",
          "EndTime": "2025-01-24T11:45:00",
          "Summary": "1 h 10 min",
          "StyleClassName": "color_00C000",
          "Meeting": null,
          "StartPositionPercentage": 0.4409722222222222,
          "EndPositionPercentage": 0.4895833333333333,
          "Color": "0,192,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "1cc49ce8-3826-4716-9699-b25000e744bd",
          "IsLunch": false,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-24"
        },
        {
          "Title": "Lunch",
          "TimeSpan": "11:45 – 12:15",
          "StartTime": "2025-01-24T11:45:00",
          "EndTime": "2025-01-24T12:15:00",
          "Summary": "30 min",
          "StyleClassName": "color_FFFF00",
          "Meeting": null,
          "StartPositionPercentage": 0.4895833333333333,
          "EndPositionPercentage": 0.5104166666666666,
          "Color": "255,255,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "c2fee70f-5c96-4e91-8994-b25000e744bd",
          "IsLunch": true,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-24"
        },
        {
          "Title": "Ready",
          "TimeSpan": "12:15 – 13:15",
          "StartTime": "2025-01-24T12:15:00",
          "EndTime": "2025-01-24T13:15:00",
          "Summary": "1 h",
          "StyleClassName": "color_00C000",
          "Meeting": null,
          "StartPositionPercentage": 0.5104166666666666,
          "EndPositionPercentage": 0.5520833333333334,
          "Color": "0,192,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "1cc49ce8-3826-4716-9699-b25000e744bd",
          "IsLunch": false,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-24"
        },
        {
          "Title": "Health & Safety",
          "TimeSpan": "13:15 – 13:45",
          "StartTime": "2025-01-24T13:15:00",
          "EndTime": "2025-01-24T13:45:00",
          "Summary": "30 min",
          "StyleClassName": "color_FF8000",
          "Meeting": null,
          "StartPositionPercentage": 0.5520833333333334,
          "EndPositionPercentage": 0.5729166666666666,
          "Color": "255,128,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "00bc4ba5-af37-4042-9e0b-b267008c55c4",
          "IsLunch": false,
          "IsShortBreak": true,
          "BelongsToDate": "2025-01-24"
        },
        {
          "Title": "Ready",
          "TimeSpan": "13:45 – 15:30",
          "StartTime": "2025-01-24T13:45:00",
          "EndTime": "2025-01-24T15:30:00",
          "Summary": "1 h 45 min",
          "StyleClassName": "color_00C000",
          "Meeting": null,
          "StartPositionPercentage": 0.5729166666666666,
          "EndPositionPercentage": 0.6458333333333334,
          "Color": "0,192,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "1cc49ce8-3826-4716-9699-b25000e744bd",
          "IsLunch": false,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-24"
        },
        {
          "Title": "Break",
          "TimeSpan": "15:30 – 15:45",
          "StartTime": "2025-01-24T15:30:00",
          "EndTime": "2025-01-24T15:45:00",
          "Summary": "15 min",
          "StyleClassName": "color_FF8000",
          "Meeting": null,
          "StartPositionPercentage": 0.6458333333333334,
          "EndPositionPercentage": 0.65625,
          "Color": "255,128,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "cf87982f-3bcd-4329-9bda-b25000e744bd",
          "IsLunch": false,
          "IsShortBreak": true,
          "BelongsToDate": "2025-01-24"
        },
        {
          "Title": "Training",
          "TimeSpan": "15:45 – 16:45",
          "StartTime": "2025-01-24T15:45:00",
          "EndTime": "2025-01-24T16:45:00",
          "Summary": "1 h",
          "StyleClassName": "color_00FFFF",
          "Meeting": {
            "Title": "QA File Reading + Test",
            "Location": "",
            "Description": "",
            "Agenda": null,
            "ExternalMeetingId": null
          },
          "StartPositionPercentage": 0.65625,
          "EndPositionPercentage": 0.6979166666666666,
          "Color": "0,255,255",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": true,
          "ShiftLayerId": null,
          "IsLunch": false,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-24"
        },
        {
          "Title": "Ready",
          "TimeSpan": "16:45 – 17:00",
          "StartTime": "2025-01-24T16:45:00",
          "EndTime": "2025-01-24T17:00:00",
          "Summary": "15 min",
          "StyleClassName": "color_00C000",
          "Meeting": null,
          "StartPositionPercentage": 0.6979166666666666,
          "EndPositionPercentage": 0.7083333333333334,
          "Color": "0,192,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "1cc49ce8-3826-4716-9699-b25000e744bd",
          "IsLunch": false,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-24"
        }
      ],
      "DayOfWeekNumber": 5,
      "Availability": false,
      "HasNote": false,
      "ProbabilityClass": "",
      "ProbabilityText": "",
      "OpenHourPeriod": null,
      "HasNotScheduled": false,
      "BankHolidayCalendar": null,
      "BaseLayer": null
    },
    {
      "RequestsCount": 0,
      "Date": "25.01.2025",
      "FixedDate": "2025-01-25",
      "State": 0,
      "Header": {
        "Title": "суббота",
        "Date": "25.01.2025",
        "DayDescription": "",
        "DayNumber": "25"
      },
      "Note": {
        "Message": ""
      },
      "OvertimeAvailabililty": {
        "HasOvertimeAvailability": false,
        "StartTime": null,
        "EndTime": null,
        "EndTimeNextDay": false,
        "DefaultStartTime": "17:00",
        "DefaultEndTime": "18:00",
        "DefaultEndTimeNextDay": false
      },
      "HasMainShift": true,
      "HasOvertime": false,
      "IsFullDayAbsence": false,
      "IsDayOff": false,
      "Summary": {
        "Title": "Morning",
        "TimeSpan": "08:30 – 17:00",
        "Summary": "8 h",
        "StyleClassName": "color_ADD8E6",
        "Color": "rgb(173,216,230)"
      },
      "Periods": [
        {
          "Title": "Training",
          "TimeSpan": "08:30 – 08:40",
          "StartTime": "2025-01-25T08:30:00",
          "EndTime": "2025-01-25T08:40:00",
          "Summary": "10 min",
          "StyleClassName": "color_00FFFF",
          "Meeting": null,
          "StartPositionPercentage": 0.3541666666666667,
          "EndPositionPercentage": 0.3611111111111111,
          "Color": "0,255,255",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": true,
          "ShiftLayerId": "d70114c8-9fec-4845-80dc-b25000e744bd",
          "IsLunch": false,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-25"
        },
        {
          "Title": "Ready",
          "TimeSpan": "08:40 – 10:00",
          "StartTime": "2025-01-25T08:40:00",
          "EndTime": "2025-01-25T10:00:00",
          "Summary": "1 h 20 min",
          "StyleClassName": "color_00C000",
          "Meeting": null,
          "StartPositionPercentage": 0.3611111111111111,
          "EndPositionPercentage": 0.4166666666666667,
          "Color": "0,192,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "76601a4c-b389-4923-a3ca-b25000e744bd",
          "IsLunch": false,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-25"
        },
        {
          "Title": "Break",
          "TimeSpan": "10:00 – 10:15",
          "StartTime": "2025-01-25T10:00:00",
          "EndTime": "2025-01-25T10:15:00",
          "Summary": "15 min",
          "StyleClassName": "color_FF8000",
          "Meeting": null,
          "StartPositionPercentage": 0.4166666666666667,
          "EndPositionPercentage": 0.4270833333333333,
          "Color": "255,128,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "35a46cb1-a2b6-4201-a973-b25000e744bd",
          "IsLunch": false,
          "IsShortBreak": true,
          "BelongsToDate": "2025-01-25"
        },
        {
          "Title": "Ready",
          "TimeSpan": "10:15 – 11:45",
          "StartTime": "2025-01-25T10:15:00",
          "EndTime": "2025-01-25T11:45:00",
          "Summary": "1 h 30 min",
          "StyleClassName": "color_00C000",
          "Meeting": null,
          "StartPositionPercentage": 0.4270833333333333,
          "EndPositionPercentage": 0.4895833333333333,
          "Color": "0,192,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "76601a4c-b389-4923-a3ca-b25000e744bd",
          "IsLunch": false,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-25"
        },
        {
          "Title": "Lunch",
          "TimeSpan": "11:45 – 12:15",
          "StartTime": "2025-01-25T11:45:00",
          "EndTime": "2025-01-25T12:15:00",
          "Summary": "30 min",
          "StyleClassName": "color_FFFF00",
          "Meeting": null,
          "StartPositionPercentage": 0.4895833333333333,
          "EndPositionPercentage": 0.5104166666666666,
          "Color": "255,255,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "f7b59ba2-d44c-48ea-935e-b25000e744bd",
          "IsLunch": true,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-25"
        },
        {
          "Title": "Ready",
          "TimeSpan": "12:15 – 13:45",
          "StartTime": "2025-01-25T12:15:00",
          "EndTime": "2025-01-25T13:45:00",
          "Summary": "1 h 30 min",
          "StyleClassName": "color_00C000",
          "Meeting": null,
          "StartPositionPercentage": 0.5104166666666666,
          "EndPositionPercentage": 0.5729166666666666,
          "Color": "0,192,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "76601a4c-b389-4923-a3ca-b25000e744bd",
          "IsLunch": false,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-25"
        },
        {
          "Title": "Health & Safety",
          "TimeSpan": "13:45 – 14:15",
          "StartTime": "2025-01-25T13:45:00",
          "EndTime": "2025-01-25T14:15:00",
          "Summary": "30 min",
          "StyleClassName": "color_FF8000",
          "Meeting": null,
          "StartPositionPercentage": 0.5729166666666666,
          "EndPositionPercentage": 0.59375,
          "Color": "255,128,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "a864b38a-430d-4544-bfee-b25000e744bd",
          "IsLunch": false,
          "IsShortBreak": true,
          "BelongsToDate": "2025-01-25"
        },
        {
          "Title": "Ready",
          "TimeSpan": "14:15 – 15:30",
          "StartTime": "2025-01-25T14:15:00",
          "EndTime": "2025-01-25T15:30:00",
          "Summary": "1 h 15 min",
          "StyleClassName": "color_00C000",
          "Meeting": null,
          "StartPositionPercentage": 0.59375,
          "EndPositionPercentage": 0.6458333333333334,
          "Color": "0,192,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "76601a4c-b389-4923-a3ca-b25000e744bd",
          "IsLunch": false,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-25"
        },
        {
          "Title": "Break",
          "TimeSpan": "15:30 – 15:45",
          "StartTime": "2025-01-25T15:30:00",
          "EndTime": "2025-01-25T15:45:00",
          "Summary": "15 min",
          "StyleClassName": "color_FF8000",
          "Meeting": null,
          "StartPositionPercentage": 0.6458333333333334,
          "EndPositionPercentage": 0.65625,
          "Color": "255,128,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "d97df9cb-03a6-41c1-a57e-b25000e744bd",
          "IsLunch": false,
          "IsShortBreak": true,
          "BelongsToDate": "2025-01-25"
        },
        {
          "Title": "Ready",
          "TimeSpan": "15:45 – 17:00",
          "StartTime": "2025-01-25T15:45:00",
          "EndTime": "2025-01-25T17:00:00",
          "Summary": "1 h 15 min",
          "StyleClassName": "color_00C000",
          "Meeting": null,
          "StartPositionPercentage": 0.65625,
          "EndPositionPercentage": 0.7083333333333334,
          "Color": "0,192,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "76601a4c-b389-4923-a3ca-b25000e744bd",
          "IsLunch": false,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-25"
        }
      ],
      "DayOfWeekNumber": 6,
      "Availability": false,
      "HasNote": false,
      "ProbabilityClass": "",
      "ProbabilityText": "",
      "OpenHourPeriod": null,
      "HasNotScheduled": false,
      "BankHolidayCalendar": null,
      "BaseLayer": null
    },
    {
      "RequestsCount": 0,
      "Date": "26.01.2025",
      "FixedDate": "2025-01-26",
      "State": 0,
      "Header": {
        "Title": "воскресенье",
        "Date": "26.01.2025",
        "DayDescription": "",
        "DayNumber": "26"
      },
      "Note": {
        "Message": ""
      },
      "OvertimeAvailabililty": {
        "HasOvertimeAvailability": false,
        "StartTime": null,
        "EndTime": null,
        "EndTimeNextDay": false,
        "DefaultStartTime": "17:00",
        "DefaultEndTime": "18:00",
        "DefaultEndTimeNextDay": false
      },
      "HasMainShift": true,
      "HasOvertime": false,
      "IsFullDayAbsence": false,
      "IsDayOff": false,
      "Summary": {
        "Title": "Morning",
        "TimeSpan": "08:30 – 17:00",
        "Summary": "8 h",
        "StyleClassName": "color_ADD8E6",
        "Color": "rgb(173,216,230)"
      },
      "Periods": [
        {
          "Title": "Training",
          "TimeSpan": "08:30 – 08:40",
          "StartTime": "2025-01-26T08:30:00",
          "EndTime": "2025-01-26T08:40:00",
          "Summary": "10 min",
          "StyleClassName": "color_00FFFF",
          "Meeting": null,
          "StartPositionPercentage": 0.3541666666666667,
          "EndPositionPercentage": 0.3611111111111111,
          "Color": "0,255,255",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": true,
          "ShiftLayerId": "ba062bec-0425-4ec9-9b09-b25000e744be",
          "IsLunch": false,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-26"
        },
        {
          "Title": "Ready",
          "TimeSpan": "08:40 – 09:45",
          "StartTime": "2025-01-26T08:40:00",
          "EndTime": "2025-01-26T09:45:00",
          "Summary": "1 h 5 min",
          "StyleClassName": "color_00C000",
          "Meeting": null,
          "StartPositionPercentage": 0.3611111111111111,
          "EndPositionPercentage": 0.40625,
          "Color": "0,192,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "39a59aff-2295-474e-ad2e-b25000e744be",
          "IsLunch": false,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-26"
        },
        {
          "Title": "Break",
          "TimeSpan": "09:45 – 10:00",
          "StartTime": "2025-01-26T09:45:00",
          "EndTime": "2025-01-26T10:00:00",
          "Summary": "15 min",
          "StyleClassName": "color_FF8000",
          "Meeting": null,
          "StartPositionPercentage": 0.40625,
          "EndPositionPercentage": 0.4166666666666667,
          "Color": "255,128,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "a0b8c2e4-afb0-4961-bb23-b25000e744be",
          "IsLunch": false,
          "IsShortBreak": true,
          "BelongsToDate": "2025-01-26"
        },
        {
          "Title": "Ready",
          "TimeSpan": "10:00 – 11:15",
          "StartTime": "2025-01-26T10:00:00",
          "EndTime": "2025-01-26T11:15:00",
          "Summary": "1 h 15 min",
          "StyleClassName": "color_00C000",
          "Meeting": null,
          "StartPositionPercentage": 0.4166666666666667,
          "EndPositionPercentage": 0.46875,
          "Color": "0,192,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "39a59aff-2295-474e-ad2e-b25000e744be",
          "IsLunch": false,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-26"
        },
        {
          "Title": "Lunch",
          "TimeSpan": "11:15 – 11:45",
          "StartTime": "2025-01-26T11:15:00",
          "EndTime": "2025-01-26T11:45:00",
          "Summary": "30 min",
          "StyleClassName": "color_FFFF00",
          "Meeting": null,
          "StartPositionPercentage": 0.46875,
          "EndPositionPercentage": 0.4895833333333333,
          "Color": "255,255,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "344f6631-7873-45d0-b2bd-b25000e744be",
          "IsLunch": true,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-26"
        },
        {
          "Title": "Ready",
          "TimeSpan": "11:45 – 13:15",
          "StartTime": "2025-01-26T11:45:00",
          "EndTime": "2025-01-26T13:15:00",
          "Summary": "1 h 30 min",
          "StyleClassName": "color_00C000",
          "Meeting": null,
          "StartPositionPercentage": 0.4895833333333333,
          "EndPositionPercentage": 0.5520833333333334,
          "Color": "0,192,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "39a59aff-2295-474e-ad2e-b25000e744be",
          "IsLunch": false,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-26"
        },
        {
          "Title": "Health & Safety",
          "TimeSpan": "13:15 – 13:45",
          "StartTime": "2025-01-26T13:15:00",
          "EndTime": "2025-01-26T13:45:00",
          "Summary": "30 min",
          "StyleClassName": "color_FF8000",
          "Meeting": null,
          "StartPositionPercentage": 0.5520833333333334,
          "EndPositionPercentage": 0.5729166666666666,
          "Color": "255,128,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "704f33fe-f4f0-4c78-a9ab-b25000e744be",
          "IsLunch": false,
          "IsShortBreak": true,
          "BelongsToDate": "2025-01-26"
        },
        {
          "Title": "Ready",
          "TimeSpan": "13:45 – 15:15",
          "StartTime": "2025-01-26T13:45:00",
          "EndTime": "2025-01-26T15:15:00",
          "Summary": "1 h 30 min",
          "StyleClassName": "color_00C000",
          "Meeting": null,
          "StartPositionPercentage": 0.5729166666666666,
          "EndPositionPercentage": 0.6354166666666666,
          "Color": "0,192,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "39a59aff-2295-474e-ad2e-b25000e744be",
          "IsLunch": false,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-26"
        },
        {
          "Title": "Break",
          "TimeSpan": "15:15 – 15:30",
          "StartTime": "2025-01-26T15:15:00",
          "EndTime": "2025-01-26T15:30:00",
          "Summary": "15 min",
          "StyleClassName": "color_FF8000",
          "Meeting": null,
          "StartPositionPercentage": 0.6354166666666666,
          "EndPositionPercentage": 0.6458333333333334,
          "Color": "255,128,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "9fedb3d8-81a6-407b-9c3f-b25000e744be",
          "IsLunch": false,
          "IsShortBreak": true,
          "BelongsToDate": "2025-01-26"
        },
        {
          "Title": "Ready",
          "TimeSpan": "15:30 – 17:00",
          "StartTime": "2025-01-26T15:30:00",
          "EndTime": "2025-01-26T17:00:00",
          "Summary": "1 h 30 min",
          "StyleClassName": "color_00C000",
          "Meeting": null,
          "StartPositionPercentage": 0.6458333333333334,
          "EndPositionPercentage": 0.7083333333333334,
          "Color": "0,192,0",
          "IsOvertime": false,
          "IsAbsence": false,
          "IsMovable": false,
          "IsBlocked": false,
          "ShiftLayerId": "39a59aff-2295-474e-ad2e-b25000e744be",
          "IsLunch": false,
          "IsShortBreak": false,
          "BelongsToDate": "2025-01-26"
        }
      ],
      "DayOfWeekNumber": 0,
      "Availability": false,
      "HasNote": false,
      "ProbabilityClass": "",
      "ProbabilityText": "",
      "OpenHourPeriod": null,
      "HasNotScheduled": false,
      "BankHolidayCalendar": null,
      "BaseLayer": null
    }
  ],
  "IsCurrentWeek": true,
  "CurrentWeekEndDate": "2025-01-26",
  "CurrentWeekStartDate": "2025-01-20",
  "Styles": [
    {
      "Name": "color_00FFFF",
      "ColorHex": "#00FFFF",
      "RgbColor": "0,255,255"
    },
    {
      "Name": "color_00C000",
      "ColorHex": "#00C000",
      "RgbColor": "0,192,0"
    },
    {
      "Name": "color_808080",
      "ColorHex": "#808080",
      "RgbColor": "128,128,128"
    },
    {
      "Name": "color_FF8000",
      "ColorHex": "#FF8000",
      "RgbColor": "255,128,0"
    },
    {
      "Name": "color_FFFF00",
      "ColorHex": "#FFFF00",
      "RgbColor": "255,255,0"
    },
    {
      "Name": "color_00008B",
      "ColorHex": "#00008B",
      "RgbColor": "0,0,139"
    },
    {
      "Name": "color_ADD8E6",
      "ColorHex": "#ADD8E6",
      "RgbColor": "173,216,230"
    }
  ],
  "INowDateTime": "2025-01-21T12:43:30.0973945",
  "TimeLine": [
    {
      "Time": "00:00:00",
      "TimeLineDisplay": "00:00",
      "PositionPercentage": 0,
      "TimeFixedFormat": null
    },
    {
      "Time": "01:00:00",
      "TimeLineDisplay": "01:00",
      "PositionPercentage": 0.041666666666666664,
      "TimeFixedFormat": null
    },
    {
      "Time": "02:00:00",
      "TimeLineDisplay": "02:00",
      "PositionPercentage": 0.08333333333333333,
      "TimeFixedFormat": null
    },
    {
      "Time": "03:00:00",
      "TimeLineDisplay": "03:00",
      "PositionPercentage": 0.125,
      "TimeFixedFormat": null
    },
    {
      "Time": "04:00:00",
      "TimeLineDisplay": "04:00",
      "PositionPercentage": 0.16666666666666666,
      "TimeFixedFormat": null
    },
    {
      "Time": "05:00:00",
      "TimeLineDisplay": "05:00",
      "PositionPercentage": 0.20833333333333334,
      "TimeFixedFormat": null
    },
    {
      "Time": "06:00:00",
      "TimeLineDisplay": "06:00",
      "PositionPercentage": 0.25,
      "TimeFixedFormat": null
    },
    {
      "Time": "07:00:00",
      "TimeLineDisplay": "07:00",
      "PositionPercentage": 0.2916666666666667,
      "TimeFixedFormat": null
    },
    {
      "Time": "08:00:00",
      "TimeLineDisplay": "08:00",
      "PositionPercentage": 0.3333333333333333,
      "TimeFixedFormat": null
    },
    {
      "Time": "09:00:00",
      "TimeLineDisplay": "09:00",
      "PositionPercentage": 0.375,
      "TimeFixedFormat": null
    },
    {
      "Time": "10:00:00",
      "TimeLineDisplay": "10:00",
      "PositionPercentage": 0.4166666666666667,
      "TimeFixedFormat": null
    },
    {
      "Time": "11:00:00",
      "TimeLineDisplay": "11:00",
      "PositionPercentage": 0.4583333333333333,
      "TimeFixedFormat": null
    },
    {
      "Time": "12:00:00",
      "TimeLineDisplay": "12:00",
      "PositionPercentage": 0.5,
      "TimeFixedFormat": null
    },
    {
      "Time": "13:00:00",
      "TimeLineDisplay": "13:00",
      "PositionPercentage": 0.5416666666666666,
      "TimeFixedFormat": null
    },
    {
      "Time": "14:00:00",
      "TimeLineDisplay": "14:00",
      "PositionPercentage": 0.5833333333333334,
      "TimeFixedFormat": null
    },
    {
      "Time": "15:00:00",
      "TimeLineDisplay": "15:00",
      "PositionPercentage": 0.625,
      "TimeFixedFormat": null
    },
    {
      "Time": "16:00:00",
      "TimeLineDisplay": "16:00",
      "PositionPercentage": 0.6666666666666666,
      "TimeFixedFormat": null
    },
    {
      "Time": "17:00:00",
      "TimeLineDisplay": "17:00",
      "PositionPercentage": 0.7083333333333334,
      "TimeFixedFormat": null
    },
    {
      "Time": "18:00:00",
      "TimeLineDisplay": "18:00",
      "PositionPercentage": 0.75,
      "TimeFixedFormat": null
    },
    {
      "Time": "19:00:00",
      "TimeLineDisplay": "19:00",
      "PositionPercentage": 0.7916666666666666,
      "TimeFixedFormat": null
    },
    {
      "Time": "20:00:00",
      "TimeLineDisplay": "20:00",
      "PositionPercentage": 0.8333333333333334,
      "TimeFixedFormat": null
    },
    {
      "Time": "21:00:00",
      "TimeLineDisplay": "21:00",
      "PositionPercentage": 0.875,
      "TimeFixedFormat": null
    },
    {
      "Time": "22:00:00",
      "TimeLineDisplay": "22:00",
      "PositionPercentage": 0.9166666666666666,
      "TimeFixedFormat": null
    },
    {
      "Time": "23:00:00",
      "TimeLineDisplay": "23:00",
      "PositionPercentage": 0.9583333333333334,
      "TimeFixedFormat": null
    },
    {
      "Time": "1.00:00:00",
      "TimeLineDisplay": "00:00",
      "PositionPercentage": 1,
      "TimeFixedFormat": null
    }
  ],
  "AsmEnabled": true,
  "DatePickerFormat": "dd.MM.yyyy",
  "DaylightSavingTimeAdjustment": {
    "StartDateTime": "2025-03-30T01:00:00",
    "EndDateTime": "2025-10-26T02:00:00",
    "AdjustmentOffsetInMinutes": 60,
    "LocalDSTStartTimeInMinutes": 0,
    "EnteringDST": false
  },
  "BaseUtcOffsetInMinutes": 120,
  "CheckStaffingByIntraday": false,
  "StaffingInfoAvailableDays": 49,
  "CheckStaffingByOvertimeRequestSettingOption": true,
  "AbsenceProbabilityEnabled": true,
  "OvertimeProbabilityEnabled": false,
  "RequestPermission": {
    "TextRequestPermission": false,
    "AbsenceRequestPermission": true,
    "ShiftTradeRequestPermission": false,
    "OvertimeAvailabilityPermission": false,
    "ShiftExchangePermission": false,
    "ShiftTradeBulletinBoardPermission": false,
    "PersonAccountPermission": true,
    "OvertimeRequestPermission": false,
    "RequestListPermission": false
  },
  "MoveLunchEnabled": false,
  "MoveShortBreakEnabled": false,
  "ViewPossibilityPermission": true,
  "AbsenceReportPermission": false
});
const events = ref([
    { status: 'Ordered', date: '10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0'},
    { status: 'Processing', date: '14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Shipped', date: '16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Delivered', date: '10:00', icon: 'pi pi-check', color: '#607D8B' }
]);

// const events = ref([
//         { status: 'Ordered', date: '2025-01-01', title: 'Order Placed', description: 'Order was placed successfully.' },
//         { status: 'Shipped', date: '2025-01-02', title: 'Order Shipped', description: 'Order was shipped to your address.' },
//       ])

onMounted(async () => {
  try {
    const response = await fetch(
      'https://teleopti.nordic.webhelp.com/TeleoptiWFM/Web/api/Schedule/FetchWeekData?date=&_=1737463385023',
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'accept-language': 'ru,en;q=0.9,ru-RU;q=0.8,en-US;q=0.7,lv;q=0.6',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'x-requested-with': 'XMLHttpRequest',
          'x-use-gregoriancalendar': 'true',
          cookie:
            'TeleoptiIpAuth=C26AA73C304822065647D4E6372980F60659C8ACD0C760382D13E214DFE9DAB1C865A3D537869EC6845DD7E63E145760AB136575E3886E035B30FE6F142F3D17992FBF75229C1D18187EBC1DF67BEFE2E3146E782FDCBA2542AC1FCEC0B2F1B1478B7765#; WfmAuth=...',
        },
        method: 'GET',
      }
    );
    const data = await response.json();
    console.log('Fetched data:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
    console.log(data);
  }
});
</script>

<template>
  <div class="container mx-auto">
    <nav className="sticky top-0 z-10 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl text-gray-900 font-semibold">Calabrio</span>
          <div className="flex space-x-4 text-gray-900">
            <a href="#">Dashboard</a>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </nav>
    <div class="container mx-sm">
      <div>{{ message }}</div>
      <!-- <div>{{ data.Days[0].Periods }}</div> -->
      <Timeline :value="data.Days[0].Periods" layout="vertical" class="w-64">
        <template #opposite="slotProps">
          <small class="text-surface-500 dark:text-surface-400">{{slotProps.item.TimeSpan}}</small>
        </template>
        <template #content="slotProps">
            {{ slotProps.item.Title }}
        </template>
      </Timeline>
    </div>
  </div>

</template>

<style scoped>
.timeline {
  position: relative;
  padding: 1rem;
}

.timeline-event {
  position: relative;
  margin-bottom: 2rem;
}

.timeline-event .event-marker {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: #007bff;
  position: absolute;
  left: -0.5rem;
  top: 0;
}
</style>
