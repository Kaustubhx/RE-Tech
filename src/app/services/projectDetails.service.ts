import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class projectsDetails {

    project: Array<Object> = [
        {
            id: '1',
            pojectName: 'Amaze Tower',
            projectLocation: 'Andheri East, Mumbai',
            projectPrice: [
                {
                    projectPrice_Lowest: '6.80 Cr',
                    projectPrice_Height: '8.30 Cr'
                }
            ],
            projectStaus: 'Ready To Move',
            projectSize: [
                {
                    projectUnits: '132',
                    projectArea: '3Acres',
                }
            ],
            projectRoomConfig: [
                {
                    projectFlatBHK: '3,4',
                    porjectFlatArea_Lowest: '1480',
                    porjectFlatArea_Heighest: '2100',
                    projctFlatAreaMeasureUnit: 'Carpet'
                }
            ],
            projectPriceList: [
                {
                    projectUnitTypes: [
                        {
                            projectUnitType_One: [
                                {
                                    projectUnit_BHK: '3BHK',
                                    proectUnit_Area: '1480',
                                }
                            ],
                            projectUnitType_Two: [
                                {
                                    projectUnit_BHK: '3BHK',
                                    proectUnit_Area: '1600',
                                }
                            ],
                            projectUnitType_Three: [
                                {
                                    projectUnit_BHK: '4BHK',
                                    proectUnit_Area: '2100',
                                }
                            ]
                        }
                    ],
                    projectArea: [
                        {
                            projectAreaType_One: [
                                {
                                    projectArea: '1480',
                                    projectAreaMeasureUnit: '(Carpet)'
                                }
                            ],
                            projectAreaType_Two: [
                                {
                                    projectArea: '1600',
                                    projectAreaMeasureUnit: '(Carpet)'
                                }
                            ],
                            projectAreaType_Three: [
                                {
                                    projectArea: '2100',
                                    projectAreaMeasureUnit: '(Carpet)'
                                }
                            ],
                        }
                    ],
                    projectHomePrice: [
                        {
                            projectUnitPricing_One: '6.00',
                            projectUnitPricing_Two: '6.70',
                            projectUnitPricing_Three: '8.90',
                        }
                    ]
                }
            ]
        }
    ]
}