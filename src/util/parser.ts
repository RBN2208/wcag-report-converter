import { SingleReport } from '../types/types';

/**
 * parses the input file and returns it as typed object
 * @param file
 */
export default async function parseJsonFile(file: File): Promise<SingleReport | null> {
  return new Promise<SingleReport | null>((resolve) => {
    const fileReader = new FileReader();
    fileReader.onload = event => {
      if (event.target && typeof event.target.result === 'string') {
        const json = JSON.parse(event.target.result);
        delete json['@context'];
        console.log("Successfully parsed file", json);
        resolve(json as SingleReport); // Resolve with parsed JSON directly
      } else {
        console.log("Wrong event.target.result type");
        resolve(null);
      }
    };
    fileReader.onerror = error => {
      console.log("File reading failed:", error);
      resolve(null);
    };
    fileReader.readAsText(file);
  });
}
