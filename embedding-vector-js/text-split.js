import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

// LangChain text splitter
async function splitDocument() {
  const response = await fetch('podcasts.txt');
  const text = await response.text();

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 150,
    chunkOverlap: 15,
  });
  const output = await splitter.createDocuments([text]);
  console.log(output);
}
splitDocument()
