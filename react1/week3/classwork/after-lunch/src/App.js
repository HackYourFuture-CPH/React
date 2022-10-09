import { useEffect, useState, useCallback } from "react";

const API_URL = breed => {
  if(!breed)
    return 'https://dog.ceo/api/breeds/image/random';
    
  return `https://dog.ceo/api/breed/${breed}/images/random`;
};

function App() {
  const [src, setSrc] = useState(null);
  const [breed, setBreed] = useState('chihuahua');

  const fetchDog =  useCallback(async () => {
    const response = await fetch(API_URL(breed));
    const { message } = await response.json();
    setSrc(message);
  }, [breed]);

  useEffect(() => {
    fetchDog();
  }, [fetchDog]);

  return (
    <>
      <input type="text" value={breed} onChange={e => setBreed(e.target.value)}/>
      {/* <button onClick={fetchDog}>Fetch</button> */}
      {src && <img src={src} alt="a dog" width={"100%"}/>}
    </>
  );
}

export default App;

// const breeds = {
//   "message": {
//       "affenpinscher": [],
//       "african": [],
//       "airedale": [],
//       "akita": [],
//       "appenzeller": [],
//       "australian": [
//           "shepherd"
//       ],
//       "basenji": [],
//       "beagle": [],
//       "bluetick": [],
//       "borzoi": [],
//       "bouvier": [],
//       "boxer": [],
//       "brabancon": [],
//       "briard": [],
//       "buhund": [
//           "norwegian"
//       ],
//       "bulldog": [
//           "boston",
//           "english",
//           "french"
//       ],
//       "bullterrier": [
//           "staffordshire"
//       ],
//       "cattledog": [
//           "australian"
//       ],
//       "chihuahua": [],
//       "chow": [],
//       "clumber": [],
//       "cockapoo": [],
//       "collie": [
//           "border"
//       ],
//       "coonhound": [],
//       "corgi": [
//           "cardigan"
//       ],
//       "cotondetulear": [],
//       "dachshund": [],
//       "dalmatian": [],
//       "dane": [
//           "great"
//       ],
//       "deerhound": [
//           "scottish"
//       ],
//       "dhole": [],
//       "dingo": [],
//       "doberman": [],
//       "elkhound": [
//           "norwegian"
//       ],
//       "entlebucher": [],
//       "eskimo": [],
//       "finnish": [
//           "lapphund"
//       ],
//       "frise": [
//           "bichon"
//       ],
//       "germanshepherd": [],
//       "greyhound": [
//           "italian"
//       ],
//       "groenendael": [],
//       "havanese": [],
//       "hound": [
//           "afghan",
//           "basset",
//           "blood",
//           "english",
//           "ibizan",
//           "plott",
//           "walker"
//       ],
//       "husky": [],
//       "keeshond": [],
//       "kelpie": [],
//       "komondor": [],
//       "kuvasz": [],
//       "labradoodle": [],
//       "labrador": [],
//       "leonberg": [],
//       "lhasa": [],
//       "malamute": [],
//       "malinois": [],
//       "maltese": [],
//       "mastiff": [
//           "bull",
//           "english",
//           "tibetan"
//       ],
//       "mexicanhairless": [],
//       "mix": [],
//       "mountain": [
//           "bernese",
//           "swiss"
//       ],
//       "newfoundland": [],
//       "otterhound": [],
//       "ovcharka": [
//           "caucasian"
//       ],
//       "papillon": [],
//       "pekinese": [],
//       "pembroke": [],
//       "pinscher": [
//           "miniature"
//       ],
//       "pitbull": [],
//       "pointer": [
//           "german",
//           "germanlonghair"
//       ],
//       "pomeranian": [],
//       "poodle": [
//           "medium",
//           "miniature",
//           "standard",
//           "toy"
//       ],
//       "pug": [],
//       "puggle": [],
//       "pyrenees": [],
//       "redbone": [],
//       "retriever": [
//           "chesapeake",
//           "curly",
//           "flatcoated",
//           "golden"
//       ],
//       "ridgeback": [
//           "rhodesian"
//       ],
//       "rottweiler": [],
//       "saluki": [],
//       "samoyed": [],
//       "schipperke": [],
//       "schnauzer": [
//           "giant",
//           "miniature"
//       ],
//       "setter": [
//           "english",
//           "gordon",
//           "irish"
//       ],
//       "sharpei": [],
//       "sheepdog": [
//           "english",
//           "shetland"
//       ],
//       "shiba": [],
//       "shihtzu": [],
//       "spaniel": [
//           "blenheim",
//           "brittany",
//           "cocker",
//           "irish",
//           "japanese",
//           "sussex",
//           "welsh"
//       ],
//       "springer": [
//           "english"
//       ],
//       "stbernard": [],
//       "terrier": [
//           "american",
//           "australian",
//           "bedlington",
//           "border",
//           "cairn",
//           "dandie",
//           "fox",
//           "irish",
//           "kerryblue",
//           "lakeland",
//           "norfolk",
//           "norwich",
//           "patterdale",
//           "russell",
//           "scottish",
//           "sealyham",
//           "silky",
//           "tibetan",
//           "toy",
//           "welsh",
//           "westhighland",
//           "wheaten",
//           "yorkshire"
//       ],
//       "tervuren": [],
//       "vizsla": [],
//       "waterdog": [
//           "spanish"
//       ],
//       "weimaraner": [],
//       "whippet": [],
//       "wolfhound": [
//           "irish"
//       ]
//   },
//   "status": "success"
// };
