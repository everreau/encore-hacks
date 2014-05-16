dojo.addOnLoad(function(){
	dojo.query('div#articlesPreviewAnyComponent').connect('onclick', function(evt){
		if(evt.target.id.indexOf("URLLinkComponent") != -1){
			_gaq.push(['_trackEvent', "Discovery", "Articles access click", "Read article"]);		
		}
		else if(evt.target.id.indexOf("recordDisplayLink2Component") != -1){
			_gaq.push(['_trackEvent', "Discovery", "Articles access click", "Read article"]);		
		}
		else if(evt.target.id.indexOf("fedSearchResultsLinkComponent") != -1){
			_gaq.push(['_trackEvent', "Discovery", "View more articles click", "Articles channel focus"]);		
		}	
	});
	
	dojo.query('span.content-Articles').connect('onclick', function(evt){ // articles at top of discovery
		_gaq.push(['_trackEvent', "Discovery", "Articles channel click", "Articles channel focus"]);		
	});

	dojo.query('span.content-Catalog').connect('onclick', function(evt){ // catalog at top of synergy
		_gaq.push(['_trackEvent', "Synergy", "Catalog channels click", "Catalog channel focus"]);		
	});

	dojo.query('div#facetsSearchPageArea').connect('onclick', function(evt){
		if(evt.target.id.indexOf("federatedResultsLinkComponent") != -1){
			_gaq.push(['_trackEvent', "Discovery", "Articles facet click", "Articles channel focus"]); // articles from facets
		}
	});

	dojo.query('span#pageContentUpdateAreaAnyComponent').connect('onclick', function(evt){
		if(evt.target.id.indexOf("URLLinkComponent") != -1){
			_gaq.push(['_trackEvent', "Synergy", "Articles access click", "Read article"]);	// synergy full text	
		}
		else if(evt.target.id.indexOf("recordDisplayLink2Component") != -1){
			_gaq.push(['_trackEvent', "Synergy", "Articles access click", "Read article"]); //synergy article title		
		}
	});

	dojo.query('div#portfoliosAreaAnyComponent').connect('onclick', function(evt){ 
		if(evt.target.parentNode.id.indexOf("changePortfolioLink2Component")){ // change portfolios
			var labels = {'General': 'General portfolio focus',
						  'Business': 'Business portfolio focus', 
						  'Literature': 'Literature Portfolio focus', 
						  'Kids': 'Kids portfolio focus', 
						  'Medical': 'Medical portfolio focus', 
						  'Student': 'Student portfolio focus'};
		    if(evt.target.innerHTML.replace(/\s/g, "") in labels){ // innerHTML doesn't match
				_gaq.push(['_trackEvent', "Synergy", "Portfolio selection", labels[evt.target.innerHTML]]);
			}
		}
	});
});
