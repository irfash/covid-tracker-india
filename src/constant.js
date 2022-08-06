export const API = "https://data.covid19india.org/v4/min";
export const API_DATA = `${API}/data.min.json`;
export const API_TIMESERIES = `${API}/timeseries.min.json`;

export const STATE_NAMES = {
  AP: "Andhra Pradesh",
  AR: "Arunachal Pradesh",
  AS: "Assam",
  BR: "Bihar",
  CT: "Chhattisgarh",
  GA: "Goa",
  GJ: "Gujarat",
  HR: "Haryana",
  HP: "Himachal Pradesh",
  JH: "Jharkhand",
  KA: "Karnataka",
  KL: "Kerala",
  MP: "Madhya Pradesh",
  MH: "Maharashtra",
  MN: "Manipur",
  ML: "Meghalaya",
  MZ: "Mizoram",
  NL: "Nagaland",
  OR: "Odisha",
  PB: "Punjab",
  RJ: "Rajasthan",
  SK: "Sikkim",
  TN: "Tamil Nadu",
  TG: "Telangana",
  TR: "Tripura",
  UT: "Uttarakhand",
  UP: "Uttar Pradesh",
  WB: "West Bengal",
  AN: "Andaman and Nicobar Islands",
  CH: "Chandigarh",
  DN: "Dadra and Nagar Haveli and Daman and Diu",
  DL: "Delhi",
  JK: "Jammu and Kashmir",
  LA: "Ladakh",
  LD: "Lakshadweep",
  PY: "Puducherry",
  // TT: "India",
};
const STATE_CODE_ARR = [];
const STATE_CODE_MAP = new Map();
const STATE_CODE_OBJ = {};

Object.entries(STATE_NAMES).map(([k, i]) => {
  STATE_CODE_ARR.push({ code: k, name: STATE_NAMES[k] });
  STATE_CODE_MAP.set(STATE_NAMES[k], k);
  STATE_CODE_OBJ[STATE_NAMES[k]] = k;
  return null;
});

export { STATE_CODE_ARR, STATE_CODE_MAP, STATE_CODE_OBJ };

export const SORTBY_OPT = [
  "Confirmed count",

  "Affected Percentage",

  "BananaVaccinated percentage",
];

export const SORTBY = [
  {
    label: "Confirmed count",
    value: "confirmed",
  },
  {
    label: "Confirmed count",
    value: "confirmed",
  },

  // "Affected Percentage",

  // "BananaVaccinated percentage",
];
