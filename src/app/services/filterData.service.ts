import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class filterModalData {

    filterData = [
        {
            label: 'Unit Type',
            types: ['Appartment', 'Builder Floor', 'Villa', 'Independent House', 'Penthouse', 'Plot'],
        },
        {
            label: 'Bedrooms',
            types: ['1 BHK', '1.5 BHK', '2 BHK', '2.5 BHK', '3 BHK', '4 BHK', '5 BHK'],
        }
    ];
}


export const getFilterValues = (filterValues: any) => {
    const {
        purpose,
        rentFrequency,
        categoryExternalID,
        minPrice,
        maxPrice,
        areaMax,
        roomsMin,
        bathsMin,
        sort,
        locationExternalIDs,
    } = filterValues;

    const values = [
        {
            name: 'purpose',
            value: purpose,
        },
        {
            name: 'rentFrequency',
            value: rentFrequency,
        },
        {
            name: 'minPrice',
            value: minPrice,
        },
        {
            name: 'maxPrice',
            value: maxPrice,
        },
        {
            name: 'areaMax',
            value: areaMax,
        },
        {
            name: 'roomsMin',
            value: roomsMin,
        },
        {
            name: 'bathsMin',
            value: bathsMin,
        },
        {
            name: 'sort',
            value: sort,
        },
        {
            name: 'locationExternalIDs',
            value: locationExternalIDs,
        },
        {
            name: 'categoryExternalID',
            value: categoryExternalID,
        },
    ];

    return values;
};