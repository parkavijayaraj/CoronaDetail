
//using function to create dom element
function element(tag, classname, text) {
    let tags = document.createElement(tag);
    tags.classList = classname;
    tags.innerHTML = text;
    return tags;
  }
  //creating a base(container,heading,row)
  let container = element("div", "container", "");
  let h1 = element(
    "h1",
    "text-center tittle",
    "Corona Details"
  );
  const row = element("div", "row", "");
  
  //fetch part
  const response = fetch("https://coronavirus.m.pipedream.net/");
  //it return promise
  response // it return readable format
    .then((data) => data.json())
    .catch(error => {
        console.error(error)
        })
        //get the result from api
    .then((result) => {
      //console.log(result.rawData[1]);
      for (let i = 0; i < result.rawData.length; i++) {
        const col = document.createElement("div");
        col.classList = "col-sm-6 col-md-4 col-lg-4 col-xl-4";
        col.innerHTML = `
   <div class="card h-100">
   <div class="card-header">
   <h5 class="card-title text-center">${result.rawData[i].
    Country_Region 
   }</h5>
   </div>
   <div class="card-body">
   <div class="card-text text-center">
   Confirmed:${result.rawData[i].Confirmed}</div>
   <div class="card-text text-center">
   Deaths:${result.rawData[i].
    Deaths
    }</div>
   <div class="card-text text-center">
   Incident_Rate:${result.rawData[i].Incident_Rate}</div>
   </div>
   <div class="card-text text-center">
   Incident_Rate:${result.rawData[i].Incident_Rate
    }</div>
      </div>
  </div>
    
   `;
        row.append(col);
      }
      
    });
  
  container.append(row);
  document.body.append(h1, container);
  
  
  
  