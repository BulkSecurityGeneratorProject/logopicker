export class Eureka {
  applications: Application[];
}

export class Application {
  name: string;
  instances: Instance[];
}

export class Instance {
  homePageUrl: string;
}
