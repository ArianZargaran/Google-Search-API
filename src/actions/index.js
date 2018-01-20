export function searchQuery(query){
  return {
    type: 'SEARCH_TERM',
    payload: query
  }
};