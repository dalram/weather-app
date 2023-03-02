export type weatherData = {
  name: string;
  coord: {
    lon: number;
    lat: number;
  };
  main: {
    temp: number;
    feels_like: number;
    temp_max: number;
    temp_min: number;
  };
  weather: [
    {
      description: string;
      icon: string;
    }
  ];
};
