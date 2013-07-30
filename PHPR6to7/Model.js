
guidedModel =// @startlock
{
	ListHTML :
	{
		methods :
		{// @endlock
			loadTestdata:function()
			{// @lock
				var testLines = loadText( ds.getModelFolder().path + "testdata/TT10M24AA2TTv7.html" );
				return testLines;
			},// @lock
			convertHTML:function(lines)
			{// @lock
				var v6HTML = lines.split("\n");
				var len = v6HTML.length;
				var v7HTML = new Array(len);
				var v7HTML = "";
				for ( var i=0; i<len; i++) {
					v7HTML= v7HTML + v6HTML[i] + "\n";
				}
				
				return v7HTML;
			}// @startlock
		}
	}
};// @endlock
