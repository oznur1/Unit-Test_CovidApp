import axios from "axios";

const totalApi=axios.create({
    baseURL:"https://covid-19-statistics.p.rapidapi.com",
    headers: {
		'x-rapidapi-key': '307573e8d5msh377b2be983d0ee3p1fcf3bjsnf47f6bdc0cca',
		'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com'
	}
  
});

const detailApi = axios.create({
    baseURL:"https://covid-193.p.rapidapi.com",
    headers: {
		'x-rapidapi-key': '307573e8d5msh377b2be983d0ee3p1fcf3bjsnf47f6bdc0cca',
		'x-rapidapi-host': 'covid-193.p.rapidapi.com'
	}
});


const countryApi = axios.create({
	baseURL: "https://restcountries.com/v3.1",
  });
  
  export { detailApi, totalApi, countryApi };