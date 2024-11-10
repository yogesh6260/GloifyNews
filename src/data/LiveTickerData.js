const stockData = [
  {
    indexName: 'Sensex',
    currentValue: 65120.8,
    change: 450.65,
    percentageChange: 0.7,
  },
  {
    indexName: 'Nifty 50',
    currentValue: 19320.15,
    change: 135.25,
    percentageChange: 0.71,
  },
];

const topGainers = [
  {
    symbol: 'TATAMOTORS',
    price: 665.8,
    change: 18.45,
    percentageChange: 2.85,
  },
  {
    symbol: 'RELIANCE',
    price: 2620.55,
    change: 75.15,
    percentageChange: 2.95,
  },
  {
    symbol: 'HDFC',
    price: 2901.2,
    change: 56.3,
    percentageChange: 1.98,
  },
];

const topLosers = [
  {
    symbol: 'INFY',
    price: 1425.25,
    change: -36.5,
    percentageChange: -2.5,
  },
  {
    symbol: 'WIPRO',
    price: 395.4,
    change: -15.8,
    percentageChange: -3.84,
  },
  {
    symbol: 'ITC',
    price: 432.75,
    change: -9.6,
    percentageChange: -2.17,
  },
];

const sportsData = [
  {
    match: 'IRE vs SA - 2nd ODI',
    date: '04 Oct 2024',
    stadium: 'Sheikh Zayed Stadium',
    place: 'Abu Dhabi',
    status: 'Upcoming',
    outcome: 'Match starts at 5:00 PM',
    teamFlag1Code: 'IE',
    teamFlag2Code: 'ZA',
    teamFlag1Symbol: 'IRE',
    teamFlag2Symbol: 'SA',
  },
  {
    match: 'MUM vs ROI - Irani Cup',
    date: '01 Oct 2024',
    stadium: 'Bharat Ratna Shri Atal Bi...',
    place: 'Lucknow',
    status: 'LIVE',
    results: [
      {
        score: '537',
        bollsLeft: '10',
        overCompleted: '141',
        pointer: false,
      },
      {
        score: '235',
        bollsLeft: '4',
        overCompleted: '62',
        pointer: true,
      },
    ],
    outcome: 'Day 3 - Session 3, Rest of India trail by 302 runs.',
    teamFlag1Code: 'IN',
    teamFlag2Code: 'IE',
    teamFlag1Symbol: 'MUM',
    teamFlag2Symbol: 'ROI',
  },
  {
    match: 'IRE vs SA - 1st ODI',
    date: '02 Oct 2024',
    stadium: 'Sheikh Zayed Stadium',
    place: 'Abu Dhabi',
    status: 'Completed',
    results: [
      {
        score: '271',
        bollsLeft: '9',
        overCompleted: '50',
      },
      {
        score: '132',
        bollsLeft: '10',
        overCompleted: '31.5',
      },
    ],
    outcome: 'South Africa won by 139 runs.',
    teamFlag1Code: 'ZA',
    teamFlag2Code: 'IE',
    teamFlag1Symbol: 'SA',
    teamFlag2Symbol: 'IRE',
  },
  {
    match: 'KSO vs SSS - 12th T20',
    date: '02 Oct 2024',
    stadium: 'Lalabhai Contractor Stadi...',
    place: 'Surat',
    status: 'Completed',
    results: [
      {
        score: '192',
        bollsLeft: '9',
        overCompleted: '20',
      },
      {
        score: '195',
        bollsLeft: '2',
        overCompleted: '16',
      },
    ],
    outcome: 'Southern Super Stars won by 8 wickets',
    teamFlag1Code: 'IN',
    teamFlag2Code: 'IN',
    teamFlag1Symbol: 'KSO',
    teamFlag2Symbol: 'SSS',
  },
  {
    match: 'BAN-W vs SC-W - 1s...',
    date: '03 Oct 2024',
    stadium: 'Sharjah Cricket Stadium',
    place: 'Sharjah',
    status: 'LIVE',
    results: [
      {
        score: '55',
        bollsLeft: '1',
        overCompleted: '10',
        pointer: true,
      },
      {
        score: '0',
        bollsLeft: '0',
        overCompleted: '0',
        pointer: false,
      },
    ],
    outcome: 'Bangladesh Women elected to bat',
    teamFlag1Code: 'BD',
    teamFlag2Code: 'GB',
    teamFlag1Symbol: 'BAN-W',
    teamFlag2Symbol: 'SC-W',
  },
  {
    match: 'GAW vs SLK - Qualifi...',
    date: '03 Oct 2024',
    stadium: 'Providence Stadium',
    place: 'Guyana',
    status: 'Completed',
    results: [
      {
        score: '198',
        bollsLeft: '5',
        overCompleted: '20',
      },
      {
        score: '106',
        bollsLeft: '4',
        overCompleted: '13',
      },
    ],
    outcome: 'Saint Lucia Kings won by 15 runs (DLS method)',
    teamFlag1Code: 'LC',
    teamFlag2Code: 'GY',
    teamFlag1Symbol: 'SLK',
    teamFlag2Symbol: 'GAW',
  },
];

export {stockData, topGainers, topLosers, sportsData};
