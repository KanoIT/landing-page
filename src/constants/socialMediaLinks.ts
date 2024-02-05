import ig from '../assets/svgs/socialMediaLogos/instagram.svg';
import lndn from '../assets/svgs/socialMediaLogos/linkedin.svg';


const getImageByName = (name: string) =>
{
    switch(name){
        case 'ig': 
            return ig;
        case 'linkedin':
            return lndn;
        default:
            return lndn;
    }
};


export const socialMediaLinks = [
    {
        text: '/kanosolucionesit',
        name: 'ig',
        logo: getImageByName('ig'),
        url: 'https://instagram.com/kanosolucionesit'
    },
    {
        text: '/kano-it',
        name: 'linkedin',
        logo: getImageByName('linkedin'),
        url: 'https://linkedin.com/kano-it'
    }
];
