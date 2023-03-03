import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class HomePageDetails {

    homePageData = [{
        banner_details: [{
            id: '1',
            propertyImage: '../../../assets/images/bannerImage1.jpg',
            propertyName: 'Amaze Plaza',
            propertyLoction: 'Powai, Mumbai',
            routeLink: ''
        },
        {
            id: '2',
            propertyImage: '../../../assets/images/bannerImage2.jpg',
            propertyName: 'Queen Tower',
            propertyLoction: 'Borivali West, Mumbai',
            routeLink: ''
        },
        {
            id: '3',
            propertyImage: '../../../assets/images/bannerImage3.jpg',
            propertyName: 'Pride Tower',
            propertyLoction: 'Mumbai Central, Mumbai',
            routeLink: ''
        },
        {
            id: '4',
            propertyImage: '../../../assets/images/bannerImage4.jpg',
            propertyName: 'Prime Heights',
            propertyLoction: 'Dadar East, Mumbai',
            routeLink: ''
        },
        ],
        property_card: [{
            id: '1',
            projectName: 'Amaze Tower',
            projectImg: '../../../assets/images/propyDemo2.jpg',
            projectLocation: 'Wagle Estate, Thane',
            priceTo: '46L',
            priceFrom: '58.5L',
            projectStatus: 'New Launch',
            roomVariation: '3,4 BHK',
            roomSize: '331 Sq.Ft (Carpet)',
            alt: 'Demo1'
        },
        {
            id: '2',
            projectName: 'Queen Cottage',
            projectImg: '../../../assets/images/propyDemo1.jpg',
            projectLocation: 'Palghar West, Thane',
            priceTo: '23L',
            priceFrom: '34L',
            projectStatus: 'New Launch',
            roomVariation: '2,3 BHK',
            roomSize: '331 Sq.Ft (Carpet)',
            alt: 'Demo2'
        },
        {
            id: '3',
            projectName: 'Amaze Heights',
            projectImg: '../../../assets/images/propyDemo3.jpg',
            projectLocation: 'Palghar West, Thane',
            priceTo: '23L',
            priceFrom: '34L',
            projectStatus: 'New Launch',
            roomVariation: '2,3 BHK',
            roomSize: '331 Sq.Ft (Carpet)',
            alt: 'Demo2'
        },
        {
            id: '3',
            projectName: 'Queen Tower',
            projectImg: '../../../assets/images/propyDemo4.jpg',
            projectLocation: 'Palghar West, Thane',
            priceTo: '23L',
            priceFrom: '34L',
            projectStatus: 'New Launch',
            roomVariation: '2,3 BHK',
            roomSize: '331 Sq.Ft (Carpet)',
            alt: 'Demo2'
        }
        ]
    }
    ]
}