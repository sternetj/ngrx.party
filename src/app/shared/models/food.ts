export class Food {
    public id: string;
    public name: string;
    public count: number;
    public obtained: boolean;
    public description: string;
    public users: {
      name: string;
      logo: string;
    }[];
}
