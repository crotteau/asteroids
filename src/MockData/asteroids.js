const asteroidsData = {
    links: {
        next: "http://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-08&end_date=2015-09-09&detailed=false&api_key=DEMO_KEY",
            previous: "http://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-06&end_date=2015-09-07&detailed=false&api_key=DEMO_KEY",
                self: "http://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&detailed=false&api_key=DEMO_KEY"
    },
    element_count: 27,
        near_earth_objects: {
        2015: [
            {
                links: {
                    self: "http://api.nasa.gov/neo/rest/v1/neo/2465633?api_key=DEMO_KEY"
                },
                id: "2465633",
                neo_reference_id: "2465633",
                name: "465633 (2009 JR5)",
                nasa_jpl_url: "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2465633",
                absolute_magnitude_h: 20.44,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.2170475943,
                        estimated_diameter_max: 0.4853331752
                    },
                    meters: {
                        estimated_diameter_min: 217.0475943071,
                        estimated_diameter_max: 485.3331752235
                    },
                    miles: {
                        estimated_diameter_min: 0.1348670807,
                        estimated_diameter_max: 0.3015719604
                    },
                    feet: {
                        estimated_diameter_min: 712.0984293066,
                        estimated_diameter_max: 1592.3004946003
                    }
                },
                is_potentially_hazardous_asteroid: true,
                close_approach_data: [
                    {
                        close_approach_date: "2015-09-08",
                        close_approach_date_full: "2015-Sep-08 20:28",
                        epoch_date_close_approach: 1441744080000,
                        relative_velocity: {
                            kilometers_per_second: "18.1279360862",
                            kilometers_per_hour: "65260.5699103704",
                            miles_per_hour: "40550.3802312521"
                        },
                        miss_distance: {
                            astronomical: "0.3027469457",
                            lunar: "117.7685618773",
                            kilometers: "45290298.225725659",
                            miles: "28142086.3515817342"
                        },
                        orbiting_body: "Earth"
                    }
                ],
                is_sentry_object: false
            },
            {
                links: {
                    self: "http://api.nasa.gov/neo/rest/v1/neo/3426410?api_key=DEMO_KEY"
                },
                id: "3426410",
                neo_reference_id: "3426410",
                name: "(2008 QV11)",
                nasa_jpl_url: "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3426410",
                absolute_magnitude_h: 21.34,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.1434019235,
                        estimated_diameter_max: 0.320656449
                    },
                    meters: {
                        estimated_diameter_min: 143.4019234645,
                        estimated_diameter_max: 320.6564489709
                    },
                    miles: {
                        estimated_diameter_min: 0.0891057966,
                        estimated_diameter_max: 0.1992466184
                    },
                    feet: {
                        estimated_diameter_min: 470.4787665793,
                        estimated_diameter_max: 1052.0225040417
                    }
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: "2015-09-08",
                        close_approach_date_full: "2015-Sep-08 14:31",
                        epoch_date_close_approach: 1441722660000,
                        relative_velocity: {
                            kilometers_per_second: "19.7498128142",
                            kilometers_per_hour: "71099.3261312856",
                            miles_per_hour: "44178.3562841869"
                        },
                        miss_distance: {
                            astronomical: "0.2591250701",
                            lunar: "100.7996522689",
                            kilometers: "38764558.550560687",
                            miles: "24087179.7459520006"
                        },
                        orbiting_body: "Earth"
                    }
                ],
                is_sentry_object: false
            },
            {
                links: {
                    self: "http://api.nasa.gov/neo/rest/v1/neo/3553060?api_key=DEMO_KEY"
                },
                id: "3553060",
                neo_reference_id: "3553060",
                name: "(2010 XT10)",
                nasa_jpl_url: "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3553060",
                absolute_magnitude_h: 26.5,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0133215567,
                        estimated_diameter_max: 0.0297879063
                    },
                    meters: {
                        estimated_diameter_min: 13.3215566698,
                        estimated_diameter_max: 29.7879062798
                    },
                    miles: {
                        estimated_diameter_min: 0.008277629,
                        estimated_diameter_max: 0.0185093411
                    },
                    feet: {
                        estimated_diameter_min: 43.7058959846,
                        estimated_diameter_max: 97.7293544391
                    }
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: "2015-09-08",
                        close_approach_date_full: "2015-Sep-08 12:07",
                        epoch_date_close_approach: 1441714020000,
                        relative_velocity: {
                            kilometers_per_second: "19.1530348886",
                            kilometers_per_hour: "68950.9255988812",
                            miles_per_hour: "42843.4237422604"
                        },
                        miss_distance: {
                            astronomical: "0.4917435147",
                            lunar: "191.2882272183",
                            kilometers: "73563782.385433689",
                            miles: "45710414.7542113482"
                        },
                        orbiting_body: "Earth"
                    }
                ],
                is_sentry_object: false
            },
            {
                links: {
                    self: "http://api.nasa.gov/neo/rest/v1/neo/3726710?api_key=DEMO_KEY"
                },
                id: "3726710",
                neo_reference_id: "3726710",
                name: "(2015 RC)",
                nasa_jpl_url: "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3726710",
                absolute_magnitude_h: 24.3,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0366906138,
                        estimated_diameter_max: 0.0820427065
                    },
                    meters: {
                        estimated_diameter_min: 36.6906137531,
                        estimated_diameter_max: 82.0427064882
                    },
                    miles: {
                        estimated_diameter_min: 0.0227984834,
                        estimated_diameter_max: 0.0509789586
                    },
                    feet: {
                        estimated_diameter_min: 120.3760332259,
                        estimated_diameter_max: 269.1689931548
                    }
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: "2015-09-08",
                        close_approach_date_full: "2015-Sep-08 09:45",
                        epoch_date_close_approach: 1441705500000,
                        relative_velocity: {
                            kilometers_per_second: "19.486643553",
                            kilometers_per_hour: "70151.9167909206",
                            miles_per_hour: "43589.6729637806"
                        },
                        miss_distance: {
                            astronomical: "0.0269252677",
                            lunar: "10.4739291353",
                            kilometers: "4027962.697099799",
                            miles: "2502859.9608192662"
                        },
                        orbiting_body: "Earth"
                    }
                ],
                is_sentry_object: false
            },
            {
                links: {
                    self: "http://api.nasa.gov/neo/rest/v1/neo/3727181?api_key=DEMO_KEY"
                },
                id: "3727181",
                neo_reference_id: "3727181",
                name: "(2015 RO36)",
                nasa_jpl_url: "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3727181",
                absolute_magnitude_h: 22.93,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0689532874,
                        estimated_diameter_max: 0.154184238
                    },
                    meters: {
                        estimated_diameter_min: 68.9532874451,
                        estimated_diameter_max: 154.1842379994
                    },
                    miles: {
                        estimated_diameter_min: 0.0428455732,
                        estimated_diameter_max: 0.0958056141
                    },
                    feet: {
                        estimated_diameter_min: 226.2247035814,
                        estimated_diameter_max: 505.8538153978
                    }
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: "2015-09-08",
                        close_approach_date_full: "2015-Sep-08 14:36",
                        epoch_date_close_approach: 1441722960000,
                        relative_velocity: {
                            kilometers_per_second: "15.8091452192",
                            kilometers_per_hour: "56912.9227892906",
                            miles_per_hour: "35363.4769409345"
                        },
                        miss_distance: {
                            astronomical: "0.0540517856",
                            lunar: "21.0261445984",
                            kilometers: "8086031.995456672",
                            miles: "5024427.2961871936"
                        },
                        orbiting_body: "Earth"
                    }
                ],
                is_sentry_object: false
            },
            {
                links: {
                    self: "http://api.nasa.gov/neo/rest/v1/neo/3727639?api_key=DEMO_KEY"
                },
                id: "3727639",
                neo_reference_id: "3727639",
                name: "(2015 RN83)",
                nasa_jpl_url: "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3727639",
                absolute_magnitude_h: 21.77,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.1176399894,
                        estimated_diameter_max: 0.2630510131
                    },
                    meters: {
                        estimated_diameter_min: 117.639989374,
                        estimated_diameter_max: 263.0510131126
                    },
                    miles: {
                        estimated_diameter_min: 0.0730980778,
                        estimated_diameter_max: 0.1634522711
                    },
                    feet: {
                        estimated_diameter_min: 385.9579827377,
                        estimated_diameter_max: 863.0282858603
                    }
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: "2015-09-08",
                        close_approach_date_full: "2015-Sep-08 15:42",
                        epoch_date_close_approach: 1441726920000,
                        relative_velocity: {
                            kilometers_per_second: "12.0811420305",
                            kilometers_per_hour: "43492.1113096542",
                            miles_per_hour: "27024.3066079349"
                        },
                        miss_distance: {
                            astronomical: "0.1684193589",
                            lunar: "65.5151306121",
                            kilometers: "25195177.358205543",
                            miles: "15655557.2525527734"
                        },
                        orbiting_body: "Earth"
                    }
                ],
                is_sentry_object: false
            },
            {
                links: {
                    self: "http://api.nasa.gov/neo/rest/v1/neo/3730577?api_key=DEMO_KEY"
                },
                id: "3730577",
                neo_reference_id: "3730577",
                name: "(2015 TX237)",
                nasa_jpl_url: "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3730577",
                absolute_magnitude_h: 23.3,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.058150704,
                        estimated_diameter_max: 0.130028927
                    },
                    meters: {
                        estimated_diameter_min: 58.1507039646,
                        estimated_diameter_max: 130.0289270043
                    },
                    miles: {
                        estimated_diameter_min: 0.0361331611,
                        estimated_diameter_max: 0.0807962044
                    },
                    feet: {
                        estimated_diameter_min: 190.7831555951,
                        estimated_diameter_max: 426.6041048727
                    }
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: "2015-09-08",
                        close_approach_date_full: "2015-Sep-08 14:19",
                        epoch_date_close_approach: 1441721940000,
                        relative_velocity: {
                            kilometers_per_second: "6.573400491",
                            kilometers_per_hour: "23664.2417675863",
                            miles_per_hour: "14704.0395583094"
                        },
                        miss_distance: {
                            astronomical: "0.0795238758",
                            lunar: "30.9347876862",
                            kilometers: "11896602.433824546",
                            miles: "7392205.9712328948"
                        },
                        orbiting_body: "Earth"
                    }
                ],
                is_sentry_object: false
            },
            {
                links: {
                    self: "http://api.nasa.gov/neo/rest/v1/neo/3731587?api_key=DEMO_KEY"
                },
                id: "3731587",
                neo_reference_id: "3731587",
                name: "(2015 UG)",
                nasa_jpl_url: "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=3731587",
                absolute_magnitude_h: 22.81,
                estimated_diameter: {
                    kilometers: {
                        estimated_diameter_min: 0.0728710415,
                        estimated_diameter_max: 0.1629446024
                    },
                    meters: {
                        estimated_diameter_min: 72.8710414898,
                        estimated_diameter_max: 162.9446023625
                    },
                    miles: {
                        estimated_diameter_min: 0.0452799519,
                        estimated_diameter_max: 0.1012490505
                    },
                    feet: {
                        estimated_diameter_min: 239.0782277615,
                        estimated_diameter_max: 534.595169215
                    }
                },
                is_potentially_hazardous_asteroid: false,
                close_approach_data: [
                    {
                        close_approach_date: "2015-09-08",
                        close_approach_date_full: "2015-Sep-08 18:50",
                        epoch_date_close_approach: 1441738200000,
                        relative_velocity: {
                            kilometers_per_second: "11.9557600601",
                            kilometers_per_hour: "43040.7362163935",
                            miles_per_hour: "26743.8396784585"
                        },
                        miss_distance: {
                            astronomical: "0.1132399881",
                            lunar: "44.0503553709",
                            kilometers: "16940461.018585347",
                            miles: "10526314.3652659086"
                        },
                        orbiting_body: "Earth"
                    }
                ],
                is_sentry_object: false
            }
        ]
    }
}

module.exports = asteroidsData;