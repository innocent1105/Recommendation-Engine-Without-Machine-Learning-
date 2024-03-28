
// dataset
var interests = [
    // tech
    { interest : "Technical support specialist", category : ["tech", "technology support"]},
    { interest : "computer programming", category : ["tech", "programming"]},
    { interest : "data analyst", category : ["data science", "data", "tech"]},
    { interest : "web developer", category : ["tech"]},
    { interest : "sales engineer", category : ["sales", "office jobs"]},
    { interest : "Database administrator", category : ["data", "tech"]},
    
    { interest : "Cybersecurity specialist", category : ["security", "technology support"]},
    { interest : "software engineer", category : ["programming", "tech"]},
    { interest : "graphic designer", category : ["designer", "graphic"]},
    { interest : "tutor", category : ["teaching", "writing","language"]},
    { interest : "blogger", category : ["writing", "language"]},
    { interest : "social media", category : ["ads", "marketing"]},    
    
   // business 
    { interest : "business administration", category : ["business", "office jobs"]},
    { interest : "economics", category : ["business", "management"]},
    { interest : "accountant", category : ["management"]},
    { interest : "marketing", category : ["marketing", "ads"]},
    { interest : "accounting software", category : ["management"]},
    { interest : "law firm", category : ["law"]},
    
    { interest : "agriculture", category : ["agric", "business"]},
    { interest : "farming", category : ["agric", "crops","plants"]},
    { interest : "fertilizer", category : ["crops", "chemicals", "agric"]},
    { interest : "farm management", category : ["management", "agric"]},
    { interest : "weather", category : ["crops", "plants"]},
    { interest : "organic manure", category : ["chemicals", "agric"]},    
    
    
    { interest : "online stores", category : ["ads", "business"]},
    { interest : "content editing", category : ["writing"]},
    { interest : "translation", category : ["writing", "language"]},
    { interest : "affiliate marketing", category : ["ads", "business"]},
    { interest : "photography", category : ["art","photoshop"]},
    { interest : "photoshop", category : ["art","photoshop", "graphic"]}, 
    
    { interest : "Human resource", category : ["offie jobs", "law"]},
    { interest : "SEO Professional", category : ["ads", "marketing"]},
    { interest : "Virtual Assistant", category : ["language"]},
    { interest : "CTO", category : ["tech", "office jobs"]},
    { interest : "ceo", category : ["business","office","management"]},
    { interest : "mining", category : ["gold", "copper", "minerals"]}, 
];

function process(){
let recommendations = [];
let cat1 = document.getElementById("cat1").value;
let cat2 = document.getElementById("cat2").value;
let cat3 = document.getElementById("cat3").value;
    let dataE = []
       dataE.push(cat1);
       dataE.push(cat2);
       dataE.push(cat3);
       
//        alert(dataE)
var search = dataE, categories = [];
//console.log(search)
search.map(all=>{
    interests.map(r=>{
        if(all === r.interest) categories=categories.concat(r.category);
    })
})
//console.log(categories) 
interests.map(all =>{
    categories.map(category =>{
        if(all.category.includes(category)&&recommendations.indexOf(all.interest)===-1)
            recommendations = recommendations.concat(all.interest)
    })
})
//alert(recommendations)
     let dcells = document.getElementById("data");
            dcells.innerHTML = " "
    for(let c = 0; c < recommendations.length; c++){
        let element = document.createElement("input")
        let dcells = document.getElementById("data"); 
            element.style.borderStyle = "hidden"
        dcells.appendChild(element)
        element.value = "("+ c +") " + recommendations[c]
    }


}
