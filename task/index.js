import x from './example';


function main() {
    // actualPageIdx to index wybranej strony (indexujemy od 0)
// entriesOnPage to maksymalna zwracana ilość elementów z dataEntries dla wybranej strony

// przykładowe dane
const data = [1,2,3,4,5,6];
const settings = { actualPageIdx: 1, entriesOnPage: 3 }; 

const paginateArray = (dataEntries, settings) => {
  let entriesOnSelectedPage = [];
  const startIdx = settings.actualPageIdx+1;
  const entriesPerPage = settings.entriesOnPage;
  const dataCount = dataEntries.length;
  let endIdx = 0;

  if (startIdx+entriesPerPage>=dataCount) { 
        endIdx=dataCount;
    }
  else {
      endIdx=startIdx+entriesPerPage
  }
  
  for (let i = startIdx; i<endIdx; i++) {
      entriesOnSelectedPage.push(dataEntries[i]);
  }
  
  return entriesOnSelectedPage;
};

const result = paginateArray(data, settings);
console.log(result);

}

export default main