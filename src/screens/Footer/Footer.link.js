import {Linking } from 'react-native';

const link = {
    govPh:()=>{
        Linking.openURL('https://www.google.com');
    },
    openDataPortal:()=>{
        Linking.openURL('https://www.google.com');
    },
    president:()=>{
        Linking.openURL('https://president.gov.ph/');
    },
    vicePresident:()=>{
        Linking.openURL('https://ovp.gov.ph/');
    },
    senateOfThePhilippines:()=>{
        Linking.openURL('https://web.senate.gov.ph/');
    },
    houseOfRepresentatives:()=>{
        Linking.openURL('https://www.congress.gov.ph/');
    },
    supremeCourt:()=>{
        Linking.openURL('https://sc.judiciary.gov.ph/');
    },
    courtOfAppeals:()=>{
        Linking.openURL('https://ca.judiciary.gov.ph/');
    },
    sandiganbayan:()=>{
        Linking.openURL('https://sb.judiciary.gov.ph/');
    },
    facebook:()=>{
        Linking.openURL('https://m.me/QuivirA.Cutanda');
    }
}

export default link;