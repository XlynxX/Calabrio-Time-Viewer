export default {
    data(){

        let data = fetch("https://teleopti.nordic.webhelp.com/TeleoptiWFM/Web/api/Schedule/FetchWeekData?date=&_=1737463385023", {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "ru,en;q=0.9,ru-RU;q=0.8,en-US;q=0.7,lv;q=0.6",
                "priority": "u=1, i",
                "sec-ch-ua": "\"Not A(Brand\";v=\"8\", \"Chromium\";v=\"132\", \"Google Chrome\";v=\"132\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest",
                "x-use-gregoriancalendar": "true",
                "cookie": "TeleoptiIpAuth=C26AA73C304822065647D4E6372980F60659C8ACD0C760382D13E214DFE9DAB1C865A3D537869EC6845DD7E63E145760AB136575E3886E035B30FE6F142F3D17992FBF75229C1D18187EBC1DF67BEFE2E3146E782FDCBA2542AC1FCEC0B2F1B1478B7765#; WfmAuth=0CCAD77B10A61BDE7620886F6A4F4A22892BE879B9F66EE574819F1F3D172A1917C6B33FEED6EF5F4C0EA705854F20040A7F9DF11E1DA4776E0090543F9478F5ECB26BF44BD837F2783B447CF8058E4257EA65800EB01975B1A3FB405C17B0CB19E5C96DAD39138A43C0936E46B20D4AAFF34D941A8538150C11F268F3BADAB64C0F1D2121DEBFC87DB08DB99FEEB6065B7C3F98C316770E41DEF1710F53D84245B8A699B403CBE4A8A8DEC01B1A1C3361D05813597D8C9DC9984EED542EA7791E265877A79D1BC5546EDA459E0E87DF9E47753D2CDDEF9C94447DC87DD00871E9E8EDBDD3CE9116B09E5A325F091F5F75D07CC25E8BD07AA763C2F6604EF6ABF6AC8F5ADC330CD03DF5350ABE1B2E2E3B156429850010352D5B079C38C8FD43A3E0486CBAB96975C73BFDEE84E4D00CFE1F17AB18E736AF9BB4B32DAE9A3682583E56CD60A21D937033B8DB1ECB7D679F045FCF3BD109CEABE4735A5642C4D49298503AC23F0B96F363DABC954928CF151FF84FF4B326D36848A6B322C6D1B33D5913DC#; __RequestVerificationToken_MainWeb=",
                "Referer": "https://teleopti.nordic.webhelp.com/teleoptiwfm/web/mytime",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
        });

        console.log("ts", data); 
        

        return {
            message: "Hello world HUJ"
        };
    }
}