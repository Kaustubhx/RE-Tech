import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class projectsDetails {

    scrollListOptions = ['Overview', 'Price List', 'Floor Plan', 'Broucher', 'Video', 'Amenities', 'Specification', 'Commute Time', 'Location & Landmark', 'About Builder']

    projects: Array<Object> = [
        {
            id: '1',
            projectName: 'Amaze Tower',
            projectLocation: 'Andheri East, Mumbai',
            projectPinCode: '400051',
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
            projectOverview: [
                {
                    propybuddyRegNumber: 'A8510000022114'
                },
                {
                    projectRegArea: 'P518000777235'
                },
                {
                    projectOverviewPara: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio dolor asperiores quos placeat voluptate modi, eligendi exercitationem doloremque ullam at quaerat, tempora aspernatur sed magni dolores. Neque dicta qui nemo sit. Nihil exercitationem ipsa libero ipsam consequuntur quas beatae quaerat!'
                }
            ],
            projectPriceList: [
                {
                    projectUnitTypes: [
                        {
                            projectPriceListTitle: 'Unit Type',
                            projectUnitType_One: [
                                {
                                    projectUnit_BHK: '3BHK',
                                    projectUnit_Area: '1480',
                                }
                            ],
                            projectUnitType_Two: [
                                {
                                    projectUnit_BHK: '3BHK',
                                    projectUnit_Area: '1600',
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
                            projectPriceListTitle: 'Area',
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
                            projectPriceListTitle: 'New Home Price'
                        },
                        {
                            projectUnitPricing_One: '6.00',
                            projectUnitPricing_Two: '6.70',
                            projectUnitPricing_Three: '8.90',
                        }
                    ]
                }
            ],
            projectFloorPlans: [
                {
                    floorPlanDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint natus mollitia porro est ex tenetur nobis, eveniet, quia dolor provident voluptate et quibusdam. Accusantium, sapiente? Culpa, animi aliquam eaque laborum rerum debitis.'
                },
                {
                    floorPlanImages_Variants: [
                        {},
                    ]
                }
            ],
            projectBroucher: [
                {

                },
            ],
            projectVideo: [
                {

                },
            ],
            projectAmenities: [
                {
                    amenitiesSummary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores consectetur iure a enim beatae deserunt, quae necessitatibus minus ex vitae numquam voluptatem.'
                },
                {
                    amenitieNameAndTypes: [
                        {
                            amenitieName: 'Sports',
                            amenitieList: ['Gymnasium', 'Swimming Pool', 'Kids Pool', 'Badminton Court(s)', 'Football', 'Kids Play Areas / Sand Pits', 'Basketball', 'Yoga Area', 'Jogging / Cycling Track', 'Table Tennis']
                        },
                        {
                            amenitieName: 'Convenience',
                            amenitieList: ['Power Backup', '24*7 Water Supply', 'Lift']
                        },
                        {
                            amenitieName: 'Safety',
                            amenitieList: ['24 x 7 Security', 'CCTV / Video Surveillance', 'Fire Fighting Systems', 'Intercom Facility']
                        },
                        {
                            amenitieName: 'Leisure',
                            amenitieList: ['Cafe / Coffee Bar', 'Party Hall', 'Clubhouse', 'Indoor Games', 'Conference Room', 'Spa']
                        },
                        {
                            amenitieName: 'Environment',
                            amenitieList: ['Rain Water Harvesting', 'Sewage Treatment Plant', 'Large Green Area']
                        },
                    ]
                }

            ],
            projectSpecifications: [
                {
                    specificationSummary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est atque repellat magnam quae aperiam commodi ducimus explicabo, amet odio sunt distinctio quam, unde facere laboriosam tenetur officia in et numquam exercitationem architecto molestias alias fuga nemo. Asperiores atque ratione assumenda impedit nisi.'
                },
                {
                    roomNamesAndSpecification: [
                        {
                            roomNameAndSide: 'Master Bedroom-Walls',
                            roomSpecification: 'Acrylic Emulsion',
                        },
                        {
                            roomNameAndSide: 'Master Bedroom-Flooring',
                            roomSpecification: 'Italian/Imported Marble',
                        },
                        {
                            roomNameAndSide: 'Other Bedrooms-Flooring',
                            roomSpecification: 'Italian/Imported Marble',
                        },
                        {
                            roomNameAndSide: 'Walls',
                            roomSpecification: 'Acrylic Emulsion',
                        },
                        {
                            roomNameAndSide: 'Living Area-Flooring',
                            roomSpecification: 'Italian/Imported Marble',
                        },
                        {
                            roomNameAndSide: 'Ceilings',
                            roomSpecification: 'False Ceiling',
                        },
                        {
                            roomNameAndSide: 'Fittings & Fixtures',
                            roomSpecification: 'Air Conditioner Fittings',
                        },
                        {
                            roomNameAndSide: 'Bathroom',
                            roomSpecification: ['Shower Panel', 'Exhaust Fan', 'Premium Bath Fittings'],
                        },
                        {
                            roomNameAndSide: 'Structure',
                            roomSpecification: 'RCC Frame Structure',
                        },

                    ]
                }
            ]
        },
        {
            id: '2',
            projectName: 'Amaze Tower',
            projectLocation: 'Andheri East, Mumbai',
            projectPinCode: '400605',
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
            projectOverview: [
                {
                    propybuddyRegNumber: 'A8510000022114'
                },
                {
                    projectRegArea: 'P518000777235'
                },
                {
                    projectOverviewPara: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio dolor asperiores quos placeat voluptate modi, eligendi exercitationem doloremque ullam at quaerat, tempora aspernatur sed magni dolores. Neque dicta qui nemo sit. Nihil exercitationem ipsa libero ipsam consequuntur quas beatae quaerat!'
                }
            ],
            projectPriceList: [
                {
                    projectUnitTypes: [
                        {
                            projectPriceListTitle: 'Unit Type',
                            projectUnitType_One: [
                                {
                                    projectUnit_BHK: '3BHK',
                                    projectUnit_Area: '1480',
                                }
                            ],
                            projectUnitType_Two: [
                                {
                                    projectUnit_BHK: '3BHK',
                                    projectUnit_Area: '1600',
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
                            projectPriceListTitle: 'Area',
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
                            projectPriceListTitle: 'New Home Price'
                        },
                        {
                            projectUnitPricing_One: '6.00',
                            projectUnitPricing_Two: '6.70',
                            projectUnitPricing_Three: '8.90',
                        }
                    ]
                }
            ],
            projectFloorPlans: [
                {
                    floorPlanDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint natus mollitia porro est ex tenetur nobis, eveniet, quia dolor provident voluptate et quibusdam. Accusantium, sapiente? Culpa, animi aliquam eaque laborum rerum debitis.'
                },
                {
                    floorPlanImages_Variants: [
                        {},
                    ]
                }
            ],
            projectBroucher: [
                {

                },
            ],
            projectVideo: [
                {

                },
            ],
            projectAmenities: [
                {
                    amenitiesSummary: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores consectetur iure a enim beatae deserunt, quae necessitatibus minus ex vitae numquam voluptatem.'
                },
                {
                    amenitieNameAndTypes: [
                        {
                            amenitieName: 'Sports',
                            amenitieList: ['Gymnasium', 'Swimming Pool', 'Kids Pool', 'Badminton Court(s)', 'Football', 'Kids Play Areas / Sand Pits', 'Basketball', 'Yoga Area', 'Jogging / Cycling Track', 'Table Tennis']
                        },
                        {
                            amenitieName: 'Convenience',
                            amenitieList: ['Power Backup', '24*7 Water Supply', 'Lift']
                        },
                        {
                            amenitieName: 'Safety',
                            amenitieList: ['24 x 7 Security', 'CCTV / Video Surveillance', 'Fire Fighting Systems', 'Intercom Facility']
                        },
                        {
                            amenitieName: 'Leisure',
                            amenitieList: ['Cafe / Coffee Bar', 'Party Hall', 'Clubhouse', 'Indoor Games', 'Conference Room', 'Spa']
                        },
                        {
                            amenitieName: 'Environment',
                            amenitieList: ['Rain Water Harvesting', 'Sewage Treatment Plant', 'Large Green Area']
                        },
                    ]
                }

            ],
            projectSpecifications: [
                {
                    specificationSummary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est atque repellat magnam quae aperiam commodi ducimus explicabo, amet odio sunt distinctio quam, unde facere laboriosam tenetur officia in et numquam exercitationem architecto molestias alias fuga nemo. Asperiores atque ratione assumenda impedit nisi.'
                },
                {
                    roomNamesAndSpecification: [
                        {
                            roomNameAndSide: 'Master Bedroom-Walls',
                            roomSpecification: 'Acrylic Emulsion',
                        },
                        {
                            roomNameAndSide: 'Master Bedroom-Flooring',
                            roomSpecification: 'Italian/Imported Marble',
                        },
                        {
                            roomNameAndSide: 'Other Bedrooms-Flooring',
                            roomSpecification: 'Italian/Imported Marble',
                        },
                        {
                            roomNameAndSide: 'Walls',
                            roomSpecification: 'Acrylic Emulsion',
                        },
                        {
                            roomNameAndSide: 'Living Area-Flooring',
                            roomSpecification: 'Italian/Imported Marble',
                        },
                        {
                            roomNameAndSide: 'Ceilings',
                            roomSpecification: 'False Ceiling',
                        },
                        {
                            roomNameAndSide: 'Fittings & Fixtures',
                            roomSpecification: 'Air Conditioner Fittings',
                        },
                        {
                            roomNameAndSide: 'Bathroom',
                            roomSpecification: ['Shower Panel', 'Exhaust Fan', 'Premium Bath Fittings'],
                        },
                        {
                            roomNameAndSide: 'Structure',
                            roomSpecification: 'RCC Frame Structure',
                        },

                    ]
                }
            ]
        }
    ]
}