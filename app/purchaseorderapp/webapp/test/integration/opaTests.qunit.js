sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ey/mukesh/purchaseorderapp/test/integration/FirstJourney',
		'ey/mukesh/purchaseorderapp/test/integration/pages/POsList',
		'ey/mukesh/purchaseorderapp/test/integration/pages/POsObjectPage',
		'ey/mukesh/purchaseorderapp/test/integration/pages/POItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, POItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ey/mukesh/purchaseorderapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePOItemsObjectPage: POItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);