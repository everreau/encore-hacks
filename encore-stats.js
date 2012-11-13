dojo.addOnLoad(function(){
	dojo.query('span#articlesPreviewAnyComponent').connect('onclick', function(evt){
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
	
	dojo.query('a#federatedResultsLinkComponent').connect('onclick', function(evt){
		_gaq.push(['_trackEvent', "Discovery", "Articles channel click", "Articles channel focus"]);		
	});

	dojo.query('div#facetsSearchPageArea').connect('onclick', function(evt){
		if(evt.target.id.indexOf("federatedResultsLinkComponent") != -1){
			_gaq.push(['_trackEvent', "Discovery", "Articles facet click", "Articles channel focus"]);
		}
	});

	dojo.query('span#pageContentUpdateAreaAnyComponent').connect('onclick', function(evt){
		if(evt.target.id.indexOf("URLLinkComponent") != -1){
			_gaq.push(['_trackEvent', "Synergy", "Articles access click", "Read article"]);		
		}
		else if(evt.target.id.indexOf("recordDisplayLink2Component") != -1){
			_gaq.push(['_trackEvent', "Synergy", "Articles access click", "Read article"]);		
		}
	});

	dojo.query('a#catalogResultsLinkComponent').connect('onclick', function(evt){
		_gaq.push(['_trackEvent', "Synergy", "Catalog channels click", "Catalog channel focus"]);		
	});

	dojo.query('div#portfoliosAreaAnyComponent').connect('onclick', function(evt){
		if(evt.target.parentNode.id.indexOf("changePortfolioLink2Component")){
			var labels = {'General': 'General portfolio focus',
				      'Business': 'Business portfolio focus', 
				      'Literature': 'Literature Portfolio focus', 
				      'Kids': 'Kids portfolio focus', 
				      'Medical': 'Medical portfolio focus', 
				      'Student': 'Student portfolio focus'};
			if(evt.target.innerHTML in labels){
				_gaq.push(['_trackEvent', "Synergy", "Portfolio selection", labels[evt.target.innerHTML]]);
			}
		}
	});
});
