var config = {
    style: 'mapbox://styles/fabiancpl91/cl4y7o29u003514jqkiag1kvb',
    accessToken: 'pk.eyJ1IjoiZmFiaWFuY3BsOTEiLCJhIjoiY2w0d3poZTU3MDJieDNqbDRrNGwwajk2ZiJ9.ZTAlm-46xSfdj27Jg2UYig',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Desirable Streets for Pedestrians',
    subtitle: 'Using a Street-Level Index to Assess Walkability',
    byline: 'By XXX',
    footer: 'Universidad de los Andes, Colombia. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Bogota City',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-74.1978936, 4.6986259],
                zoom: 9.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'walkability',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Usaquen',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-74.0135707, 4.7487012],
                zoom: 13,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'walkability',
                    opacity: 1,
                    duration: 100
                }
            ],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Bosa',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-74.2050812, 4.6256841],
                zoom: 14,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Suba',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-74.063033, 4.741604],
                zoom: 13.5,
                pitch: 0,
                bearing: 60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
