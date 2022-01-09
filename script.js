// what do you think lol?
//find the clock object on the website
let clock = document.getElementById("clock");
//figure out how many seccons have passed from 1970-2021
const d = new Date("2021");
d.getTime();
//start the clock with the global carbon at 2021 + an aproximation of how much carbon has been produced this year
clock.innerText = 2400000000000 + (Date.now()-d.getTime())*43000000000/(365*24*60*60*1000);

//add a aproximation of the average carbon output every 10 millisecons
function setTime() {
  clock.innerText = parseInt(clock.innerText) + Math.round(43000000000/(365*24*60*60*100));
}

// run the set time function every 10 millisecons
setInterval(setTime, 10);



// giving the info their write sizes
let infoItems = document.querySelectorAll("ul#fistLayerInfo li");

for (let i = 0; i < infoItems.length; i++) {
  infoItems[i].style.height = "calc(" + infoItems[i].querySelector(".percent").innerText +" - 1em)";
}
let info = {
	"Transportation":"The Transportation sector includes the movement of people and goods by cars, trucks, trains, ships, airplanes, and other vehicles. The majority of greenhouse gas emissions from transportation are carbon dioxide (CO2) emissions resulting from the combustion of petroleum-based products, like gasoline, in internal combustion engines. The largest sources of transportation-related greenhouse gas emissions include passenger cars, medium- and heavy-duty trucks, and light-duty trucks, including sport utility vehicles, pickup trucks, and minivans. These sources account for over half of the emissions from the transportation sector. The remaining greenhouse gas emissions from the transportation sector come from other modes of transportation, including commercial aircraft, ships, boats, and trains, as well as pipelines and lubricants.",
	"Electricity production": "The Electricity sector involves the generation, transmission, and distribution of electricity. Carbon dioxide (CO2) makes up the vast majority of greenhouse gas emissions from the sector, but smaller amounts of methane (CH4) and nitrous oxide (N2O) are also emitted. These gases are released during the combustion of fossil fuels, such as coal, oil, and natural gas, to produce electricity. Less than 1 percent of greenhouse gas emissions from the sector come from sulfur hexafluoride (SF6), an insulating chemical used in electricity transmission and distribution equipment.",
	"Industry":"The Industry sector produces the goods and raw materials we use every day. The greenhouse gases emitted during industrial production are split into two categories: direct emissions that are produced at the facility, and indirect emissions that occur off site, but are associated with the facility's use of electricity.\n\nDirect emissions are produced by burning fuel for power or heat, through chemical reactions, and from leaks from industrial processes or equipment. Most direct emissions come from the consumption of fossil fuels for energy. A smaller amount of direct emissions, roughly one third, come from leaks from natural gas and petroleum systems, the use of fuels in production (e.g., petroleum products used to make plastics), and chemical reactions during the production of chemicals, iron and steel, and cement.\n\nIndirect emissions are produced by burning fossil fuel at a power plant to make electricity, which is then used by an industrial facility to power industrial buildings and machinery.",
	"Commercial and Residential":"The residential and commercial sectors include all homes and commercial businesses (excluding agricultural and industrial activities). Greenhouse gas emissions from this sector come from direct emissions including fossil fuel combustion for heating and cooking needs, management of waste and wastewater, and leaks from refrigerants in homes and businesses as well as indirect emissions that occur offsite but are associated with use of electricity consumed by homes and businesses.\n\nDirect emissions are produced from residential and commercial activities in a variety of ways:\n\n\nCombustion of natural gas and petroleum products for heating and cooking needs emits carbon dioxide (CO2), methane (CH4), and nitrous oxide (N2O). Emissions from natural gas consumption represent 80 percent of the direct fossil fuel CO2 emissions from the residential and commercial sectors in 2019. Coal consumption is a minor component of energy use in both of these sectors.\n\nrganic waste sent to landfills emits CH4.\n\nWastewater treatment plants emit CH4 and N2O.\n\nAnaerobic digestion at biogas facilities emits CH4.\n\nFluorinated gases (mainly hydrofluorocarbons, or HFCs) used in air conditioning and refrigeration systems can be released during servicing or from leaking equipment.\n\n\nIndirect emissions are produced by burning fossil fuel at a power plant to make electricity, which is then used in residential and commercial activities such as lighting and for appliances.",
	"Agriculture":"Agricultural activities — crop and livestock production for food — contribute to emissions in a variety of ways:\n\nVarious management practices on agricultural soils can lead to increased availability of nitrogen in the soil and result in emissions of nitrous oxide (N2O). Specific activities that contribute to N2O emissions from agricultural lands include the application of synthetic and organic fertilizers, the growth of nitrogen-fixing crops, the drainage of organic soils, and irrigation practices. Management of agricultural soils accounts for just over half of the greenhouse gas emissions from the Agriculture economic sector.\n\nLivestock, especially ruminants such as cattle, produce methane (CH4) as part of their normal digestive processes. This process is called enteric fermentation, and it represents over a quarter of the emissions from the Agriculture economic sector.\n\nThe way in which manure from livestock is managed also contributes to CH4 and N2O emissions. Different manure treatment and storage methods affect how much of these greenhouse gases are produced. Manure management accounts for about 12 percent of the total greenhouse gas emissions from the Agriculture economic sector in the United States.\n\nSmaller sources of agricultural emissions include CO2 from liming and urea application, CH4 from rice cultivation, and burning crop residues, which produces CH4 and N2O.",
	"Land Use and Forestry":"Plants absorb carbon dioxide (CO2) from the atmosphere as they grow, and they store some of this carbon as aboveground and belowground biomass throughout their lifetime. Soils and dead organic matter/litter can also store some of the carbon from these plants depending on how the soil is managed and other environmental conditions (e.g., climate). This storage of carbon in plants, dead organic matter/litter and soils is called biological carbon sequestration. Because biological sequestration takes CO2 out of the atmosphere and stores it in these carbon pools, it is also called a carbon \"sink.\"\n\nEmissions or sequestration of CO2, as well as emissions of CH4 and N2O can occur from management of lands in their current use or as lands are converted to other land uses. Carbon dioxide is exchanged between the atmosphere and the plants and soils on land, for example, as cropland is converted into grassland, as lands are cultivated for crops, or as forests grow. In addition, using biological feedstocks (such as energy crops or wood) for purposes such as electricity generation, as inputs to processes that create liquid fuels, or as building materials can lead to emissions or sequestration."
}
// changeInfo(this)
function changeInfo(ell) {
	for (let i = 0; i < infoItems.length; i++) {
		infoItems[i].style.backgroundColor = "lightgreen";
	}
	ell.style.backgroundColor = "rgb(206, 243, 206)";
	// console.log(info[ell.innerText.split("\n")[0]])
	document.getElementById("secLayerInfo").innerText = info[ell.innerText.split("\n")[0]];
}
console.log(document.querySelectorAll("#fistLayerInfo > li")[0])
changeInfo(document.querySelectorAll("#fistLayerInfo > li")[0])