import React from 'react'

export default function GetDateLiv(separator='') {
    
    var weekdays = new Array(7);
    weekdays[0] = "Lundi";
    weekdays[1] = "Mardi";
    weekdays[2] = "Mercredi";
    weekdays[3] = "Jeudi";
    weekdays[4] = "Vendredi";
    weekdays[5] = "Samedi";
    weekdays[6] = "Dimanche";

    var mois = new Array(12);
    mois[0] = "Janvier";
    mois[1] = "Février";
    mois[2] = "Mars";
    mois[3] = "Avril";
    mois[4] = "Mai";
    mois[5] = "Juin";
    mois[6] = "Juillet";
    mois[7] = "Aout";
    mois[8] = "Septembre";
    mois[9] = "Octobre";
    mois[10] = "Novembre";
    mois[11] = "Décembre";


        let newDate = new Date()
        let day = newDate.getDay();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        let data ={
            month:month<10?`${month}`:`${month}`,
            month_t :mois[month-1],
            weekday_numb:day,
           
            
            weekday_t:weekdays[day+1] ,

        }
        return (data)
        
}
