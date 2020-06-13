import axios from 'axios';
import {API_BASE_URL} from 'config';

export default {
    search: async function (query) {
        try {
            const response = await axios.get(API_BASE_URL + '/api/json/v1/1/search.php', {
                params: {
                    s: query
                }
            });
            const data = await response.data;
            const results = await data.drinks;
            return results;
        } catch (error) {
            console.log(error);
        }
    },
    getCocktails: async function() {
        try {
            const response = await axios.get(API_BASE_URL + '/api/json/v1/1/filter.php', {
                params: {
                    a: 'Alcoholic'
                }
            });
            const data = await response.data;
            const results = await data.drinks;
            return results;
        } catch (error) {

        }
    }
}