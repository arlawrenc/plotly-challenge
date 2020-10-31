
function getData(idx)
{
	const samples=sampleData.samples;
	const otu_ids=samples[idx].otu_ids;
	const sample_values=samples[idx].sample_values;
	const otu_labels=samples[idx].otu_labels;
	const id =samples[idx].id;
	var newArray=[];
	const cnt=otu_ids.length>10?10:otu_ids.length;
	for (var i =0; i< cnt;++i){
		var temp = 	{
			id:id,
			otu_ids:otu_ids[i],
			value: sample_values[i],
			label: otu_labels[i]};

		newArray.push(temp);	
  }
  return newArray.sort(function (a, b) {
	return a.value - b.value;
  });
}
function getMeta (id)
{
//	alert("get meta: "+id);
	const obj=sampleData.metadata;
	for (var i in obj){
		//console.log ("get meta checking: "+element.id);
		if (obj[i].id==id){
			//alert ("found: "+obj[i].location);
			return obj[i];
		}
	}
}
function addToSelectList (listId)
{
	for (var i in sampleData.names)
	{
		const optionText= sampleData.names[i];
		$('#'+listId).append(`<option value="${i}"> 
                                       ${optionText} 
                                  </option>`); 
	}
}
        function showDemo(obj)
        {
            $("#demoId").text(obj.id);
            $("#ethnicity").text(obj.ethnicity);
            $("#gender").text(obj.gender);
            $("#age").text(obj.age);
            $("#location").text(obj.location);
            $("#bbtype").text(obj.bbtype);
            $("#wfreq").text(obj.wfreq);
        }